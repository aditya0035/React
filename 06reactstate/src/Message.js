import React,{Component} from 'react'
class Message extends Component{
    //State make sense only for React Component which are class based and inherited from Component
    /**
     * in functional component to use state we use useState Hooks
     */
    constructor(props){
        super(props)
        this.state={
            user:{username:"Aditya",age:25},
            msg:"this is message from me"
        }
    }
    render(){
        return (<div>
            Hello Mr.{this.state.user.username} your age is :{this.state.user.age}
            <div>
            Here it is the message
            <br/>
            {this.state.msg}
            </div>
        </div>)
    }
}

export default Message