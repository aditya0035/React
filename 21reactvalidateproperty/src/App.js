import React,{Component} from 'react';
import Persons from './Persons'
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      Users:[
        {username:"Aditya0035",age:28},
        {username:"Ashish0035",age:39},
        {username:"Anuj0035",age:40}
      ]
    }
  }
  render(){
   return( <div>
      <Persons persons={this.state.Users}></Persons>
    </div>)
  }

}

export default App;
