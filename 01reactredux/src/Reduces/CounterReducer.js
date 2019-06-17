const InitialState={
    counter:0
}
const CounterReducer=(state,action)=>{
    state=state||InitialState;
    const {type,payload}=action
    let modifiedState={...state}
    switch (type) {
        case "INC_COUNTER":
                modifiedState.counter=state.counter+1;
                return modifiedState;
        case "DSC_COUNTER":
                modifiedState.counter=state.counter-1;
                return modifiedState;
        case "ADD_COUNTER":
                modifiedState.counter=state.counter+payload.value;
                return modifiedState;
        case "SUB_COUNTER":
                modifiedState.counter=state.counter-payload.value;
                return modifiedState;
        default:
            break;
    }
    return state;
}

export default CounterReducer;