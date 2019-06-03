import React,{useState,useEffect} from 'react'
const Comments=()=>{
    const [Data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments").then(res=>res.json()).then((result)=>{
        setData(result);
        });
    },[]);
    return (
        <div>
            {Data?Data.map(item=>{
                return (
                    <div key={item.id}>
                    <span>{item.name}</span>
                    </div>
                )
            }):null}
        </div>
    )
}

export default Comments
