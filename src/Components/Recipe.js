import React, {useState} from "react";

function Recipe({recipe, setTogDetails, setSpecificRecipe}){

let priceRewrite = recipe.price

if (priceRewrite === 0){
    
    priceRewrite = 25
}

function openDetails(){
    setTogDetails(true)
    setSpecificRecipe(recipe)
}

    let recipeDisplay
    if (recipe.name !== null){
        recipeDisplay = <div className="recipe">
            <p className="recipe-name">{recipe.name}</p>
            <img className="recipe-img" src={recipe.image}/>
            <p className="recipe-value">Value: {priceRewrite}</p>
            <button onClick={openDetails}>Details</button>
        </div>
    }

    return(
        <div>{recipeDisplay}</div>
    ) 
}

export default Recipe