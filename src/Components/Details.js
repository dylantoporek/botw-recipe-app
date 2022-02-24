import React,{useState} from "react";

function Details({ing, setTogDetails, addItemToCart}){
    const [quantity, setQuantity] = useState(1)


    function removeOne(){
        if (quantity > 1){
            setQuantity((quantity) => quantity - 1)
        } else {
           return alert('Cannot purchase less than 1')
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
        alert('item added to cart')
        addItemToCart(newCartItem)
    }

    const totalPrice = ing.price * quantity
    const infoDisplay = <div id='details-cont'>
        
            <button id='to-shop' onClick={closeDetails}>keep shopping</button>

            <p id='details-name'>{ing.name}</p>
            <img id='details-img' src={ing.image}/>
            <p id='description-label'>Description:</p>
            <p id='details-description'>{ing.description}</p>
            <p id='details-price'>Price: ${ing.price}</p>
        
            <div id='quantity-form-cont'>
                <p id='quantity'>How many? x{quantity}</p>
                <div id='quantity-cont-plus'>
                    <button id='minus' onClick={removeOne}>-</button>
                    <button id='add' onClick={addOne}>+</button>
                </div>
                
                <p id='details-total'>Total: ${totalPrice}</p>
            </div>

            

            <button id='details-add-to-cart' onClick={putInCart}>add to cart</button>

        
    </div>
    
    return (
        <div className="comp-cont-1">
            {infoDisplay}
        </div>
    )
}

export default Details