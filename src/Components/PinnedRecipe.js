import React, {useState, useEffect} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery, Link, Grid, GridItem, AlertIcon, AlertTitle, Alert } from '@chakra-ui/react'
import {motion} from 'framer-motion'

export default function PinnedRecipe({pinnedRecipe, ingredientList}) {
    const [recipeIngredients ,setRecipeIngredients] = useState([])
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    useEffect(() => {
        if (pinnedRecipe) {
          let ingredients = []
          let item1 = ingredientList.find((ing) => ing.name !== null && ing.name === pinnedRecipe.ingredient1)
          let item2 =  ingredientList.find((ing) => ing.name !== null && ing.name === pinnedRecipe.ingredient2)
          let item3 =  ingredientList.find((ing) => ing.name !== null && ing.name === pinnedRecipe.ingredient3)
          let item4 = ingredientList.find((ing) => ing.name !== null && ing.name === pinnedRecipe.ingredient4)
          let item5 = ingredientList.find((ing) => ing.name !== null && ing.name === pinnedRecipe.ingredient5)
          ingredients.push(item1, item2, item3, item4, item5)
          ingredients.filter((ing) =>  ing !== undefined)
          setRecipeIngredients([...ingredients])
        }
    }, [])
    
    return (
        <Flex
         maxH={pinnedRecipe !== null ? '250px':'100px'}
         p={3}
         backgroundColor={'rgba(255, 255, 255, .2)'}>
            <Flex flexDir={'column'}>
                <Text fontWeight={'bold'} mb={4} fontSize={isMobile ? 12:14} textAlign={'center'} minW={'100px'}>
                    {pinnedRecipe ? 'Pinned Recipe' : 'Nothing Pinned Yet.'}
                </Text>
                {recipeIngredients.length > 0 && pinnedRecipe ? 
                <Flex
                 flexDir={'column'}>
                    <Text textAlign={'center'} fontSize={isMobile ? 12:14} mb={2}>
                        {pinnedRecipe.name}
                    </Text>
                   {recipeIngredients.map((ing) => {
                    if (ing !== undefined){
                        return (
                            <Flex gap={1} alignItems={'center'}>
                                <Image w={'30px'} h={'30px'} src={ing.image}/>
                                <Text fontSize={isMobile ? 10: 12}>{ing.name}</Text>
                            </Flex>
                        )
                    }   
                    })}
                </Flex> 
                : null}
            </Flex>
        </Flex>
    )
}