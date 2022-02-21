import React, {useState} from "react";
import CartItem from "../Components/CartItem";


function Cart({user, cart, deleteItemFromCart, addItemToPantry, setCart, setUser}){


    let tallyTotal = 0
    const tallyItems = cart.map((item)=> {
     return tallyTotal = tallyTotal + (item.price * item.quantity)
    })

    
    function checkoutItems(){
        if (user.bank > tallyTotal){
          // UPDATE USER BANK
          let newBankStatement = user.bank - tallyTotal
          // CHECK PANTRY TO SEE IF POST OR UPDATE
          cart.forEach((item)=> {
            addItemToPantry(item)
            
          })
          setCart([])
          setUser({
            ...user,
            bank: newBankStatement
          })
        } else {
          alert("Not enough money")
        }
            
    }

    const cartDisplay = cart.map((item) => {
        return <CartItem key={item.id} item={item} deleteItemFromCart={deleteItemFromCart}/>
    })

    return (
        <div className="comp-cont-2">
            <div id='cart-items-cont'>
            {cartDisplay}
            </div>
            <div id="total-cost">Total: {tallyTotal}</div>
            <button id='checkout' onClick={checkoutItems}>Checkout</button>
        </div>
    )
}

export default Cart