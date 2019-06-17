import React from 'react'
class Comment extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            isLoading:true,
            comment:{}
        }
    }
    componentDidMount(){
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/comments/${this.props.id}`).then(res=>res.json())
            .then((result=>{this.setState({isLoading:false,"comment":result})}))
        }, 3000);
    }
    render() {
        return (
            <div>
                {this.state.isLoading?"Loading please wait!":<>
               <h1>Title:{this.state.comment.name}</h1>
               <h4>Created By:{this.state.comment.email}</h4>
               <p>Description:{this.state.comment.body}</p></>
               }
            </div>
        )
    }
}
export default Comment