import React from 'react';
import Customaxios from './Customaxios'
import CustomPostsAxios from './Custompostsaxios'
import axios from 'axios'
class App extends React.Component{
    componentDidMount(){
      axios.all([this.GetUsers(),this.GetPosts()]).then(([users,posts])=>{
        console.log(users.data);
        console.log(posts.data);
      });
    }
    GetUsers=()=>{
      return Customaxios.get("users");
    }
    GetPosts=()=>{
      return CustomPostsAxios.get("posts")
    }
    render() {
      return (
        <div>
          Check Customaxios for Axios instance creation for Various Application
        </div>
      )
    }
}
export default App;
