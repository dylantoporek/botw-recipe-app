import React, {useState} from "react";
import CartItem from "../Components/CartItem";


function Cart({user, cart, deleteItemFromCart, addItemToPantry, setCart}){


    let tallyTotal = 0
    const tallyItems = cart.map((item)=> {
     return tallyTotal = tallyTotal + (item.price * item.quantity)
    })

    
    function checkoutItems(){
        if (user.bank > tallyTotal){
          cart.forEach((item)=> addItemToPantry(item))
          setCart([])
        } else {
          alert("Not enough money")
        }
            // fetch("http://localhost:3001/pantries", {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({
            //       pantry
            //     }),
            //   }).then((r) => {
            //     if (r.ok) {
            //       r.json().then((data)=> console.log(data))
            //     } else {
            //       r.json().then((data) => console.log(data))
            //     }
            //   });
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