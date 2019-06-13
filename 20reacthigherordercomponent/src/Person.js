import React from 'react'
import HOC from './Hoc'
const Person=(props)=>{
   let {title}=props.post;
   return(
      <React.Fragment>
          <div>{title}</div>
      </React.Fragment>
   )
}
export default HOC(Person);