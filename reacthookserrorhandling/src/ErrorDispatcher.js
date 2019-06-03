const ErrorDispatcher=(state,action)=>{
    switch (action.type) {
        case "ErrorOccured":
          return {
            ...state,
            hasError:action.payload.hasError,
            errorMessage:action.payload.errorMessage
          }      
        default:
          return state;
      }
}

export default ErrorDispatcher