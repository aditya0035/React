import * as ActionTypes from '../ActionCreators/ActionTypes'
const InitialState={
    counter:0
}
const CounterReducer=(state,action)=>{
    state=state||InitialState;
    const {type,payload}=action
    let modifiedState={...state}
    switch (type) {
        case ActionTypes.INC_COUNTER:
                modifiedState.counter=state.counter+1;
                return modifiedState;
        case ActionTypes.DSC_COUNTER:
                modifiedState.counter=state.counter-1;
                return modifiedState;
        case ActionTypes.ADD_COUNTER:
                modifiedState.counter=state.counter+payload.value;
                return modifiedState;
        case ActionTypes.SUB_COUNTER:
                modifiedState.counter=state.counter-payload.value;
                return modifiedState;
        default:
            break;
    }
    return state;
}

export default CounterReducer;