import React from "react";
import {NavLink} from "react-router-dom"

function Navbar({setUser}){
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
    return <div id='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/cookbook'>Cookbook</NavLink>
        <NavLink to='/store'>Store</NavLink>
        <NavLink to='/cart'></NavLink>
        <button onClick={handleLogoutClick}>Sign Out</button>
    </div>
}

export default Navbar