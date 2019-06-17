import {createStore} from 'redux'
import Reducers from '../Reduces/AllReducers'
//import LoggerMiddleware from '../Middlewares/LoggerMiddleware'
//import AsyncMiddleware from '../Middlewares/AsyncMiddleware'
const Store=createStore(Reducers);
export default Store