import * as ActionTypes from './ActionTypes'
export const SaveResult=(counterValue)=>{
   return {type:ActionTypes.ADD_RESULT,payload:{value:counterValue}}
}

export const AddResult=(counterValue)=>{
         console.log("Inside Add Result Action Creator thunk")
   return {type:ActionTypes.ADD_RESULT,payload:{value:counterValue}}
}
export const DeleteResult=(index)=>{
   return {type:ActionTypes.DELETE_RESULT,payload:{index:index}}
}