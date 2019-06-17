import React,{Component} from 'react'
class Person extends Component{
    constructor(props){
        super(props)
        this.inputElement=React.createRef();
    }
    componentDidMount(){
        if(this.props.position===0){
            this.inputElement.current.focus()
        }
    }
    focus=()=>{
        this.inputElement.current.focus();
    }
    HelloWorld(){
        console.log("Hello World!")
    }
    render(){
        const {person}=this.props
        return <div>
            <div><span>{person.name}:{person.age}</span></div>
            <div><input type="text" defaultValue={person.name}  ref={this.inputElement}/></div>
        </div>
    }
}

export default Person