const AsyncMiddleware=(store)=>{
    return (next)=>{
        return(dispatch)=>{
            setTimeout(() => {
                console.log("Async Dispatcher called",dispatch)
                next(dispatch)
                console.log("Async Dispatcher Ended",store.getState())
            }, 4000);
        }
    }
}

export default AsyncMiddleware