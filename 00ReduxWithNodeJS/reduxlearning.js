const redux=require("redux");
const ActionCreator=require("./actionCreator")

const initState={
    counter:0
}
reducer=(state=initState,action)=>{
    //Synchronous in nature
    switch (action.type) {
        case 'INC_COUNTER':
            let currentState=Object.assign({},state);
            currentState.counter=currentState.counter+action.value;
            return currentState;
            
        default:
            break;
    }
    return state;
};
const logger=(store)=>{
    return (next)=>{
        return (dispatch)=>{
            console.log("Request recieved",dispatch)
            console.log("middleware state",store.getState())
            let result=next(dispatch);
            console.log("request exists");
            return result;
        }
    }
}
const validateRequest=(store)=>{
    return (next)=>{
        return (dispatch)=>{
            console.log("Validate middleware")
            if(dispatch.value<0){
                console.log("Validate middleware less then 0")
                return store.state;
            }
            else{
                let result=next(dispatch);
                console.log("Validate middleware going to update")
                return result;
            }
        }
    }
}

const AsyncMiddleware=(store)=>{
    return(next)=>{
        return (dispatch)=>{
            return setTimeout(() => {
                console.log("Asyc Middleare")
               return next(dispatch);
            }, 2000);
        }
    }
}

const store=redux.createStore(reducer,redux.applyMiddleware(logger,validateRequest,AsyncMiddleware));
store.subscribe(()=>{
    console.log(store.getState())
});
store.dispatch(ActionCreator.IncresementCounter(-1));
store.dispatch(ActionCreator.IncresementCounter(1));
store.dispatch(ActionCreator.IncresementCounter(10));


