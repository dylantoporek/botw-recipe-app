import React, {useState, useEffect} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery, Link } from '@chakra-ui/react'
import FeaturedItems from "../Components/FeaturedItems";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import '../App.css'
import {motion} from 'framer-motion'

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

        <Stack 
        //  backgroundImage={'./158544.jpg'}
        //  backgroundSize={'cover'}
        //  backgroundRepeat={'repeat-y'}
         maxW={'100vw'} 
         mt={isMobile ? '50px':'80px'} 
         >
            <Stack style={{
                // background: 'linear-gradient(#E7DECD, white)',
                background: '#E7DECD'
            }}>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>

            {/* <Flex flexDir={'column'} p={10}>
                <Text fontWeight={'bold'}>Instructions</Text>
                <Flex fontSize={14} flexDir={'column'}>
                    <Text>Find a recipe you would like to create in the Cookbook.</Text>
                    <Text>Go to the Store and purchase any required ingredients to create the recipe.</Text>
                    <Text>Place the ingredients into the pot and press the cook button. If you used the right combination of ingredients, you will have made the dish!</Text>
                    <Text>Finally, you can sell the dishes you cook to make back the money you used to purchase ingredients.</Text>
                </Flex>
            </Flex> */}
            <Flex flexDir={'column'}>
            <Flex
                    flexDir={isMobile ? 'column' : 'row'} 
                    p={10} 
                    alignItems={isMobile ? 'flex-start':'center'} 
                    alignSelf={'center'} 
                    w={isMobile ? '100%' : '50%'} 
                    justifyContent={'space-between'}>
                    <Text fontWeight={'bold'}>Featured Recipes</Text>
                    <Link href={'/cookbook'}>
                        
                        <Flex alignItems={'center'} justifyItems={'flex-start'} gap={2}>
                            <Text>View All</Text>
                            <motion.div 
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: .9}}>
                            <ArrowForwardIcon color={'#DC602E'} boxSize={5}/>
                            </motion.div>
                        </Flex>

                        
                    </Link>
                </Flex>
                
                <Flex>
                    <FeaturedItems props={recipeList}/>
                </Flex>
            </Flex>
            <Flex flexDir={'column'} mt={20} mb={10}>
                <Flex
                    flexDir={isMobile ? 'column' : 'row'} 
                    p={10} 
                    alignItems={isMobile ? 'flex-start':'center'} 
                    alignSelf={'center'} 
                    w={isMobile ? '100%' : '50%'} 
                    justifyContent={'space-between'}>
                    <Text fontWeight={'bold'}>Featured Ingredients</Text>
                    <Link href={'/store'}>
                        <Flex alignItems={'center'} justifyItems={'flex-start'} gap={2}>
                            <Text>Shop All</Text>
                            <motion.div 
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: .9}}>
                            <ArrowForwardIcon color={'#DC602E'} boxSize={5}/>
                            </motion.div>
                        </Flex>
                    </Link>
                </Flex>
                <Flex>
                    <FeaturedItems props={ingredientList}/>
                </Flex>
            </Flex>
            </motion.div>
            </Stack>
        </Stack>

    )
}

export default Home
        