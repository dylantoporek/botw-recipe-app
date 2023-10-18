import React, {useState} from "react";
import parchV from '../Images/parchV.png'
import brightParch from '../Images/brightParch.png'
import noImg from '../Images/noImg.png'
import rupee from '../Images/rupee.png'
import {Stack, Flex, Text, Button, Image, useMediaQuery, Input } from '@chakra-ui/react'
import {motion} from 'framer-motion'

function Recipe({recipe, setTogDetails, setSpecificRecipe}){
    const [isShown, setIsShown] = useState(false)
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    // const rupeeDisplay = <img id='rupee' src={rupee} />

    let priceRewrite = recipe.price
    if (recipe.price === 0){
        priceRewrite = 25
    }

    function openDetails(){
        setTogDetails(true)
        setSpecificRecipe(recipe)
    }

    return(
        <motion.div
         whileHover={{scale: 1.1}}>
            <Flex 
             gap={1}
             cursor={'pointer'}
             flexDir={'column'} 
             alignItems={'center'} 
             backgroundColor={'rgba(255, 255, 255, .8)'}
             boxShadow={'0px 1px 2px 2px rgba(54,54,54,.5)'}
             w={isMobile ? '150px':'200px'}
             h={'200px'}
             mb={5}
             onClick={() => openDetails()}>
                
                <Image mt={6} w={'100px'} h={'80px'} src={recipe.image}/>
                <Text textAlign={'center'} mt={5} fontSize={isMobile ? 12 : 14}>
                    {recipe.name}
                </Text>
                <Flex gap={1}>
                    <Image w={'10px'} src={rupee}/>
                    <Text>{recipe.price}</Text>
                </Flex>
            </Flex>
        </motion.div>
    ) 
}

export default Recipe