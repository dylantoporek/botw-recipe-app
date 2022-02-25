import React, {useState} from "react";

function Recipe({recipe, setTogDetails, setSpecificRecipe}){
    const [isShown, setIsShown] = useState(false)
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
        recipeDisplay = <div 
            onClick={openDetails}
                onMouseEnter={()=> setIsShown(true)}
                onMouseLeave={()=> setIsShown(false)} 
            id='recipe-item-nH'>
            <p className="recipe-name">{recipe.name}</p>
            <img className="recipe-img" src={recipe.image}/>
            <p className="recipe-value">Value: {priceRewrite}</p>
            
        </div>
    }

    if (isShown){
        recipeDisplay = <div 
        onClick={openDetails}
            onMouseEnter={()=> setIsShown(true)}
            onMouseLeave={()=> setIsShown(false)} 
        id='recipe-item-hover'>
        <p className="recipe-name">{recipe.name}</p>
        <img className="recipe-img" src={recipe.image}/>
        <p className="recipe-value">Value: {priceRewrite}</p>
        
    </div>
    }

    return(
        <div className="recipe">{recipeDisplay}</div>
    ) 
}

export default Recipe