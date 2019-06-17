import {createStore,applyMiddleware} from 'redux'
import Reducers from '../Reduces/AllReducers'
import LoggerMiddleware from '../Middlewares/LoggerMiddleware'
import AsyncMiddleware from '../Middlewares/AsyncMiddleware'
const Store=createStore(Reducers,applyMiddleware(LoggerMiddleware,AsyncMiddleware));
export default Store