import React from 'react'
import {Link} from 'react-router-dom'
import Comment from './Comment'
class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state={
            "comments":[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/comments").then(response=>response.json())
        .then((result)=>{
            this.setState({"comments":result});
        });
    }
    // componentDidUpdate=()=>{
    //     const params=new URLSearchParams(this.props.location.search)
    //     const commentId=params?params.get("commentId"):null;
    //     this.setState({"commentId":commentId});
    // }
    render() {
        return (
            <div>
                {this.state.comments.length>0?this.state.comments.map(item=>{
                    return(<div key={item.id}>
                        <Link to={`/comments?commentId=${item.id}`}><h1>{item.name}</h1></Link>
                        <div>{
                            this.props.commentId&&this.props.commentId===item.id?
                            <Comment id={this.props.commentId}></Comment>:null
                        }</div>
                    </div>)
                }):null}
               
            </div>
        )
    }

}
export default Comments