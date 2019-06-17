import React from 'react'
import {connect} from 'react-redux'
import CounterCss from './Counter.module.css'
import * as CounterActons from './ActionCreators/CounterActions'
import * as ResultActions from './ActionCreators/ResultActions'
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
        onIncresement:()=>dispatch(CounterActons.IncreaseCounter()),
        onDecreasment:()=>dispatch(CounterActons.DecreaseCounter()),
        onAdd:(value)=>dispatch(CounterActons.AddCounter(value)),
        onSubstract:(value)=>dispatch(CounterActons.SubstractCounter(value)),
        onAddResult:(Countervalue)=>dispatch(ResultActions.SaveResult(Countervalue)),
        onDelete:(index)=>dispatch(ResultActions.DeleteResult(index))
    }
}

export default connect(MapStateToProps,MapDispatcherToProps)(Counter)