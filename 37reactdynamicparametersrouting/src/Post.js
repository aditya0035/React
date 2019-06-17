import React from 'react'
class Post extends React.Component{
    constructor(props)
    {
        super(props)
        console.log(props)
        this.state={
            "post":{}
        }
    }
    componentDidMount(){
        const {params}=this.props.match;
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`).then(resp=>resp.json())
        .then(result=>{this.setState({"post":result})});
    }
    BackHandler=()=>{
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
              <button onClick={this.BackHandler}>Back</button>
              <h1>{this.state.post.title}</h1>
              <p>{this.state.post.body}</p>
            </div>
        )
    }
}

export default Post