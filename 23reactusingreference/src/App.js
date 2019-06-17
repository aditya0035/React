import React,{Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      searchText:null
    }
    this.searchInput=React.createRef();
  }
  FormSubmitHandler=(event)=>{
    event.preventDefault()
    let value=this.searchInput.current.value;
    this.setState({searchText:value});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.FormSubmitHandler}>
        <input type="text" ref={this.searchInput}></input>
        <button type="submit">Submit</button>
        </form>
        <div>{this.state.searchText}</div>
      </div>
    )
  }
}

export default App;
