import React, {useState} from "react";
import noImg from '../Images/noImg.png'
import rupee from '../Images/rupee.png'
import parchH from '../Images/parchH.png'

function CookBookDetails({recipe, setTogDetails, changePinnedRecipe}){
    const [showPin, setShowPin] = useState(false)
    const [isShown, setIsShown] = useState(false)

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
       console.log(recipe)
        let pinnedIngredientList = recipe
        changePinnedRecipe(pinnedIngredientList)
        alert(`${recipe.name} is now pinned in your Kitchen.`)
        setTogDetails(false)
    }

    const infoDisplay = <div id='cookbook-details'>
        {isShown ? 
        <button id='back-to-cb' onClick={()=> setTogDetails(false)}
        style={{backgroundColor: 'gainsboro'}}
        onMouseEnter={()=> setIsShown(true)}
        onMouseLeave={()=> setIsShown(false)}>
        X
        </button>
        : 
        <button id='back-to-cb' onClick={()=> setTogDetails(false)}
        onMouseEnter={()=> setIsShown(true)}
        onMouseLeave={()=> setIsShown(false)}>
        X
        </button>}
        
        {showPin ? 
        <button id='pin-recipe' onClick={handleChangePinnedRecipe}
        style={{backgroundColor: 'gainsboro'}}
        onMouseEnter={()=> setShowPin(true)}
        onMouseLeave={()=> setShowPin(false)}>
            pin recipe
        </button>
        : 
        <button id='pin-recipe' onClick={handleChangePinnedRecipe}
        onMouseEnter={()=> setShowPin(true)}
        onMouseLeave={()=> setShowPin(false)}>
            pin recipe
        </button>}
        
        <p id='cbd-name'>{recipe.name}</p>
        {recipeImg}
        <p id='cbd-effect'>Additonal Effect: {recipe.category}</p>
        <p id='cbd-price'>Value: {rupeeDisplay}{priceRewrite}</p>
        <div id='cbd-description-cont'>
            <p id='cookbook-description-label'>Description:</p>
            <p id='cookbook-description'>{recipe.description}</p>
        </div>
        
        <div id='cbd-ing-list-cont'>
            <p id='ing-list-label'>Ingredient List:</p>
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