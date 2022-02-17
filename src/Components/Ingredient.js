import React from "react";

function Ingredient({ing}){


    let ingDisplay
    if (ing.name !==null){
        ingDisplay = <div className='ingredient'>
            <p className="ing-name">{ing.name}</p>
            <img className="ing-img" src={ing.image} />
            <button className='ing-button'>add to cart</button>
        </div>
    }
    
    return <div>{ingDisplay}</div>
}

export default Ingredient