import React from 'react'
import {Link} from 'react-router-dom'
//Below gives flikr effect
// const Navbar=()=>{
//     return (
//         <div>
//         <br/>
//         <a href="/posts">Posts</a>
//         <br/>
//         <a href="/users">Users</a>
//         <br/>
//         <a href="/comments">Comments</a>
//         <br/>
//         </div>
//     )
// }

const Navbar=()=>{
    return (
        <div>
        <br/>
        <Link to="/posts">Posts</Link>
        <br/>
        <Link to="/users">Users</Link>
        <br/>
        <Link to="/comments">Comments</Link>
        <br/>
        </div>
    )
}

export default Navbar