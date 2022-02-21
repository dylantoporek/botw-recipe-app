import React from "react";
import Pot from "./Pot";

function Pantry({item, addItemToPot}){
    function addToPot(){
        addItemToPot(item)
    }
    
    let itemDisplay
    if(item.ingredient.name !== null){
        itemDisplay = <div id='pantry-item'>
            <p>{item.ingredient.name}</p>
            <img className="ing-img" src={item.ingredient.image}/>
            <p>x{item.quantity}</p>
            <button onClick={addToPot}>add to pot</button>
        </div>
    }
    return(
        <div>{itemDisplay}</div>
    ) 
}

export default Pantry