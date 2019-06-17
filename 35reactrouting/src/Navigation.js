import {Link,NavLink} from 'react-router-dom'
import React from 'react'
const NavigationBar=()=>{
        return(
            <div>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <NavLink to="/comments">Comments</NavLink>
            </div>
        )
}
export default NavigationBar