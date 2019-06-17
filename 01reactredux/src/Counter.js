import React from '../node_modules/react'
import {connect} from '../node_modules/react-redux/lib'
import CounterCss from './Counter.module.css'
const Counter=(props)=>{
    return(
        <>
        <div className={CounterCss.counter}>
            Counter:{props.counter}
        </div>
        <div>
        <button className={CounterCss.counterButtonLeft}  onClick={props.onIncresement}>Increasement</button>
        <button className={CounterCss.counterButtonLeft} onClick={()=>props.onAdd(5)}>Add 5</button>
       
        <button className={CounterCss.counterButtonRight} onClick={props.onDecreasment}>Decreasement</button>
         <button className={CounterCss.counterButtonRight} onClick={()=>props.onSubstract(10)}>Substract 10</button>
        </div>
        <div>
            <button onClick={()=>props.onAddResult(props.counter)} className={CounterCss.AddResult}>AddResult</button>
        </div>
        <div>
            <h3>Results:</h3>
            <div>
                <ul>
                {props.results.map((item,index)=>{
                  return (<li onClick={()=>{props.onDelete(index)}} key={new Date().toDateString()+Math.random()}>
                    {item}
                  </li>) 
                })}
                </ul>
            </div>
        </div>
        </>
    )
}
const MapStateToProps=(state)=>{
    return {
        counter:state.ctr.counter,
        results:state.res.results
    }
}
const MapDispatcherToProps=(dispatch)=>{
    return{
        onIncresement:()=>dispatch({type:"INC_COUNTER"}),
        onDecreasment:()=>dispatch({type:"DSC_COUNTER"}),
        onAdd:(value)=>dispatch({type:"ADD_COUNTER",payload:{value:value}}),
        onSubstract:(value)=>dispatch({type:"SUB_COUNTER",payload:{value:value}}),
        onAddResult:(Countervalue)=>dispatch({type:"ADD_RESULT",payload:{value:Countervalue}}),
        onDelete:(index)=>dispatch({type:"DELETE_RESULT",payload:{index:index}})
    }
}

export default connect(MapStateToProps,MapDispatcherToProps)(Counter)