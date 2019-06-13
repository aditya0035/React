import React,{Component} from 'react'
class Message extends Component{
    constructor(props){
        console.log(props)
        super(props)
    }
    render(){
        const {user}=this.props
        return (<div>
            Hello Mr.{user.username}
        </div>)
    }
}

export default Message