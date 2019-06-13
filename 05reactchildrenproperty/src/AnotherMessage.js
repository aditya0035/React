import React from 'react'
const AnotherMessage=(props)=>{
    return (
        <div>
            This is my msg:{props.msg}
            <div>
            Here it is  goes children
            <br/>
            {props.children}
            </div>
        </div>
    )
}

export default AnotherMessage