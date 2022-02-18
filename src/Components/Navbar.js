import React from "react";
import {NavLink} from "react-router-dom"
import { useNavigate } from "react-router-dom";

function Navbar({user, setUser}){
    const navigate = useNavigate()
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

      function handleNavToCart(){
        navigate('/cart')
    }
    return <div id='navbar'>
        <div id='nav-links-cont'>
            <NavLink id='nav-to-home' to='/'>Home</NavLink>
            <NavLink id='nav-to-cookbook' to='/cookbook'>Cookbook</NavLink>
            <NavLink id='nav-to-store' to='/store'>Store</NavLink>
            <NavLink to='/cart'></NavLink>
        </div>
        
        <div id='user-bank-display'>Bank: {user.bank}</div>
        <button id='signout-button' onClick={handleLogoutClick}>Sign Out</button>
        <button id='to-cart-button' onClick={handleNavToCart}>Cart</button>
    </div>
}

export default Navbar