import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../Components/CartItem";


function Cart({cart, deleteItemFromCart}){
    const navigate = useNavigate()

    function handleNavToStore(){
        navigate('/store')
    }

    const cartDisplay = cart.map((item) => {
        return <CartItem item={item} deleteItemFromCart={deleteItemFromCart}/>
    })

    return (
        <div className="comp-cont-2">
            <button id='to-store' onClick={handleNavToStore}>Back to Store</button>
            <div id='cart-items-cont'>
            {cartDisplay}
            </div>
            
            <button id='checkout'>Checkout</button>
        </div>
    )
}

export default Cart