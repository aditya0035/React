const redux=require("redux");
const ActionType=require("./actionTypes")
const ReduxSaga=require("redux-saga")
const SagaWatcher=require("./reduxSagaWatcher")
const initState={
    counter:0
}
reducer=(state=initState,action)=>{
    console.log("request came");
    //Synchronous in nature
    switch (action.type) {
        case ActionType.Increasement:
            let currentState=Object.assign({},state);
            currentState.counter=currentState.counter+action.value;
            return currentState;
        default:
            break;
    }
    return state;
};
const SagaMiddleWare=ReduxSaga.default();
const store=redux.createStore(reducer,redux.applyMiddleware(SagaMiddleWare));
SagaMiddleWare.run(SagaWatcher.WatchIncresementCounter);
store.subscribe(()=>{
    console.log(store.getState())
});
store.dispatch({type:ActionType.Increasement_Initated,value:10});




