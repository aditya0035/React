import * as ActionTypes from './ActionTypes'
export const IncreaseCounter=()=>{
    return {type:ActionTypes.INC_COUNTER}
}
export const DecreaseCounter=()=>{
    return {type:ActionTypes.DSC_COUNTER}
}
export const AddCounter=(value)=>{
    return {type:ActionTypes.ADD_COUNTER,payload:{value:value}}
}
export const SubstractCounter=(value)=>{
    return {type:ActionTypes.SUB_COUNTER,payload:{value:value}}
}