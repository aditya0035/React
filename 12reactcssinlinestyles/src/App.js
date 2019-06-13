import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const heading={ "color":"blue","background-color": "beige","border": "1px aqua solid"}
    return(
      <div>
        <h1 id="heading1" style={heading}>This the heading</h1>
      </div>
    )
  }

}
export default App;
