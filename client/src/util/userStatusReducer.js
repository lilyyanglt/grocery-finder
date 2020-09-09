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
        shoppingList: action.payload.list,
        userId: action.payload.id,
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
    case types.USER_SHOPPINGLIST_UPDATE_SUCCESS:
      return {
        ...currentState,
        loginErrored: false,
        loggingIn: false,
        shoppingList: action.payload
      }

    case types.USER_SHOPPINGLIST_UPDATE_FAILED:
      return {
        ...currentState,
        updateErrored: true
      }
    default: 
      throw new Error()
  }
} 


export default userStatusReducer;
