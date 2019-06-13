import React,{Component} from '../node_modules/react';

class App extends Component{
    constructor(props){
        super(props)
        this.state={user:{username:"Aditya",age:25},counter:0}
    }
    IncresementCounterHandler=()=>{
        let counter=this.state.counter
        this.setState((prevstate,props)=>({
            counter:counter+1
        }))
    }
    DecreaseCounterHandler=()=>{
        this.setState((prevstate,props)=>{
            console.log(prevstate)
            return {
                ...prevstate,
                counter:prevstate.counter-1
            }
        });
    }
    render(){
        return(<div>
            <button onClick={this.IncresementCounterHandler}>Increase</button>
            <button onClick={this.DecreaseCounterHandler}>Decrease</button>
            <div>Counter is {this.state.counter}</div>
        </div>)
    }
}

export default App;