import React from 'react';
import axios from 'axios'
import { LandingPage, Login } from './pages'
import { Header, Footer } from './components'
import { Route, Switch } from 'react-router-dom'
import dataReducer from './util/dataReducer'
import userStatusReducer from './util/userStatusReducer'
import fetchData from './util/api.js';
import fetchDataTest from './test/testApi';
import * as types from "./util/types"

const SERVER_DOMAIN = (process.env.REACT_APP_NODE_ENV === 'development') ? 'http://localhost:4000' : process.env.REACT_APP_USER_API

function App() {

  const [userState, dispatchUser] = React.useReducer(userStatusReducer, {
    authenticated: false,
    shoppingList: [],
    userId: null,
    loggingIn: false,
    loginErrored: false
  })

  const [dbData, dispatchData] = React.useReducer(dataReducer, {
    data: [],
    isLoading: false,
    isErrored: false
  });

  /** using React.useCallback hook */

  const fetchAPI = React.useCallback(async() => {
    let url = (process.env.REACT_APP_NODE_ENV === 'development') ? process.env.REACT_APP_DEVELOPMENT_API : process.env.REACT_APP_DATA_API;
    console.log(url);
    fetchData(dispatchData, url);
    
    /** ENABLE THIS FOR DATA TESTING WITHOUT GOING TO ACTUAL API */
    // fetchDataTest(dispatchData);

  }, [])

    /** get data from api **/

    React.useEffect(() => {
      console.log("fetching data in React.UseEffect");
      console.log("--------------------------------");
      fetchAPI();
    }, [fetchAPI])
  

    React.useEffect(() => {
      console.log("Calling useEffect for fetching user/auth/login/success")
      console.log(userState)

      fetch("http://localhost:4000/user/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
      .then(response => {
        console.log("useEffect for userState");
        console.log(response.status);
        console.log("-----------------------")
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

    const updateUserShoppingList = (contentToBeAdded) => {
        if (contentToBeAdded.isAdded) {
          // call PUT addItem route, to add contentID to user
          fetch(`${SERVER_DOMAIN}/removeItem/${userState.userId}`, {
           method: 'PUT',
           credentials: "include",
           headers: {
             'Content-type': 'application/json'
           },
           body: contentToBeAdded
          })
          .then(response => response.json())
          .then(result => {
            axios.get(`${SERVER_DOMAIN}/getShoppingList/${userState.userId}`)
            .then(result => {
              dispatchUser({type: types.USER_SHOPPINGLIST_UPDATE, payload: result.userList})
            })
            .catch(err => {
              dispatchUser({type: types.USER_SHOPPINGLIST_UPDATE, payload: []})
            })
          })
          .catch(err => {
            dispatchUser({type: types.USER_SHOPPINGLIST_UPDATE, payload: []})
          })
         
        } else {
          fetch(`${SERVER_DOMAIN}/addItem/${userState.userId}`, {
            method: 'PUT',
            credentials: "include",
            headers: {
              'Content-type': 'application/json'
            },
            body: contentToBeAdded
           })
           .then(response => response.json())
           .then(result => {
             axios.get(`${SERVER_DOMAIN}/getShoppingList/${userState.userId}`)
             .then(result => {
              dispatchUser({type: types.USER_SHOPPINGLIST_UPDATE, payload: result.userList})
            })
            .catch(err => {
              dispatchUser({type: types.USER_SHOPPINGLIST_UPDATE, payload: []})
            })
           })
           .catch(err => {
            dispatchUser({type: types.USER_SHOPPINGLIST_UPDATE, payload: []})
           })
        }
  }

  return (<>
    <Header userState={userState}/>
    <Switch>
      <Route exact path="/">
        <LandingPage 
        data={dbData} 
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