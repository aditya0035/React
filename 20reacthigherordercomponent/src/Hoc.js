import React from 'react'

const HOC=(WrappedComponent)=>{
    return(props)=>{
      let prop=Object.assign({},props)
      return(<div>
            <h1>This is HOC</h1>
            <WrappedComponent {...prop}/>
        </div>
      )
    }
}
export default HOC