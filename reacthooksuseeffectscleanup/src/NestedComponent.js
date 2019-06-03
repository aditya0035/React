import React,{useState,useEffect} from 'react'
const NestedComponent=(props)=>{
    const friends=["Aditya","Ashish","Anuj"];
    const [Friend,setFriend]=useState(null);
   // let isMounted=true;
    useEffect(()=>{
        let randomFriend=setInterval(() => {
            console.log("Interval Mounted")
           let randomNo=Math.floor(Math.random()*2);
           setFriend(friends[randomNo]);
         }, 3000);
        return ()=>{
            console.log("Interval Unmounted")
            clearInterval(randomFriend);
          }
       },[friends]);
       
    
    return (
        <>
       <div>
            {props.children}:{Friend}
        </div>
        </>
        
    )
}

export default NestedComponent;