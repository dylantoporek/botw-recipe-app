import React from "react";

function Ingredient({ing}){


    let ingDisplay
    if (ing.name !==null){
        ingDisplay = <div className='ingredient'>
            <p>{ing.name}</p>
            <img className="ing-img" src={ing.image} />
            <p>{ing.description}</p>
        </div>
    }
    
    return <div>{ingDisplay}</div>
}

export default Ingredient