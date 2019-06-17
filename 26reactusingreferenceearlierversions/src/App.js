import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.inputtext=null
  }
  InputChangeHanlder=()=>{
    console.log(this.inputtext.value)
  }
  render(){
    return(
      <div>
        {/* <input type="text" ref={(inp)=>{this.inputtext=inp}} onChange={this.InputChangeHanlder}></input>*/}
        <input type="text" ref={this.inputtext} onChange={this.InputChangeHanlder}></input> 
     
      </div>
    )
  }
}
export default App;
