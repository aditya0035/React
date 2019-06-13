import React,{Component} from '../node_modules/react';

class App extends Component{
    constructor(props){
        super(props)
        //1 ways efficent
        this.IncreasementHandler=this.IncreasementHandler.bind(this);
    }

    IncreasementHandler(event){
       console.log("I am clicked")
    }

    IncreasementHandler2(event){
        console.log("I am clicked 2")
     }
    IncreasementHandler3(number,event){
        console.log("I am clicked 3",number)
     }

     IncreasementHandler4=()=>{
         //here it bind this to current class context so not undefined
         console.log("I am clicked 4")
     }
    render() {
        return (
            <div>
            <div>
                <button onClick={this.IncreasementHandler}>click Me!</button>
            </div>
            <div>
                <button onClick={this.IncreasementHandler2.bind(this)}>click Me 2!</button>
            </div>
            <div>
                <button onClick={(event)=>{console.log(event);this.IncreasementHandler3.bind(this)(123,event)}}>click Me 3!</button>
            </div>
            <div>
                <button onClick={this.IncreasementHandler4}>click Me 4!</button>
            </div>
            </div>
        )
    }

}

export default App;