import React from "react";

function CartItem({item, deleteItemFromCart}){

    function removeFromCart(){
        alert("item removed from cart")
        deleteItemFromCart(item)
    }
    return (
        <div className="cart-item" key={item.id}>
            <p className="ing-name">{item.name}</p>
            <img className="ing-img" src={item.image}/>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={removeFromCart} value={item.id}>remove from cart</button>
        </div>
    )
}

export default CartItem