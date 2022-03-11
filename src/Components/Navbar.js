import React from "react";
import {NavLink} from "react-router-dom"
import rupee from '../Images/rupee.png'
import homeIcon from '../Images/homeIcon.png'
import cookbookIcon from '../Images/cookbookIcon.png'
import storeIcon from '../Images/storeIcon.png'
import cartIcon from '../Images/cartIcon.png'

function Navbar({user, setUser}){
  function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
  }

  const homeDisplay = <img id='homeIcon' src={homeIcon}/> 
  const cookbookDisplay = <img id='cookbookIcon' src={cookbookIcon}/>
  const storeDisplay = <img id='storeIcon' src={storeIcon}/>
  const cartDisplay = <img id='cartIcon' src={cartIcon}/>
  const rupeeDisplay = <img id='rupee' src={rupee} />
      
  return <div id='navbar'>
    
      
    <div id='user-container-display'> 
      <p id='user-display'>User: {user.username}</p>
      <p id='user-bank'>{rupeeDisplay}{user.bank}</p> 
    </div>
    <div id='nav-links-cont'>
        <NavLink id='nav-to-home' to='/'>Kitchen{homeDisplay}</NavLink>
        <NavLink id='nav-to-cookbook' to='/cookbook'>Cookbook{cookbookDisplay}</NavLink>
        <NavLink id='nav-to-store' to='/store'>Store{storeDisplay}</NavLink>
        <NavLink id='nav-to-cart' to='/cart'>Cart{cartDisplay}</NavLink>
    </div>
    <button id='signout-button' onClick={handleLogoutClick}>Sign Out</button>
  </div>
}

export default Navbar