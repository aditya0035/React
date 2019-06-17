import React,{Component} from 'react';
import axios from 'axios'
class App extends Component{

  submitPostHandler=()=>{
    let post={
      userId: 10,
      id: 101,
      title: "at nam consequatur ea labore ea harumqaaa",
      body: "cupiditate quo est a modi nesciunt soluta ipsa voluptas error itaque dicta in autem qui minus magnam et distinctio eum accusamus ratione error aut"
    }
    axios.post("https://jsonplaceholder.typicode.com/posts",post).then((res)=>{
      console.log(res.data);
    })
  }
  deletePostHandler=()=>{
    const postId=1;
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(resp=>{
      console.log(resp)
    })
  }
  render(){
    return (
    <div>
      <button type="submit" onClick={this.submitPostHandler}>Submit Post</button>
      <button type="submit" onClick={this.deletePostHandler}>Delete Post</button>
    </div>)
  }
}

export default App;
