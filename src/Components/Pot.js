import React from "react";

function Pot({item, pot, removeFromPot}){

    
    let itemDisplay
    if(item.ingredient.name !== null){
        itemDisplay = <div id='pot-ing'>
            <img className='ing-img' src={item.ingredient.image}/>
            <button onClick={removeFromPot}>remove from pot</button>
        </div>
    }
    return(
        <div>{itemDisplay}</div>
    ) 
}

export default Pot