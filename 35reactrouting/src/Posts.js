import React,{Component} from 'react'
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
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                        </div>
                    )
                }):"No Posts"}
            </div>
        )
    }
}

export default Posts