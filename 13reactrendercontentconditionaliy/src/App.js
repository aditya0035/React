import React,{Component} from 'react';
import './App.css';
class App extends Component{
  constructor(props){
    super(props)
    this.state={marks:[20,23,45,67,80,33,80,89,95,12]}
  }
  render(){
    const passingMarksRender=this.state.marks.map((item,index)=>{
      return (
        <div key={index} style={{color:(index%2===0)?"blue":"pink"}}>{/* wrong practice usually set key to something which help to VDOM}>*/}
         {item>=33?`SrNo.${index+1}:${item}`:null} 
        </div>
      )
    });
    return(
      <div>
       {passingMarksRender?passingMarksRender:null}
      </div>
    )
  }

}
export default App;
