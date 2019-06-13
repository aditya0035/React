import React,{Component} from 'react';
import Person from './Person'
class App extends Component{
  constructor(){
    super()
    this.state={
      post:{},
      searchId:1
    }
  }
  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.searchId}`).then(res=>res.json()).then(result=>{
      this.setState({post:result})
    });
  }
  ChangePostIdHanlder=(event)=>{
    let postid=event.target.value;
    this.setState({searchId:postid});
  }
  GetPostHandler=(event)=>{
    event.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.searchId}`).then(res=>res.json()).then(result=>{
      this.setState({post:result})
    });

  }
  render(){
    return(<div>
    <form onSubmit={this.GetPostHandler}>
      <input type="number" defaultValue={this.state.searchId} onChange={this.ChangePostIdHanlder}></input>
      <button type="submit">Submit</button>
    </form>
    <Person post={this.state.post}/>
    </div>)
  }
}
export default App;
