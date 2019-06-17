import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar=()=>{
        return(
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/comments">Comments</NavLink>
            </div>
        )
}
export default Navbar