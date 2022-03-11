import React, {useState} from "react";
import noImg from '../Images/noImg.png'
import rupee from '../Images/rupee.png'
import parchH from '../Images/parchH.png'

function CookBookDetails({recipe, setTogDetails, changePinnedRecipe}){

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

   function handleChangePinnedRecipe(){
        let pinnedIngredientList = [recipe.ingredient1, recipe.ingredient2, recipe.ingredient3, recipe.ingredient4, recipe.ingredient5]
        changePinnedRecipe(pinnedIngredientList)
        alert(`${recipe.name} is now pinned in your Kitchen.`)
        setTogDetails(false)
    }

    const infoDisplay = <div id='cookbook-details'>
        <button id='back-to-cb' onClick={()=> setTogDetails(false)}>X</button>
        <button id='pin-recipe' onClick={handleChangePinnedRecipe}>pin recipe</button>
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

        <img id='cbd-background-img' src={parchH}/>
    </div>

    return (
        <div className="comp-cont-1">{infoDisplay}</div>
    )
}

export default CookBookDetails