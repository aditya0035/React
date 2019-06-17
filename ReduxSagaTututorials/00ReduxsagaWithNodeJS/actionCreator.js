// const IncresementCounter=(value)=>{
//     return {
//         type:"INC_COUNTER",
//         value:value
//     }
// }
const actionType =require("./actionTypes")
const SagaEffects=require("redux-saga/effects")
function* IncresementCounterSaga(request){
    yield console.log("watcher value",request);
    yield SagaEffects.put({type:actionType.Increasement,value:request.value});
    
}

module.exports.IncresementCounterSaga=IncresementCounterSaga;