import React, {useState} from "react";
import rupee from '../Images/rupee.png'

function CartItem({item, deleteItemFromCart}){
    
    const [isShown, setIsShown] = useState(false)
    const rupeeDisplay = <img id='rupee' src={rupee} />

    function removeFromCart(){
        console.log(item)
        alert(`${item.name} removed from your cart.`)
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
            
            {isShown ? 
            <button id="remove-from-cart" onClick={removeFromCart} value={item.id}
            style={{backgroundColor: 'gainsboro'}}
            onMouseEnter={()=> setIsShown(true)}
            onMouseLeave={()=> setIsShown(false)}>
                remove from cart
            </button>
            : 
            <button id="remove-from-cart" onClick={removeFromCart} value={item.id}
            onMouseEnter={()=> setIsShown(true)}
            onMouseLeave={()=> setIsShown(false)}>
                remove from cart
            </button>}
            
        </div>
    )
}

export default CartItem