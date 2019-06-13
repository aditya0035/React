import React,{Component} from 'react'
import IncreasementComponent from './IncreasementComponent'
import DecreasementComponent from './DecreasementComponent'
class App extends Component{
  constructor(props){
    super(props)
    this.state={counter:0}
    this.IncreasementCounterHandler=this.IncreasementCounterHandler.bind(this)
  }
  IncreasementCounterHandler(){
    this.setState((prevState)=>{
      return {
        ...prevState,
        counter:prevState.counter+1
      }
    });
  }
  DecreasementCounterHandler=()=>{
    this.setState((prevState)=>({
      counter:prevState.counter-1
    }));
  }
  render(){
    return (
      <>
      <div>Counter:{this.state.counter}</div>
      <IncreasementComponent IncreasementCounterHandler={this.IncreasementCounterHandler}></IncreasementComponent>
      <DecreasementComponent DecreasementCounterHandler={this.DecreasementCounterHandler}></DecreasementComponent>
      </>
    )
  }
}

export default App