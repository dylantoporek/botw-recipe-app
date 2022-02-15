import React from "react";

function Ingredient({ing}){

    console.log(ing)
    let ingDisplay
    if (ing.name !==null){
        ingDisplay = <div>
            <p>{ing.name}</p>
            <img src={ing.image}></img>
            <p>{ing.description}</p>
        </div>
    }
    
    return <div>{ingDisplay}</div>
}

export default Ingredient