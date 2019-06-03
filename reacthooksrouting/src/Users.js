import React,{useState,useEffect} from 'react'
const Users=()=>{
    const [Data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://reqres.in/api/users").then((res)=>res.json()).then((result)=>{
            setData(result.data);
        })
    },[]);
    return(
        <div>
        {Data?Data.map(item=>{
            return(
            <div key={item.id}>
                <span>Full Name:{item.first_name+" "+item.last_name}</span>
            </div>
            )
        }):null}
        </div>
    )

}

export default Users