import React,{useState,useEffect} from 'react';
import axios from 'axios'
const useAPI=endpoint=>{
    const [Data,setData]=useState([]);
    useEffect(()=>{
        setTimeout(getData(endpoint),10000);
    },[endpoint]);
    const getData=async(endpoint)=>{
        axios.get(endpoint).then(response=>{
            setData(response.data);
        });
    }
    return Data;
}
const App=()=>{
    const savedTodos=useAPI("http://www.somaku.com/todos");
    return(<div>{savedTodos?savedTodos.map(item=>{
        return <div key={item.id}>{item.title}</div>
    }):null}</div>)
}

export default App;
