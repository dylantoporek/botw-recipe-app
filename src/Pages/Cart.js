import React, {useState, useEffect} from "react";
import CartItem from "../Components/CartItem";
import rupee from '../Images/rupee.png'
import greyBackground from '../Images/greyBackground.png'

function Cart({user, cart, deleteItemFromCart, checkPantryItems, setCart, setUser, changePage}){
  const [checkShow, setCheckShow] = useState(false)
  
  useEffect(()=>{
    changePage(window.location.href)
  }, [])

  const rupeeDisplay = <img id='rupee' src={rupee} />

  let tallyTotal = 0
  const tallyItems = cart.map((item)=> {
    return tallyTotal = tallyTotal + (item.price * item.quantity)
  })

    
  function checkoutItems(){
    if (cart.length === 0){
      alert('No items to checkout.')
    } else {
      if (user.bank > tallyTotal){
        let newBankStatement = user.bank - tallyTotal
        // UPDATE USER BANK
        fetch(`/api/v1/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bank: newBankStatement
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((data)=> {
              setUser({
                ...user,
                bank: data.bank
              })
            })
          } else {
            r.json().catch((data) => console.log(data))
          }
        });
        
        
        cart.forEach((item) => {
          checkPantryItems(item)
        })
        alert("You have checked out your items. Happy cooking!")
        setCart([])
      } else {
        alert("Transaction declined. Please make sure you have enough money to make your purchase.")
      }
    }    
  }

  const cartDisplay = cart.length > 0 ? cart.map((item) => {
    return <CartItem key={item.id} item={item} deleteItemFromCart={deleteItemFromCart}/>
  }) : <div id='empty-cart'>
    <p id='empty-cart-text'>Cart is empty</p>
    </div>

  return (
    <div id='page-background'>
      <div className="cart-comp-cont-2">
        <div id='cart-items-cont'>
        
        {cartDisplay}
        </div>
        <div id="total-cost">Total: {rupeeDisplay}{tallyTotal}</div>
        
        {checkShow ? 
        <button id='checkout' onClick={checkoutItems}
        style={{backgroundColor: 'green'}}
        onMouseEnter={()=> setCheckShow(true)}
        onMouseLeave={()=> setCheckShow(false)}>
          Checkout
        </button>
        : 
        <button id='checkout' onClick={checkoutItems}
        onMouseEnter={()=> setCheckShow(true)}
        onMouseLeave={()=> setCheckShow(false)}>
          Checkout
        </button>}
            
      </div>
      <img id='login-signup-background' src={greyBackground} />
    </div>
  )
}

export default Cart