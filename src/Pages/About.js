import React, {useState, useEffect} from "react";
import greyBackground from '../Images/greyBackground.png'

function About({changePage, recipeList, ingredientList}){

    
    useEffect(()=>{
        changePage(window.location.href)
      }, [])

      const featuredIngredients = 
        [
            ingredientList[12],
            ingredientList[20],
            ingredientList[26],
            ingredientList[31],
            ingredientList[47],
          
        ]
      const featuredRecipes = 
            [
                recipeList[67],
                recipeList[134],
                recipeList[10],
                recipeList[12],
                recipeList[253],
                
            ]
    const featuredRecipeDisplay = featuredRecipes[0] !== undefined ? featuredRecipes.map((recipe)=>{
            return <div className="sample-card">
                <p className="sample-name">{recipe.name}</p>
                <img className="pantry-img" src={recipe.image}/>
            </div>
    }) : null

    const featuredIngredientDisplay = featuredIngredients[0] !== undefined ? featuredIngredients.map((ingredient)=>{
            return <div className="sample-card">
                <p className="sample-name">{ingredient.name}</p>
                <img className="pantry-img" src={ingredient.image}/>
            </div>
    }) : null

    console.log(featuredRecipes)
    console.log(featuredIngredients)
    return (
        <div>
            <div id='about-container'>
                <div id='instructions'>
                    <h3>Instructions:</h3>
                    <li className="instruction">Find a recipe you would like to create in the cookbook.</li>
                    <li className="instruction">Use the pin recipe button to save that recipe as reference in your kitchen.</li>
                    <li className="instruction">Go to the shop and purchase any required ingredients to create the recipe.</li>
                    <li className="instruction">Checkout your items from the cart. Make sure you have the required funds.</li>
                    <li className="instruction">Place the ingredients into the pot and press the cook button. If you used the right combination of ingredients, you will have made the dish!</li>
                    <li className="instruction">Finally, you can sell the dishes you cook to make back the money you used to purchase ingredients.</li>
                </div>

                <div>
                    <h4>Sample Recipes:</h4>
                    <div className="sample-container">
                    {featuredRecipeDisplay}
                    </div>
                </div>

                <div>
                    <h4>Sample Ingredients:</h4>
                    <div className="sample-container">
                    {featuredIngredientDisplay}
                    </div>
                </div>

            </div>
            <img id='login-signup-background' src={greyBackground} />
        </div>
        
    )
}

export default About