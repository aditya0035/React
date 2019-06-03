import React,{useState,useEffect} from 'react';

const App=()=>{
  const [Counter,setCounter]=useState(0);
  useEffect(()=>{
    //run on all life cycle hook
    document.title= `I am clicked ${Counter}`
  });
  const IncreasementHandler=()=>{
    setCounter((prevState)=>{return prevState+1});
  }

  return (
  <>
  <button onClick={IncreasementHandler}>I am clicked {Counter}</button>
  </>)
}

export default App;
