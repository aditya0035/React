import React,{useContext} from 'react'
import ErrorContext from "./ErrorContext";
const Errors=()=>{
        const {dispatch} = useContext(ErrorContext)
        try{
            throw new Error();
        }
        catch(ex){
            dispatch({type:"ErrorOccured",payload:{"hasError":true,errorMessage:"Something Bad Happened !"}})
        }
        return(
            <div>
                Hello from Errors
            </div>
        )
   
}

export default Errors