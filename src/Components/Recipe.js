import React, {useState} from "react";
import parchV from '../Images/parchV.png'
import brightParch from '../Images/brightParch.png'

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
        <img id='recipe-background-H' src={brightParch} />
        
    </div>
    }

    if (!isShown){
        recipeDisplay = <div 
        onClick={openDetails}
            onMouseEnter={()=> setIsShown(true)}
            onMouseLeave={()=> setIsShown(false)} 
        id='recipe-item-no-hover'>
        <p className="recipe-name">{recipe.name}</p>
        <img className="recipe-img" src={recipe.image}/>
        <p className="recipe-value">Value: {priceRewrite}</p>
        <img id='recipe-background-nH' src={parchV} />
        
    </div>
    }

    return(
        <div className="recipe">{recipeDisplay}</div>
    ) 
}

export default Recipe