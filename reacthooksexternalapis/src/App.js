import React,{useState,useEffect,useRef} from 'react';
import axios from 'axios'
const App=()=>{
  const [Data,setData]=useState(null);
  const [Query,setQuery]=useState("React Hooks");
  const inputRef=useRef();
  useEffect(()=>{
    axios.get(`http://hn.algolia.com/api/v1/search?query=${Query}`).then(res=>{
        setData(res.data.hits);
    })
  },[Query]);
  // const InputHandler=(event)=>{
  //   setQuery(event.target.value);
  // }
  const SubmitHandler=(event)=>{
    event.preventDefault();
    let value= inputRef.current.value;
    setQuery(value);
  }
  return (
    <>
    <form onSubmit={SubmitHandler}>
    <input type="text" ref={inputRef} defaultValue={Query} ></input>
    <button>Submit</button>
    </form>
    {Data?Data.map((item,index)=>{
      return(
        <div key={item.created_at_i}>
          <span>{index+1}</span>
          <span><a href={item.url}>{item.title}</a></span>
        </div>
      )
    }):null}
    </>
  )
}
export default App;
