import React from 'react'
import Comments from './Comments'
const WrapperComment=(props)=>{
    const params=new URLSearchParams(props.location.search)
    const commentId=params?params.get("commentId"):null;
    return(<Comments {...props} commentId={parseInt(commentId)}></Comments>)
}
export default WrapperComment