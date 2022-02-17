import React from "react";

function Ingredient({ing, addItemToCart}){

    function putInCart(){
        alert("item added to cart")
        addItemToCart(ing)
    }

    let ingDisplay
    if (ing.name !==null){
        ingDisplay = <div className='ingredient'>
            <p className="ing-name">{ing.name}</p>
            <img className="ing-img" src={ing.image} />
            <button onClick={putInCart} className='ing-button' value={ing.id}>add to cart</button>
        </div>
    }
    
    return <div>{ingDisplay}</div>
}

export default Ingredient