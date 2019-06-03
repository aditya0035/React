import React,{useState} from 'react';

const App=()=>{
  const [count, setcount] = useState(0);
  const [toggle, setToggle] = useState(false)
  const IncreasementHandler=()=>{
    // setcount((prevstate)=>{
    //   console.log(prevstate)
    //   return prevstate+1
    // });
    setcount(count+1);
  };
  const ToggleHandler=()=>{
    setToggle((prevstate)=>!prevstate);
  };
  return (
    <>
    <button onClick={IncreasementHandler}>I am clicked {count}</button>
    <button onClick={ToggleHandler}>{toggle?'Hide':'Show'} Message</button>
    <div style={{display:toggle?'Block':'None'}}>
      Message Shown
    </div>
    </>
  )
}
export default App;
