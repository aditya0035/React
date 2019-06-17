import React from 'react';
import AuthContext from './AuthContext'
import Posts from './Posts'
class App extends React.Component{
    constructor(props){
      super(props)
      this.state={
        isAuthenticated:false
      }
    }
    LoginAndLogoutHandler=()=>{
        let isAuthenticated=this.state.isAuthenticated
        this.setState({isAuthenticated:!isAuthenticated});
    }
    render(){
      return(
        <div>
          <button onClick={this.LoginAndLogoutHandler} style={{"display":this.state.isAuthenticated?"None":"Block"}} type="submit">Login</button>
          <button onClick={this.LoginAndLogoutHandler} style={{"display":this.state.isAuthenticated?"Block":"None"}} type="submit">LogOut</button>
          <AuthContext.Provider value={this.state.isAuthenticated}>
            <Posts />
          </AuthContext.Provider>
        </div>
      )
    }
}
export default App;
