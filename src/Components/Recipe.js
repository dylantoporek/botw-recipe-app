import React, {useState} from "react";
import parchV from '../Images/parchV.png'
import brightParch from '../Images/brightParch.png'
import noImg from '../Images/noImg.png'
import rupee from '../Images/rupee.png'

function Recipe({recipe, setTogDetails, setSpecificRecipe}){
    const [isShown, setIsShown] = useState(false)

  const rupeeDisplay = <img id='rupee' src={rupee} />
    let priceRewrite = recipe.price
    if (priceRewrite === 0){
        priceRewrite = 25
    }

    function openDetails(){
        setTogDetails(true)
        setSpecificRecipe(recipe)
    }

    let recipeImg
    if (recipe.image !== null){
        recipeImg = <img className="recipe-img" src={recipe.image}/>
    } else {
        recipeImg = <img className="recipe-img" src={noImg}/>
    }


 

    let recipeDisplay
    if (recipe.name !== null){
        recipeDisplay = <div 
            onClick={openDetails}
                onMouseEnter={()=> setIsShown(true)}
                onMouseLeave={()=> setIsShown(false)} 
                className="recipe">
                <img id='recipe-background-nH' src={parchV} />
                <div>
                    <p className="recipe-name">{recipe.name}</p>
                    {recipeImg}
                    <p className="recipe-value">Value: {rupeeDisplay}{priceRewrite}</p> 
                </div>
                  
        </div>
    }

    if (isShown){
        recipeDisplay = <div 
        onClick={openDetails}
            onMouseEnter={()=> setIsShown(true)}
            onMouseLeave={()=> setIsShown(false)} 
            className="recipe">
        <img id='recipe-background-H' src={brightParch} />
        <div>
            <p className="recipe-name">{recipe.name}</p>
            {recipeImg}
            <p className="recipe-value">Value: {rupeeDisplay}{priceRewrite}</p>
        </div>
        
        
        
    </div>
    }


    return(
        <div>{recipeDisplay}</div>
    ) 
}

export default Recipe