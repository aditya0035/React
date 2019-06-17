import React from 'react'
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
            this.setState({"comments":result})
        });
    }
    render() {
        return (
            <div>
                {this.state.comments.length>0?this.state.comments.map(item=>{
                    return(<div key={item.id}>
                        <h1>{item.name}</h1>
                        <p>{item.body}</p>
                    </div>)
                }):null}
            </div>
        )
    }

}
export default Comments