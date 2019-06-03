import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import App from './App'
const Posts=()=>{
    const [Data, setData] = useState(null);
    const [IsLoading,setIsLoading]=useState(true);
    const isAuthenticated=useContext(App.AuthContext);
    useEffect(()=>{
        if(isAuthenticated){
        setTimeout(()=>{axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
            setData(response.data);
            setIsLoading(false);
        })},2000);
        }
    },[isAuthenticated]);
    let render=(Data?Data.map(item=>{
        return (<div key={item.id}>
        <span>{item.id}</span>
        <span>{item.title}</span>
        </div>)}):null)
    return (
        <>
        {isAuthenticated?(IsLoading?"Loading":render):null}
        {/* <App.AuthContext.Consumer>
        {(value)=>{console.log(value)}}
        </App.AuthContext.Consumer> */}
        </>
    )

}

export default Posts;