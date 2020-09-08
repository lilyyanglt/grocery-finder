import  * as types from './types'

const dataReducer = (currentState, action) => {
  
  switch (action.type) {
    case types.DATA_INIT:
      return {
        ...currentState,
        isLoading: true
      };
    case types.DATA_FETCH_SUCCESS:
      return {
        ...currentState,
        data: action.payload,
        isLoading: false
      };
    case types.DATA_FETCH_FAILED:
      return {
        ...currentState,
        isErrored: true,
        isLoading: false
      };
    default:
      throw new Error()
  }
}
 

export default dataReducer;