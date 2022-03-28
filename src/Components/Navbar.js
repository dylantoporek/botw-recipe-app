import React from "react";
import {NavLink, useNavigate} from "react-router-dom"
import rupee from '../Images/rupee.png'
import homeIcon from '../Images/homeIcon.png'
import cookbookIcon from '../Images/cookbookIcon.png'
import storeIcon from '../Images/storeIcon.png'
import cartIcon from '../Images/cartIcon.png'

function Navbar({user, setUser, selectedPage}){
  const navigate = useNavigate()
  function handleLogoutClick() {
      fetch("/api/v1/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
      navigate('/')
  }

  const homeDisplay = <img id='homeIcon' src={homeIcon}/> 
  const cookbookDisplay = <img id='cookbookIcon' src={cookbookIcon}/>
  const storeDisplay = <img id='storeIcon' src={storeIcon}/>
  const cartDisplay = <img id='cartIcon' src={cartIcon}/>
  const rupeeDisplay = <img id='rupee' src={rupee} />

console.log(selectedPage)
  return <div id='navbar'>  
  <div id='user-container-display'> 
    <p id='user-display'>User: {user.username}</p>
    <p id='user-bank'>{rupeeDisplay}{user.bank}</p> 
  </div>
  <div id='nav-links-cont'>
     {selectedPage === 'https://obscure-scrubland-39099.herokuapp.com/' ? 
     <NavLink id='selected-to-home' to='/'>Kitchen{homeDisplay}</NavLink> 
     : 
     <NavLink id='nav-to-home' to='/'>Kitchen{homeDisplay}</NavLink>}
     {selectedPage === 'https://obscure-scrubland-39099.herokuapp.com/cookbook' ? 
     <NavLink id='selected-to-cookbook' to='/cookbook'>Cookbook{cookbookDisplay}</NavLink>
     :
     <NavLink id='nav-to-cookbook' to='/cookbook'>Cookbook{cookbookDisplay}</NavLink>}
     {selectedPage === 'https://obscure-scrubland-39099.herokuapp.com/store' ? 
     <NavLink id='selected-to-store' to='/store'>Store{storeDisplay}</NavLink>
     :
     <NavLink id='nav-to-store' to='/store'>Store{storeDisplay}</NavLink>}
      {selectedPage === 'https://obscure-scrubland-39099.herokuapp.com/cart' ? 
      <NavLink id='selected-to-cart' to='/cart'>Cart{cartDisplay}</NavLink>
      :
      <NavLink id='nav-to-cart' to='/cart'>Cart{cartDisplay}</NavLink>}
      {selectedPage === 'https://obscure-scrubland-39099.herokuapp.com/about' ? 
      <NavLink id='selected-to-about' to='/about'>About</NavLink>
      : 
      <NavLink id='nav-to-about' to='/about'>About</NavLink>}
  </div>
  <button id='signout-button' onClick={handleLogoutClick}>Sign Out</button>
</div>

  
}

export default Navbar