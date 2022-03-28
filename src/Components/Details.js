import React,{useState} from "react";
import rupee from '../Images/rupee.png'

function Details({ing, setTogDetails, addItemToCart}){
    const [quantity, setQuantity] = useState(1)
    const [isShown, setIsShown] = useState(false)
    const [addShow, setAddShow] = useState(false)
    const [minusShow, setMinusShow] = useState(false)
    const [cartShow, setCartShow] = useState(false)

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
        {isShown ? 
        <button id='to-shop' onClick={closeDetails}
        style={{backgroundColor: 'gainsboro'}}
        onMouseEnter={()=> setIsShown(true)}
        onMouseLeave={()=> setIsShown(false)}>
            X
        </button>
        : 
        <button id='to-shop' onClick={closeDetails}
            onMouseEnter={()=> setIsShown(true)}
            onMouseLeave={()=> setIsShown(false)}>
                X
        </button>}
            
        <p id='details-name'>{ing.name}</p>
        <p id='details-price'>Price: {rupeeDisplay}{ing.price}</p>
        <img id='details-img' src={ing.image}/>
        <p id='description-label'>Description:</p>
        <p id='details-description'>{ing.description}</p>
            
        
        <div id='quantity-form-cont'>
            <p id='quantity'>Qty: x{quantity}</p>
            <div id='quantity-cont-plus'>
                {minusShow ? 
                <button id='minus' onClick={removeOne}
                style={{backgroundColor: 'gainsboro'}}
                onMouseEnter={()=> setMinusShow(true)}
                onMouseLeave={()=> setMinusShow(false)}>
                    -
                </button>
                : 
                <button id='minus' onClick={removeOne}
                onMouseEnter={()=> setMinusShow(true)}
                onMouseLeave={()=> setMinusShow(false)}>
                    -
                </button>}
                {addShow ? 
                <button id='add' onClick={addOne}
                style={{backgroundColor: 'gainsboro'}}
                onMouseEnter={()=> setAddShow(true)}
                onMouseLeave={()=> setAddShow(false)}>
                    +
                </button>
                : 
                <button id='add' onClick={addOne}
                onMouseEnter={()=> setAddShow(true)}
                onMouseLeave={()=> setAddShow(false)}>
                    +
                </button>}
                
            </div>
            
            <p id='details-total'>Total: {rupeeDisplay}{totalPrice}</p>
        </div>

        
        {cartShow ? 
        <button id='details-add-to-cart' onClick={putInCart}
        style={{backgroundColor: 'green'}}
        onMouseEnter={()=> setCartShow(true)}
        onMouseLeave={()=> setCartShow(false)}>
            Add to Cart
        </button>
        : 
        <button id='details-add-to-cart' onClick={putInCart}
        onMouseEnter={()=> setCartShow(true)}
        onMouseLeave={()=> setCartShow(false)}>
            Add to Cart
        </button>}
        
    </div>
    
    return (
        <div className="comp-cont-1">
            {infoDisplay}
        </div>
    )
}

export default Details