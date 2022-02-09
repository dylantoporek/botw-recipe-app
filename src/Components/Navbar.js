import React from "react";
import {NavLink} from "react-router-dom"

function Navbar(){
    return <div id='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/cookbook'>Cookbook</NavLink>
        <NavLink to='/store'>Store</NavLink>
    </div>
}

export default Navbar