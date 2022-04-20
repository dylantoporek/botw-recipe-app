import React, {useState, useEffect} from "react";
import greyBackground from '../Images/greyBackground.png'

function About({changePage, recipeList, ingredientList}){

    
    useEffect(()=>{
        changePage(window.location.href)
      }, [])

      const featuredIngredients = 
        [
            ingredientList[(Math.floor(Math.random() * ingredientList.length + 1))],
            ingredientList[(Math.floor(Math.random() * ingredientList.length + 1))],
            ingredientList[(Math.floor(Math.random() * ingredientList.length + 1))],
            ingredientList[(Math.floor(Math.random() * ingredientList.length + 1))],
            ingredientList[(Math.floor(Math.random() * ingredientList.length + 1))],
            ingredientList[(Math.floor(Math.random() * ingredientList.length + 1))],
            ingredientList[(Math.floor(Math.random() * ingredientList.length + 1))],
            ingredientList[(Math.floor(Math.random() * ingredientList.length + 1))],
            ingredientList[(Math.floor(Math.random() * ingredientList.length + 1))],
            ingredientList[(Math.floor(Math.random() * ingredientList.length + 1))]
        ]
      const featuredRecipes = 
            [
                recipeList[(Math.floor(Math.random() * recipeList.length + 1))],
                recipeList[(Math.floor(Math.random() * recipeList.length + 1))],
                recipeList[(Math.floor(Math.random() * recipeList.length + 1))],
                recipeList[(Math.floor(Math.random() * recipeList.length + 1))],
                recipeList[(Math.floor(Math.random() * recipeList.length + 1))],
                recipeList[(Math.floor(Math.random() * recipeList.length + 1))],
                recipeList[(Math.floor(Math.random() * recipeList.length + 1))],
                recipeList[(Math.floor(Math.random() * recipeList.length + 1))],
                recipeList[(Math.floor(Math.random() * recipeList.length + 1))],
                recipeList[(Math.floor(Math.random() * recipeList.length + 1))]
            ]
        console.log(featuredRecipes)
        console.log(featuredIngredients)

    return (
        <div>
            <div id='about-container'>
                <h3>Instructions:</h3>
                <li className="instruction">Find a recipe you would like to create in the cookbook.</li>
                <li className="instruction">Use the pin recipe button to save that recipe as reference in your kitchen.</li>
                <li className="instruction">Go to the shop and purchase any required ingredients to create the recipe.</li>
                <li className="instruction">Checkout your items from the cart. Make sure you have the required funds.</li>
                <li className="instruction">Place the ingredients into the pot and press the cook button. If you used the right combination of ingredients, you will have made the dish!</li>
                <li className="instruction">Finally, you can sell the dishes you cook to make back the money you used to purchase ingredients.</li>
            </div>
            <img id='login-signup-background' src={greyBackground} />
        </div>
        
    )
}

export default About