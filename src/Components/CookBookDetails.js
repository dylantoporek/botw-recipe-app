import React, {useState} from "react";
import noImg from '../Images/noImg.png'
import rupee from '../Images/rupee.png'

function CookBookDetails({recipe, setTogDetails}){

  const rupeeDisplay = <img id='rupee' src={rupee} />
    let priceRewrite = recipe.price
    if(priceRewrite === 0){
        priceRewrite = 25
    }

    let recipeImg
    if (recipe.image !== null){
        recipeImg = <img id="cbd-img" src={recipe.image}/>
    } else {
        recipeImg = <img id="cbd-img" src={noImg}/>
    }

    const infoDisplay = <div id='cookbook-details'>
        <button id='back-to-cb' onClick={()=> setTogDetails(false)}>X</button>
        <p id='cbd-name'>{recipe.name}</p>
        {recipeImg}
        <p id='cbd-effect'>Additonal Effect: {recipe.category}</p>
        <p id='cbd-price'>Value: {rupeeDisplay}{priceRewrite}</p>
        <div id='cbd-description-cont'>
            <p id='cookbook-description-label'>Description:</p>
            <p id='cookbook-description'>{recipe.description}</p>
        </div>
        
        <div id='cbd-ing-list-cont'>
            <h3>Ingredient List:</h3>
            <div id='cbd-ing-list-ings'>
                <p id='cbd-ing1'>{recipe.ingredient1}</p>
                <p id='cbd-ing2'>{recipe.ingredient2}</p>
                <p id='cbd-ing3'>{recipe.ingredient3}</p>
                <p id='cbd-ing4'>{recipe.ingredient4}</p>
                <p id='cbd-ing5'>{recipe.ingredient5}</p>
            </div>
            
        </div> 
    </div>

    return (
        <div className="comp-cont-1">{infoDisplay}</div>
    )
}

export default CookBookDetails