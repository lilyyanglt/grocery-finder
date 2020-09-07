import * as types from '../util/types'

const userStatusReducer = (currentState, action) => {
  switch(action.type) {
    case types.USER_INIT:
      return {
        ...currentState,
        loggingIn: true
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...currentState,
        shoppingList: action.payload.shoppingList,
        userId: action.payload._id,
        loggingIn: false,
        authenticated: true
      };
    case types.USER_LOGIN_FAILED:
      return {
        ...currentState,
        loginErrored: true,
        loggingIn: false,
        authenticated: false
      };
    case types.USER_SHOPPINGLIST_UPDATE:
      return {
        ...currentState,
        loginErrored: false,
        loggingIn: false,
        shoppingList: action.payload
      }
    default: 
      throw new Error()
  }
} 


export default userStatusReducer;
/**
 *  const [userState, dispatchUser] = React.useReducer(userStatusReducer, {
    isLoggedIn: false,
    shoppingList: [],
    userId: null,
    logginIn: false,
    loginErrored: false
  })
 */