const redux=require("redux")
const Saga=require("./reduxSagaGenerators")
const reduxSaga=require("redux-saga")
const initState={
    counter:0
}
const sagaMiddleWare=reduxSaga.default();
const reducer=(state=initState,action)=>{
    console.log(state,action)
    return state;
}
const store=redux.createStore(reducer,redux.applyMiddleware(sagaMiddleWare))
sagaMiddleWare.run(Saga.HelloWorld);
