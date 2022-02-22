import React, {useState} from "react";
import CartItem from "../Components/CartItem";


function Cart({user, cart, deleteItemFromCart, checkPantryItems, setCart, setUser}){


    let tallyTotal = 0
    const tallyItems = cart.map((item)=> {
     return tallyTotal = tallyTotal + (item.price * item.quantity)
    })

    
    function checkoutItems(){
        if (user.bank > tallyTotal){
          let newBankStatement = user.bank - tallyTotal
          // UPDATE USER BANK
          fetch(`/users/${user.id}`, {
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
          // setUser({
          //   ...user,
          //   bank: newBankStatement
          // })
        } else {
          alert("Not enough money")
        }
            
    }

    const cartDisplay = cart.length > 0 ? cart.map((item) => {
        return <CartItem key={item.id} item={item} deleteItemFromCart={deleteItemFromCart}/>
    }) : <div>Cart is empty</div>

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