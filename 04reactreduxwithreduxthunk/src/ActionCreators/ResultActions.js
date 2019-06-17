import * as ActionTypes from './ActionTypes'
export const SaveResult=(counterValue)=>{
   return {type:ActionTypes.ADD_RESULT,payload:{value:counterValue}}
}

export const AddResult=(counterValue)=>{
   //done using thunk it block the dispatch and then redispatch far better then middleware approch
   //to handle asynchronous code
   return (dispatch)=>{
      setTimeout(() => {
         console.log("Inside Add Result Action Creator thunk")
         return dispatch(SaveResult(counterValue));
      }, 4000);
   }
}
export const DeleteResult=(index)=>{
   return {type:ActionTypes.DELETE_RESULT,payload:{index:index}}
}