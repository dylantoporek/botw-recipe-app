import React, {useEffect, useState} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery, Input } from '@chakra-ui/react'
import { motion} from 'framer-motion'
import noImg from '../Images/noImg.png'
import rupee from '../Images/rupee.png'
import parchH from '../Images/parchH.png'
import {ArrowBackIcon} from '@chakra-ui/icons'
import { useLockBodyScroll } from "@uidotdev/usehooks";

function CookBookDetails({togDetails, recipe, setTogDetails, changePinnedRecipe}){
 useLockBodyScroll()
 console.log(recipe)
    const [showPin, setShowPin] = useState(false)
    const [isShown, setIsShown] = useState(true)
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })

   function handleChangePinnedRecipe(){
        let pinnedIngredientList = recipe
        changePinnedRecipe(pinnedIngredientList)
        alert(`${recipe.name} is now pinned in your Kitchen.`)
        setTogDetails(false)
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
            top: isMobile ? '9%':'10%',
            left: '0px',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#20606F'
         }}>
            <Stack p={10} w={isMobile ? '100vw':'90vw'} alignSelf={'center'}>
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
                 p={5} 
                 backgroundColor={'rgba(255, 255, 255, .8)'} 
                 flexDir={'column'} 
                 alignItems={'center'}>
                    <Text>
                        {recipe.name}
                    </Text>
                    <Image maxW={'300px'} src={recipe.image}/>
                    <Text>{recipe.description}</Text>
                    <Flex gap={1} mt={2}>
                        <Image w={'10px'} src={rupee}/>
                        <Text>{recipe.price}</Text>
                    </Flex>
                    
                </Flex>
            </Stack>
        </motion.div>
    )
}

export default CookBookDetails