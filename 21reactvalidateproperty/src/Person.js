import React from 'react'
import PropTypes from 'prop-types'
const Person=(props)=>{
    return(
        <div>
            <span>{props.username}</span>
            <span>{props.age}</span>
        </div>
    )
}
Person.propTypes={
    username:PropTypes.string,
    age:PropTypes.number
}

export default Person