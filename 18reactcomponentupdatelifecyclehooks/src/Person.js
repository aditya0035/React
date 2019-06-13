import React,{Component} from 'react'
class Person extends Component{
    constructor(props){
        super(props)
        console.log("Child Constructor Calls 1st Component Instance Created");
    }
    componentWillReceiveProps(nextprops){
            console.log(nextprops)
            console.log("componentWillReceiveProps Child")
        
    }
    shouldComponentUpdate(nextprops,nextstate){
        // console.log(nextprops)
        // console.log("Current State",this.state)
        // console.log("next State",nextstate)
        console.log("shouldComponentUpdate Child");
        return true;
    }
    componentWillUpdate(nextprops,nextstate){
        // console.log(nextprops)
        // console.log("Current State",this.state)
        // console.log("next State",nextstate)
        console.log("componentWillUpdate Child");
    }
   componentDidUpdate(prevprop,prevstate){
    console.log("componentDidUpdate Child");
   }
    componentWillMount(){
        console.log("Child 2nd mounting life cycle hook");
    }
    componentDidMount(){
        console.log("Child 4th Component mounting life cycle hooks");
        
    }
    render(){
        let {title,body}=this.props.post
        return(<div>
            {console.log("Child 3rd Component mounting life cycle hooks and called for update")}
            <div>{title}</div>
            <div>{body}</div>
        </div>)
    }   
}

export default Person