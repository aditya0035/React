const reduxSaga=require("redux-saga/effects")
const SagaActionCreator=require("./actionCreator")
const ActionType=require("./actionTypes")
function* WatchIncresementCounter(){
       yield reduxSaga.takeEvery(ActionType.Increasement_Initated,SagaActionCreator.IncresementCounterSaga)
}

module.exports.WatchIncresementCounter=WatchIncresementCounter;