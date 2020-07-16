const dataReducer = (currentState, action) => {
  console.log("Calling reducer");
  console.log("-----------------")
  switch (action.type) {
    case 'FETCH_DATA_INIT':
      return {
        ...currentState,
        isLoading: true
      };
    case 'DATA_FETCH_SUCCESS':
      return {
        ...currentState,
        data: action.payload,
        isLoading: false
      };
    case 'DATA_FETCH_FAILED':
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