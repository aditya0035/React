import React,{Component} from 'react';
import Radium from 'radium'
class App extends Component{
    constructor(props){
      super(props);
    }

    render(){
      //Radium can be used for inline style in react for media query and for pseudo selector
      const style={
        "backgroundColor":"blue",
        "color":"black",
        ":hover":{"backgroundColor":"green","color":"yellow"}
      }
      return(
        <div>
          <button style={style}>Radium Style</button>
        </div>
      )
    }

}
export default Radium(App);
