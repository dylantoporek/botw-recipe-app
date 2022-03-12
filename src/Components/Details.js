import React,{useState} from "react";
import backgroundNoHover from "../Images/backgroundNoHover.png"
import rupee from '../Images/rupee.png'

function Details({ing, setTogDetails, addItemToCart}){
    const [quantity, setQuantity] = useState(1)

    const rupeeDisplay = <img id='rupee' src={rupee} />

    function removeOne(){
        if (quantity > 1){
            setQuantity((quantity) => quantity - 1)
        } else {
           return alert(`You must purchase at least 1 ${ing.name}`)
        }
        
    }

    function addOne(){
        setQuantity((quantity) => quantity + 1)
    }

    function closeDetails(){
        setTogDetails(false)
    }

    function putInCart(){
        let newCartItem = {
            ...ing,
            quantity: quantity
        }
        alert(`${ing.name} was added to you cart.`)
        addItemToCart(newCartItem)
        setTogDetails(false)
    }

    const totalPrice = ing.price * quantity
    const infoDisplay = <div id='details-cont'>
        
            <button id='to-shop' onClick={closeDetails}>X</button>

            <p id='details-name'>{ing.name}</p>
            <p id='details-price'>Price: {rupeeDisplay}{ing.price}</p>
            <img id='details-img' src={ing.image}/>
            <p id='description-label'>Description:</p>
            <p id='details-description'>{ing.description}</p>
            
        
            <div id='quantity-form-cont'>
                <p id='quantity'>Qty: x{quantity}</p>
                <div id='quantity-cont-plus'>
                    <button id='minus' onClick={removeOne}>-</button>
                    <button id='add' onClick={addOne}>+</button>
                </div>
                
                <p id='details-total'>Total: {rupeeDisplay}{totalPrice}</p>
            </div>

            

            <button id='details-add-to-cart' onClick={putInCart}>Add to Cart</button>

        
    </div>
    
    return (
        <div className="comp-cont-1">
            {infoDisplay}
        </div>
    )
}

export default Details