import React from "react";

function Dish({item}){
    
    let priceRewrite = item.price
    if (priceRewrite === 0){
        priceRewrite = 25
    }

    let itemDisplay = <div>
        <p>{item.name}</p>
        <img src={item.image}/>
        <p>Value: {priceRewrite}</p>
    </div>
    return(
        <div>{itemDisplay}</div>
    ) 
}

export default Dish