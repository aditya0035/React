import React,{Component} from 'react';
class App extends Component{
  constructor(props){
    super(props)
    this.state={counter:0}
  }
  IncreasementCounterHandler=(event)=>{
    this.setState((prevState)=>{
      return {
        ...prevState,
        counter:prevState.counter+1
      }
    });
  }
  render(){
    return(
      <div>
      <div>
      Counter:{this.state.counter}
      </div>
       <div>
       <button onClick={this.IncreasementCounterHandler}>Two way binding</button>
       </div>
       </div>
    )
  }
}
export default App;
