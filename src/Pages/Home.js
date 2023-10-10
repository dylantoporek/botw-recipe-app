import React, {useState, useEffect} from "react";
import greyBackground from '../Images/greyBackground.png'
import {Stack, Flex, Text, Button, Image } from '@chakra-ui/react'

function Home({changePage, recipeList, ingredientList}){

    
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
                recipeList[0],
                recipeList[10],
                recipeList[15],
                recipeList[12],
                recipeList[2],
                
            ]
    const featuredRecipeDisplay = featuredRecipes[0] !== undefined ? featuredRecipes.map((recipe)=>{
            return <div className="sample-card">
                <p className="sample-name">{recipe.name}</p>
                <img className="pantry-img" src={recipe.image}/>
            </div>
    }) : null

    const featuredIngredientDisplay = featuredIngredients[0] !== undefined ? featuredIngredients.map((ingredient)=>{
            return <Flex flexDir={'column'} alignItems={'center'}>
                <Text>{ingredient.name}</Text>
                <Image maxW={'70px'} src={ingredient.image}/>
            </Flex>
    }) : null

    console.log(featuredRecipes)
    console.log(featuredIngredients)
    return (
        <Stack maxW={'100vw'} backgroundColor={'grey'}>
            <Flex flexDir={'column'} p={10}>
                <Text fontWeight={'bold'}>Instructions</Text>
                <Flex fontSize={14} flexDir={'column'}>
                    <Text>Find a recipe you would like to create in the cookbook.</Text>
                    <Text>Go to the shop and purchase any required ingredients to create the recipe.</Text>
                    <Text>Place the ingredients into the pot and press the cook button. If you used the right combination of ingredients, you will have made the dish!</Text>
                    <Text>Finally, you can sell the dishes you cook to make back the money you used to purchase ingredients.</Text>
                </Flex>
            </Flex>
            <Flex>
                <Text>Featured Recipes:</Text>
                <Flex backgroundColor={'white'}>
                    {featuredRecipeDisplay}
                </Flex>
                
            </Flex>
            <Flex>
                <Text>Featured Ingredients:</Text>
                <Flex backgroundColor={'white'} gap={10} p={5}>
                    {featuredIngredientDisplay}
                </Flex>
            </Flex>
        </Stack>
    )
}

export default Home

{/* <div>
            <div id='about-container'>
                <div id='instructions'>
                    <h3>Instructions:</h3>
   
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
        </div> */}
        