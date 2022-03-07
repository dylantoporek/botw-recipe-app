import React from "react";
import {NavLink} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import rupee from '../Images/rupee.png'
import homeIcon from '../Images/homeIcon.png'

function Navbar({user, setUser}){
    const navigate = useNavigate()
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

      const homeDisplay = <img id='homeIcon' src={homeIcon}/> 
      const rupeeDisplay = <img id='rupee' src={rupee} />
      
    return <div id='navbar'>
        <div id='nav-links-cont'>
            <NavLink id='nav-to-home' to='/'>Kitchen{homeDisplay}</NavLink>
            <NavLink id='nav-to-cookbook' to='/cookbook'>Cookbook</NavLink>
            <NavLink id='nav-to-store' to='/store'>Store</NavLink>
            <NavLink id='nav-to-cart' to='/cart'>Cart</NavLink>
            
        </div>
        
      <div id='user-container-display'> 
        <p id='user-display'>User: {user.username}</p>
        <p id='user-bank'>Bank: {rupeeDisplay}{user.bank}</p>
        
      </div>
        <button id='signout-button' onClick={handleLogoutClick}>Sign Out</button>
      
    </div>
}

export default Navbar