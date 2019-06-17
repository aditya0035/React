import {put,all,call} from 'redux-saga/effects'
//you can use call also to call a function
import * as ActionType from '../ActionCreators/ActionTypes'
function* IncreaseCounterSaga(action){
    yield all([call(console.log,"Hello World"),console.log(action),put({type:ActionType.INC_COUNTER})]);
}

export default IncreaseCounterSaga;