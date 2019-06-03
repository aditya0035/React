import React,{useState,useEffect} from 'react'
const Posts=(props)=>{
const [Data, setData] = useState([]);
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then(res=>{
        return res.json();
    }).then(result=>{
        setData(result);
    })
},[]);
return(<div>
    {Data?Data.map(item=>{
        return (<div key={item.id}><span>{item.title}</span></div>)
    }):null}
</div>)

}
export default Posts