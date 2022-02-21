import React from "react";

function CartItem({item, deleteItemFromCart}){

    function removeFromCart(){
        alert("item removed from cart")
        deleteItemFromCart(item)
    }
    return (
        <div className="cart-item" key={item.id}>
            <img className="cart-ing-img" src={item.image}/>
            <div id='cart-item-info'>
                <p className="cart-ing-name">{item.name}</p>
                <p className="cart-ing-price">Price: {item.price}</p>
                <p className="cart-quantity">Quantity: {item.quantity}</p>
            </div>
            
            <button id="remove-from-cart" onClick={removeFromCart} value={item.id}>remove from cart</button>
        </div>
    )
}

export default CartItem