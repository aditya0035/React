import React from 'react'
import AppModule from './App'

const Admin=()=>{
    const AuthContext=AppModule.AuthContext
    return(
        <div>
           <AuthContext.Consumer>
            {value=>value}
            </AuthContext.Consumer>
        </div>
    )
}

export default Admin
