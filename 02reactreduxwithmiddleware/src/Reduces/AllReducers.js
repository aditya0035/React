import CounterReducer from './CounterReducer'
import ResultReducer from './ResultReducer'
import {combineReducers} from 'redux'

const Reducers=combineReducers({
    ctr:CounterReducer,
    res:ResultReducer
});

export default Reducers