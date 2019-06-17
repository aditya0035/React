import React,{Component} from 'react';
import Person from './Person'
//import ErrorBoundries from './ErrorBoundries'
import ErrorBoundries2 from './ErrorBoundries2'
class App extends Component{
      render(){
        return (<div>
        <ErrorBoundries2>
        <h1>This is from App</h1>
        <Person></Person>
        </ErrorBoundries2>
        </div>)
      }
}

//export default ErrorBoundries(App);
export default App
