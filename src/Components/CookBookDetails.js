import React, {useEffect, useState} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery, Input, Heading,  Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import { motion} from 'framer-motion'
import noImg from '../Images/noImg.png'
import rupee from '../Images/rupee.png'
import parchH from '../Images/parchH.png'
import {ArrowBackIcon} from '@chakra-ui/icons'
import { useLockBodyScroll } from "@uidotdev/usehooks";
import Recipe from "./Recipe";

function CookBookDetails({togDetails, recipe, setTogDetails, changePinnedRecipe, ingredientList}){

    
    const [showPin, setShowPin] = useState(false)
    const [isShown, setIsShown] = useState(true)
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    const [recipeIngredients ,setRecipeIngredients] = useState([])

    useEffect(() => {
        if (recipe) {
          let ingredients = []
          let item1 = ingredientList.find((ing) => ing.name !== null && ing.name === recipe.ingredient1)
          let item2 =  ingredientList.find((ing) => ing.name !== null && ing.name === recipe.ingredient2)
          let item3 =  ingredientList.find((ing) => ing.name !== null && ing.name === recipe.ingredient3)
          let item4 = ingredientList.find((ing) => ing.name !== null && ing.name === recipe.ingredient4)
          let item5 = ingredientList.find((ing) => ing.name !== null && ing.name === recipe.ingredient5)
          ingredients.push(item1, item2, item3, item4, item5)
          ingredients.filter((ing) =>  ing !== undefined)
          setRecipeIngredients([...ingredients])
        }
    }, [])

   function handleChangePinnedRecipe(){
        let pinnedIngredientList = recipe
        changePinnedRecipe(pinnedIngredientList)
        setShowPin(true)
        setTimeout(() => {
            setTogDetails(false)
        }, 500)
    }
    const variants = {
        open: { 
          opacity: 1, 
       },
        close: { 
          opacity: 0, 
         }, 
    }

    return (
        <motion.div
         initial={{opacity: 0}}
         animate={isShown ? 'open' : 'close'}
         variants={variants}
         style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            zIndex: 1,
            top: isMobile ? '9vh':'10vh',
            left: '0px',
            overflowY: isMobile ? 'scroll':'hidden',
            width: '100vw',
            height: isMobile ? '91vh':'90vh',
            backgroundColor: '#20606F'
         }}>
            {showPin ? <Alert position={'fixed'} top={'10vh'}>
                <AlertIcon/>
                <AlertTitle>{`${recipe.name} is now pinned in your Kitchen.`}</AlertTitle>
            </Alert>:null}
            <Stack p={10} mt={5} w={isMobile ? '100vw':'800px'} alignSelf={'center'}>
                <motion.div whileHover={{scale: 1.1, x: 0}} whileTap={{scale: .9, x: 0}}>
                <Flex color={'white'} gap={5} alignItems={'center'} cursor={'pointer'} onClick={() => {
                    setIsShown(false)
                    setTimeout(() => {
                        setTogDetails(false)
                    }, 200)
                }}>
                    <ArrowBackIcon/>
                    <Text>
                        Back To Recipes
                    </Text>
                </Flex>
                </motion.div>
                
                <Flex
                 boxShadow={'0px 1px 2px 2px rgba(54,54,54,.5)'}
                 p={10} 
                 backgroundColor={'rgba(255, 255, 255, .8)'} 
                 flexDir={'column'} 
                 justifyContent={'space-between'}
                 overflowY={'scroll'}
                 >
                    <Flex justifyContent={'space-between'} flexDir={ isMobile ? 'column':'row'}>
                        <Flex flexDir={'column'}>
                            <Heading fontWeight={'bold'} fontSize={isMobile ? 24:36}>
                                {recipe.name}
                            </Heading>
                            <Text 
                             maxW={isMobile ? '100%' : '80%'}
                             fontSize={isMobile ? 12:14} 
                             mt={isMobile ? 2:3}>
                                {recipe.description}
                            </Text>
                        </Flex>
                        <Flex
                        mt={isMobile ? 5:0}
                         flexDir={isMobile ? 'row-reverse':'column'} 
                         alignItems={'center'} 
                         alignContent={'center'}
                         justifyItems={'center'}  
                         justifyContent={'space-between'}
                         gap={isMobile ? 10:0}
                         >
                            <Button fontSize={isMobile ? 12:14} maxW={'150px'} onClick={() => handleChangePinnedRecipe()}>Pin Recipe</Button>
                            <Flex fontSize={isMobile ? 12:14} gap={1} mt={0} mb={1}>
                                <Text mr={2}>Value:</Text>
                                <Image w={'10px'} src={rupee}/>
                                <Text>{recipe.price}</Text>
                            </Flex>

                        </Flex>
                    </Flex>
                   
                    
                    <Flex mt={isMobile ? 5:10} flexDir={isMobile ? 'column':'row'} justifyItems={'center'}>
                        <Flex mb={isMobile ? 2:0} flexDir={'column'} flex={1}>
                            <Text mb={2} fontWeight={'bold'}>Ingredients</Text>
                            <Flex gap={isMobile ? 1:3} alignItems={'center'} flexWrap={'wrap'} flexDirection={'row'}>
                                {recipeIngredients.map((ing) => {
                                    if (ing !== undefined){
                                        return ( 
                                        <Flex 
                                        p={isMobile ? 0:2}
                                        backgroundColor={'rgba(255, 255, 255, .5)'}
                                        borderRadius={'1em'}
                                        w={isMobile ? '90px':'120px'}
                                        h={'80px'}
                                        fontSize={isMobile ? 10: 12}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        textAlign={'center'}
                                        flexDir={'column'}>
                                            <Image h={isMobile ? '30px':'40px'} src={ing.image}/>
                                            <Text>{ing.name}</Text>
                                        </Flex>
                                        )
                                    } else return null
                                })}
                            </Flex> 
                        </Flex>
                        <Flex
                        mr={5}
                        marginTop={isMobile ? 2:0} 
                        flex={1} 
                        flexDir={'column'} 
                        alignItems={isMobile ? 'center':'flex-end'} 
                        justifyContent={'center'}  
                        gap={2}>
                            <Image w={isMobile ? '140px':'200px'} src={recipe.image}/>
                        </Flex>
                    </Flex>  
                </Flex>
            </Stack>
        </motion.div>
    )
}

export default CookBookDetails