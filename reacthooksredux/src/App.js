import React,{useContext,useReducer} from 'react';
import  TodosAndPostContext from  './Context'
import reduer from  './Reducer'
import Posts from './Posts'
const App=()=>{
  const initialState=useContext(TodosAndPostContext);
  const [state,dispatch]=useReducer(reduer,initialState);
  return (
    <>
    <TodosAndPostContext.Provider value={{state:state,dispatch:dispatch}}>
    <Posts/>
    </TodosAndPostContext.Provider>
    </>
  )
}

export default App;
