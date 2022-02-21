import React from "react";

function Pot({item, pot, removeFromPot}){

    
    let itemDisplay
    if(item.name !== null){
        itemDisplay = <div>
            <img className='ing-img' src={item.image}/>
            <button onClick={removeFromPot}>remove from pot</button>
        </div>
    }
    return(
        <div>{itemDisplay}</div>
    ) 
}

export default Pot