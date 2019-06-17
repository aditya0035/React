const LoggerMiddleware=(store)=>{
    return(next)=>{
        return(dispatch)=>{
            console.log("Inside Logger middlerware dispacth is",dispatch)
            console.log("state before dispacth",store.getState())
            let result=next(dispatch) //call next middleware
            console.log("state after dispacth",store.getState())
            console.log("Request Processed");
            return result;
        }
    }
}

export default LoggerMiddleware