import React,{useState} from 'react';
import Posts from './Posts'
const AuthContext=React.createContext(false);
const App=()=>{
  const [IsLoggedIn,setIsLoggedIn]=useState(false);
  const LoginHandler=()=>{
    setIsLoggedIn(!IsLoggedIn);
  }
  return(
  <>
  <button onClick={LoginHandler}>Login</button>
  <AuthContext.Provider value={IsLoggedIn}>
    <Posts />
  </AuthContext.Provider>
  </>
  )
}

export default {App:App,AuthContext:AuthContext}