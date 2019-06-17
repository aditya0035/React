import React,{Component} from 'react';
import axios from 'axios'
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      posts:[]
    }
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
      this.setState({"posts":response.data});
    });
  }
  render(){
    const renderPosts=this.state.posts.map((item)=>{
      return(
        <div key={item.id}>
        <h2>{item.title}</h2>
        <div>{item.body}</div>
        </div>
      )
    });
    return(
      <React.Fragment>
        {renderPosts}
      </React.Fragment>
    )
  }
}
export default App;
