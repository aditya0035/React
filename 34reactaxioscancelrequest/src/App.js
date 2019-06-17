import React from 'react';
import Customaxios from './Customaxios'
import Axios from 'axios';
class App extends React.Component{

    componentDidMount(){
      setTimeout(() => {
        Customaxios.Customaxios.get("posts",{cancelToken:Customaxios.source.token})
        .then(response=>{
          console.log(response.data)
        })
        .catch(error=>{
          if(Axios.isCancel(error)){
            console.log('Request canceled', error.message);
          }
          else{
            console.log("Something different");
          }
        });
      }, 6000);
    }
    CancelRequestHandler=()=>{
      Customaxios.source.cancel('Operation canceled by the user.')
    }
    render() {
      return (
        <div>
          <button onClick={this.CancelRequestHandler}>Cancel Request</button>
        </div>
      )
    }
}
export default App;
