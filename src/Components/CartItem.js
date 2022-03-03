import React from "react";
import rupee from '../Images/rupee.png'

function CartItem({item, deleteItemFromCart}){

  const rupeeDisplay = <img id='rupee' src={rupee} />

    function removeFromCart(){
        alert("item removed from cart")
        deleteItemFromCart(item)
    }
    return (
        <div className="cart-item" key={item.id}>
            <img className="cart-ing-img" src={item.image}/>
            <div id='cart-item-info'>
                <p className="cart-ing-name">{item.name}</p>
                <p className="cart-ing-price">Price: {rupeeDisplay}{item.price}</p>
                <p className="cart-quantity">Quantity: x{item.quantity}</p>
            </div>
            
            <button id="remove-from-cart" onClick={removeFromCart} value={item.id}>remove from cart</button>
        </div>
    )
}

export default CartItem