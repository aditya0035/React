import React,{Component} from 'react'
import HOC from './Hoc'
class Post extends Component{
    HelloWorld(){
        console.log("Hello World");
    }
    render(){
        const {id,title,description}=this.props.post;
        return(<div key={id}>
            <span>{title}</span>
            <span>{description}</span>
        </div>)
    }
}
export default HOC(Post)