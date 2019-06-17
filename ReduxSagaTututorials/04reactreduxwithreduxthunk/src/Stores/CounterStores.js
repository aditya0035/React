import {createStore,applyMiddleware} from 'redux'
import Reducers from '../Reduces/AllReducers'
import createSagaMiddleware from 'redux-saga'
import WatchIncreaseCounter from '../SagaWatcher/CounterSagaWatcher'
//import LoggerMiddleware from '../Middlewares/LoggerMiddleware'
//import AsyncMiddleware from '../Middlewares/AsyncMiddleware'
// import thunk from 'redux-thunk'
const SagaMiddleWare=createSagaMiddleware();
const Store=createStore(Reducers,applyMiddleware(SagaMiddleWare));
SagaMiddleWare.run(WatchIncreaseCounter);
export default Store