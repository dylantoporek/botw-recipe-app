import React from "react";


function Pot({item}){

    
    
    let itemDisplay
    if(item.ingredient.name !== null){
        itemDisplay = <div id='pot-ing'>
            <img className='ing-img' src={item.ingredient.image}/>
            
        </div>
    }

    

    return(
        <div>
            {itemDisplay}
        </div>
    ) 
}

export default Pot