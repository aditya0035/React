import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class Posts extends Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state={
            "posts":[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json())
        .then((result)=>{
            this.setState({"posts":result});
        })
    }
    render() {
        return (
            <div>
                {this.state.posts.length>0?this.state.posts.map((item)=>{
                    return(
                        <div key={item.id}>
                        <Link to={`/posts/${item.id}`}><h2>{item.title}</h2></Link>
                        </div>
                    )
                }):"No Posts"}
            </div>
        )
    }
}

export default Posts