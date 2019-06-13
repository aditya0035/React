import React from 'react'
const DecreasementComponent=(props)=>{
    return(
        <div>
            <button onClick={props.DecreasementCounterHandler}>Decrease</button>
        </div>
    )
}

export default DecreasementComponent