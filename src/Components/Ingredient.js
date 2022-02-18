import React, {useState} from "react";

function Ingredient({ing, addItemToCart}){
    const [togDetails, setTogDetails] = useState(false)

    function putInCart(){
        setTogDetails(true)
        // alert("item added to cart")
        // addItemToCart(ing)
    }

    let ingDisplay
    if (ing.name !==null){
        ingDisplay = <div className='ingredient'>
            <p className="ing-name">{ing.name}</p>
            <img className="ing-img" src={ing.image} />
            <button onClick={putInCart} className='ing-button' value={ing.id}>add to cart</button>
        </div>
    }
    
    if(!togDetails){
        return <div>{ingDisplay}</div>
    } else {
        return <div>
            <div>{ing.name}</div>
            {ingDisplay}
        </div>
    }
    
}

export default Ingredient