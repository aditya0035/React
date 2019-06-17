import React,{Component} from 'react';
import Persons from './Persons'
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      persons:[
        {id:'asdf1',name:"Max",age:28},
        {id:'vsdf1',name:"Manu",age:29},
        {id:'asdf11',name:"Stephie",age:26}
      ]
    }
  }
  render(){
    return(<>
      <Persons persons={this.state.persons}></Persons>
    </>)
  }

}

export default App;
