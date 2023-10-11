import React, {useState, useEffect} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery } from '@chakra-ui/react'
import FeaturedItems from "../Components/FeaturedItems";

function Home({changePage, recipeList, ingredientList}){
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    console.log(ingredientList)
    
    useEffect(() => {
        changePage(window.location.href)
      }, [])


    return (
        <Stack maxW={'100vw'} mt={isMobile ? '50px':'80px'} bgImage={"url('./4607759.jpg')"} bgGradient={'linear(to-b, orange 0%, transparent 100%)'}>
            {/* <Flex flexDir={'column'} p={10}>
                <Text fontWeight={'bold'}>Instructions</Text>
                <Flex fontSize={14} flexDir={'column'}>
                    <Text>Find a recipe you would like to create in the Cookbook.</Text>
                    <Text>Go to the Store and purchase any required ingredients to create the recipe.</Text>
                    <Text>Place the ingredients into the pot and press the cook button. If you used the right combination of ingredients, you will have made the dish!</Text>
                    <Text>Finally, you can sell the dishes you cook to make back the money you used to purchase ingredients.</Text>
                </Flex>
            </Flex> */}
            <Flex flexDir={'column'} p={0}>
                <Flex p={10}>
                    <Text mt={5} ml={5} fontWeight={'bold'}>Featured Recipes</Text>
                </Flex>
                
                <Flex>
                    <FeaturedItems props={recipeList}/>
                </Flex>
            </Flex>
            <Flex flexDir={'column'} p={0}>
                <Flex p={10}>
                    <Text mt={5} ml={5} fontWeight={'bold'}>Featured Ingredients</Text>
                </Flex>
                <Flex>
                    <FeaturedItems props={ingredientList}/>
                </Flex>
            </Flex>
        </Stack>
    )
}

export default Home
        