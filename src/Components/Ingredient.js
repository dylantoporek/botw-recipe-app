import React, {useState} from "react";

function Ingredient({ing, setTogDetails, setSpecificIng}){
    

    function putInCart(){
        
        setSpecificIng(ing)
        setTogDetails(true)
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