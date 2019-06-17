import React,{Component} from 'react';
import Counter from './Counter'
import {connect} from 'react-redux'
class App extends Component{
    render(){
      //This method called to render the things written in return as JSX
      return(
        <>
        <div>
          {/* AppCounter:{this.props.counter} */}
        </div>
        <Counter />
        </>
      )
    }
}

const MapStateToProps=(state)=>{
  return {counter:state.ctr.counter}
}
export default connect(MapStateToProps)(App)