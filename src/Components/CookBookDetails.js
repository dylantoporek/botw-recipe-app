import React, {useState} from "react";

function CookBookDetails({recipe, setTogDetails}){

    let priceRewrite = recipe.price
    if(priceRewrite === 0){
        priceRewrite = 25
    }
    const infoDisplay = <div>
        <p>{recipe.name}</p>
        <img src={recipe.image}/>
        <p>Additonal Effect: {recipe.category}</p>
        <p>Value: {priceRewrite}</p>
        <p>{recipe.description}</p>
            <div>
                <h3>Ingredient List:</h3>
                <p>{recipe.ingredient1}</p>
                <p>{recipe.ingredient2}</p>
                <p>{recipe.ingredient3}</p>
                <p>{recipe.ingredient4}</p>
                <p>{recipe.ingredient5}</p>
            </div>
        
            
        <button onClick={()=> setTogDetails(false)}>Back to Cookbook</button>
    </div>
    return (
        <div>{infoDisplay}</div>
    )
}

export default CookBookDetails