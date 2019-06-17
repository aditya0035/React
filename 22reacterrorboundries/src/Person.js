import React from 'react'

const Person=()=>{
    const rand=Math.random();
    if(rand>0.7){
        throw new Error("Number is greater then 0.7")
    }
    return(
        <div>
            <h2>This from Person</h2>
        </div>
    )
}

export default Person