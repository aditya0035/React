import React,{Component} from 'react'
class IncreasementComponent extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return(<div>
            <button onClick={this.props.IncreasementCounterHandler}>Increase</button>
        </div>)
    }
}

export default IncreasementComponent