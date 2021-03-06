import React from 'react';
import { LandingPage, Login } from './pages'
import { Header, Footer } from './components'
import { Route, Switch } from 'react-router-dom'
import userStatusReducer from './util/userStatusReducer'
import { updateShoppingList } from './util/api'
import * as types from "./util/types"

const SERVER_USER_API = (process.env.NODE_ENV === 'development') ? process.env.REACT_APP_DEV_USER_API : process.env.REACT_APP_PROD_USER_API

function App() {

  const [userState, dispatchUser] = React.useReducer(userStatusReducer, {
    authenticated: false,
    shoppingList: [],
    userId: null,
    loggingIn: false,
    loginErrored: false,
    updateErrored: false
  })
 

  React.useEffect(() => {

    /**
     * source: https://github.com/leannezhang/twitter-authentication
     */

    fetch(`${SERVER_USER_API}/auth/login/success`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
    .then(response => {
      if (response.status === 200) return response.json()
      else dispatchUser({type: types.USER_LOGIN_FAILED})
    })
    .then(userInfo => {
      dispatchUser({type: types.USER_LOGIN_SUCCESS, payload: userInfo.user})
    })
    .catch(err => {
      dispatchUser({type: types.USER_LOGIN_FAILED})
    })
  }, [])


  const updateUserShoppingList = (content) => {
    if(content.isAdded) {
      updateShoppingList(SERVER_USER_API,
        content, "/removeItem/", userState.userId,
        dispatchUser)
    } else {
      updateShoppingList(SERVER_USER_API,
        content, "/addItem/", userState.userId,
        dispatchUser)
    }
  }

  return (<>
    <Header userState={userState}/>
    <Switch>
      <Route exact path="/">
        <LandingPage 
        userState={userState}
        updateList={updateUserShoppingList}/>
      </Route>
      <Route exact path="/login">
        <Login updateUser={dispatchUser}/>
      </Route>
    </Switch>
    <Footer />
    </>
  )
}


export default App