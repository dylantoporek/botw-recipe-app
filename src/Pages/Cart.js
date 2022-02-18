import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../Components/CartItem";


function Cart({cart, deleteItemFromCart}){
    const navigate = useNavigate()

    function handleNavToStore(){
        navigate('/store')
    }

    function checkoutItems(){
        cart.forEach((item)=> {
            let pantry = {
                item_id: item.id,
                quantity: item.quantity
            }
            fetch("http://localhost:3001/pantries", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  pantry
                }),
              }).then((r) => {
                if (r.ok) {
                  r.json().then((data)=> console.log(data))
                } else {
                  r.json().then((data) => console.log(data))
                }
              });
        })
    }

    const cartDisplay = cart.map((item) => {
        return <CartItem item={item} deleteItemFromCart={deleteItemFromCart}/>
    })

    return (
        <div className="comp-cont-2">
            <button id='to-store' onClick={handleNavToStore}>keep shopping</button>
            <div id='cart-items-cont'>
            {cartDisplay}
            </div>
            <button id='checkout' onClick={checkoutItems}>Checkout</button>
        </div>
    )
}

export default Cart