const InitialState={
    results:[]
}
const ArrayPrototype=Array.prototype;
ArrayPrototype.removeElementAtIndex=function(index){
    let result=[...this.slice(0,index),...this.slice(index+1,)];
    return result;
};


const ResultReducer=(state=InitialState,action)=>{
    const {type,payload}=action
    let modifiedState={...state}
    modifiedState.results=[...state.results]
    switch (type) {
        case "ADD_RESULT":
            modifiedState.results.push(payload.value)
            return modifiedState;
        case "DELETE_RESULT":
            modifiedState.results=modifiedState.results.removeElementAtIndex(payload.index);
            return modifiedState;
        default:
            break;
    }
    return state
}

export default ResultReducer;