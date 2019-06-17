import React,{Component} from 'react';
import axios from 'axios'
class App extends Component{
    componentDidMount(){
      axios.get("posts").then(resp=>{
        console.log(resp.data)
      });
    }
    render() {
      return (
        <div>
          <h2>This is global configuration of AXIOS check index.js</h2>
        </div>
      )
    }
}
export default App;
