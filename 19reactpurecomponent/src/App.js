import React,{Component} from 'react';
import Person from './Person'
class App extends Component{
        constructor(){
            super()
            console.log("Constructor Calls 1st Component Instance Created");
            this.state={
                post:{},
                searchId:1,
                mountingHooksDisabled:false

            }
        }
        componentWillReceiveProps(prevprops){
            console.log(prevprops)
            console.log("componentWillReceiveProps parent")
        }
        shouldComponentUpdate(nextprops,nextstate){
            // console.log(nextprops)
            // console.log("Current State",this.state)
            // console.log("next State",nextstate)
            console.log("shouldComponentUpdate parent");
            return true;
        }
        componentWillUpdate(nextprops,nextstate){
            // console.log(nextprops)
            // console.log("Current State",this.state)
            // console.log("next State",nextstate)
            console.log("componentWillUpdate parent");
        }
       componentDidUpdate(prevprop,prevstate){
        console.log("componentDidUpdate parent");
       }
        componentWillMount(){
            if(!this.state.mountingHooksDisabled){
                console.log("2nd mounting life cycle hook");
            }
        }
        componentDidMount(){
            if(!this.state.mountingHooksDisabled){
            console.log("4th Component mounting life cycle hooks");
            }
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.searchId}`).then((res)=>res.json())
            .then(result=>{
                    this.setState({post:result});
            });
        }
        PostIdChangeHandler=(event)=>{
            let value=event.target.value
            this.setState({searchId:value});
        }
        FetchPostHanlder=(event)=>{
            event.preventDefault()
            fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.searchId}`).then((res)=>res.json())
            .then(result=>{
                    this.setState({post:result});
            });
        }
        render(){
            console.log("3rd Component mounting life cycle hooks and called for update")
            return(<div>
                <form onSubmit={this.FetchPostHanlder}>
                <input type="number" onChange={this.PostIdChangeHandler}></input>
                <button type="submit">Submit</button>
                </form>
                <Person post={this.state.post} mountingHooksDisabled={!this.state.mountingHooksDisabled}/>
            </div>)
        }
}
export default App;
