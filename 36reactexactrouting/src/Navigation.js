import {NavLink} from 'react-router-dom'
import NavigationCss from './Navigation.module.css'
import React from 'react'
const NavigationBar=()=>{
        return(
            <div>
            <NavLink exact  to="/" className={NavigationCss.Navlink} activeClassName={NavigationCss.active}>Home</NavLink>
            <NavLink exact  to="/posts" className={NavigationCss.Navlink} activeClassName={NavigationCss.active}>Posts</NavLink>
            <NavLink exact to="/comments" className={NavigationCss.Navlink} activeClassName={NavigationCss.active}>Comments</NavLink>
            </div>
        )
}
export default NavigationBar