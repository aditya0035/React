import React,{Component} from 'react';
import axios from 'axios'
class App extends Component{
      constructor(props){
        super(props)
        console.log(props)
        this.state={
          posts:[],
          error:false
        }
      }
      componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response=>{
          console.log(response)
          this.setState({"posts":response.data})
        })).catch(error=>{
          this.setState({"error":true})
        });
      }
      render(){
        const renderPosts=!this.state.error?this.state.posts.map((item)=>{
          return(
            <div key={item.id}>
              <h1>{item.title}</h1>
              <div>{item.body}</div>
            </div>
          )
        }):<h1>Something Bad Happened</h1>;
        return(
          <>
          {this.state.posts?renderPosts:null}
          </>
        )
      }

}

export default App;
