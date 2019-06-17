import {createStore,applyMiddleware} from 'redux'
import Reducers from '../Reduces/AllReducers'
//import LoggerMiddleware from '../Middlewares/LoggerMiddleware'
//import AsyncMiddleware from '../Middlewares/AsyncMiddleware'
import thunk from 'redux-thunk'
const Store=createStore(Reducers,applyMiddleware(thunk));
export default Store