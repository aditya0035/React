import {takeEvery} from 'redux-saga/effects'
import * as ActionType from '../ActionCreators/ActionTypes'
import IncreaseCounterSaga from '../Saga/CounterSaga'
function* WatchIncreaseCounter(){
    yield takeEvery(ActionType.INC_COUNTER_SAGA,IncreaseCounterSaga)
}

export default WatchIncreaseCounter