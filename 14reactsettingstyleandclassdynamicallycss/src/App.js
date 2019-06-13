import React,{Component} from 'react';
import './App.css';
class App extends Component{
  constructor(props){
    super(props)
    this.state={toggle:false,marks:[20,23,45,67,80,33,80,89,95,12],hover:false}
  }
  ToggleHandler=()=>{
    this.setState({
      ...this.state,
      toggle:!this.state.toggle
    });
  }
  ElementHoverHandler=()=>{
    this.setState({
      hover:true
    });
  }
  ElementHoverOutHandler=()=>{
    this.setState({
      hover:false
    });
  }
  render(){
    const classApplied=["element"];
    if(this.state.hover){
      classApplied.push("elementHover");
    }
    const buttonStyle={
      "background-color":"green"
    }
    const passingMarksRender=this.state.marks.map((item,index)=>{
      return (
        <div onMouseOver={this.ElementHoverHandler} onMouseOut={this.ElementHoverOutHandler} key={index} className={classApplied.join(" ")}>{/* wrong practice usually set key to something which help to VDOM}>*/}
         {item>=33?`SrNo.${index+1}:${item}`:null} 
        </div>
      )
    });
    if(this.state.toggle){
      buttonStyle["background-color"]="Blue";
    }
    return(
      <div>
      <button style={buttonStyle} onClick={this.ToggleHandler}>{this.state.toggle?'Hide Marks Scored':'Show Marks Scored'}</button>
       {this.state.toggle?passingMarksRender:null}
      </div>
    )
  }
}
export default App;
