import React,{useState,useEffect} from 'react';
import NestedComponent from './NestedComponent'
const App=()=>{
  const [MousePosition,setMousePosition]=useState({X:null,Y:null});
  const [Display,setDisplay]=useState(false);
  useEffect(()=>{
    let eventHanlder=window.addEventListener("mousemove",MouseHandler);
    return()=>{
     // window.removeEventListener("mousemove",MouseHandler);
     //Cleanup
     window.removeEventListener(eventHanlder)
    }
  },[]);
  const MouseHandler=(event)=>{
    setMousePosition((prevState)=>{
      return {
        X:event.clientX,
        Y:event.clientY
      }
    });
  }
  const DisplayHandler=()=>{
    setDisplay(prevState=>!prevState);
  }
  return(
    <>
    <div>
      Mouse Postion X:{MousePosition.X}
    </div>
    <div>
      Mouse Postion Y:{MousePosition.Y}
    </div>
    <button onClick={DisplayHandler}>{Display?'Hide':'Show'}</button>
     {
       Display?<NestedComponent display={Display}>Random Friend:</NestedComponent>:null
     }
    </>
  )
}
export default App