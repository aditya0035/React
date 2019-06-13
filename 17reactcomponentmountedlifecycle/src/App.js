import React,{Component} from 'react';
class App extends Component{
  constructor(props){
    super(props)
    console.log("This is constructior 1st lifecycle hook when component created")
  }
  componentWillMount(){
    console.log("This is componentWillMount 2st lifecycle hook when after component instanciated created")
  }
  render(){
    console.log("3rd life cycle hooks run when component mounted or component update")
    return (<><h3>This is render</h3></>)
  }
  componentDidMount(){
    console.log("this is 4th life cycle hooks  last hooks execte when component in injected into dom and used for any ajax call")
  }

}
export default App;
