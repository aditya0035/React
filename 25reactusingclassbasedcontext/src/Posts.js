import React from 'react'
import AuthContext from './AuthContext'
class Posts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posts:null,
        }
    }
    componentDidMount(){
    }
    FetchPostsHanlder=(isAuthenticated)=>{
        const hasPosts=this.state.posts;
        if(isAuthenticated&&!hasPosts){
            console.log("called")
            fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>result.json())
            .then(posts=>{this.setState({posts:posts})})
        }
    }
    render(){
        const isAuthenticated=this.context

        const renderPosts=this.state.posts?this.state.posts.map((item)=>{
            return(<div key={item.id}>
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            </div>)
        }):null;
        return(
            <div>
                <AuthContext.Consumer>
                    {(value)=>{
                       this.FetchPostsHanlder(value)
                    }}
                </AuthContext.Consumer>
                {isAuthenticated?renderPosts:"Please login to view posts"}
            </div>
        )
    }
}
Posts.contextType=AuthContext
export default Posts