import React, {useState} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery, Input } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import rupee from '../Images/rupee.png'
import backgroundHover from "../Images/backgroundHover.png"
import backgroundNoHover from "../Images/backgroundNoHover.png"

function Ingredient({ing, setTogDetails, setSpecificIng}){
    const [isShown, setIsShown] = useState(false)
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    function openDetails(){ 
        setSpecificIng(ing)
        setTogDetails(true)
    }

    return(
        <motion.div
         whileHover={{scale: 1.1}}>
            <Flex 
             cursor={'pointer'}
             gap={1}
             flexDir={'column'} 
             alignItems={'center'} 
             backgroundColor={'rgba(255, 255, 255, .8)'}
             boxShadow={'0px 1px 2px 2px rgba(54,54,54,.5)'}
             w={isMobile ? '150px':'200px'}
             h={'200px'}
             mb={0}
             onClick={() => openDetails()}>
                
                <Image mt={8} w={'60px'} h={'60px'} src={ing.image}/>
                <Text textAlign={'center'} mt={5} fontSize={isMobile ? 12 : 14}>
                    {ing.name}
                </Text>
                <Flex gap={1}>
                    <Image w={'10px'} src={rupee}/>
                    <Text>{ing.price}</Text>
                </Flex>
            </Flex>
        </motion.div>
    ) 
    
}

export default Ingredient