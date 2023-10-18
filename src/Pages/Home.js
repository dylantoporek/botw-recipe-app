import React, {useState, useEffect} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery, Link, Heading } from '@chakra-ui/react'
import FeaturedItems from "../Components/FeaturedItems";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import '../App.css'
import {motion} from 'framer-motion'

function Home({changePage, recipeList, ingredientList}){
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    
    useEffect(() => {
        changePage(window.location.href)
      }, [])


    return (

        <Stack 
         maxW={'100vw'} 
         mt={isMobile ? '50px':'70px'}
         overflowY={'scroll'} 
         >
            <Stack style={{
                background: '#20606F',
                color: 'white'
            }}>
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
            <Flex flexDir={'column'}>
            <Flex
                    flexDir={isMobile ? 'column' : 'row'} 
                    p={10} 
                    alignItems={isMobile ? 'flex-start':'center'} 
                    alignSelf={'center'} 
                    w={isMobile ? '100%' : '65%'} 
                    justifyContent={'space-between'}>
                    <Heading fontWeight={300}>Featured Recipes</Heading>
                    <Link href={'/recipes'}>
                        <Flex alignItems={'center'} justifyItems={'flex-start'} gap={2}>
                            <Text>View All</Text>
                            <motion.div 
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: .9}}>
                            <ArrowForwardIcon boxSize={5}/>
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
                    w={isMobile ? '100%' : '65%'} 
                    justifyContent={'space-between'}>
                    <Heading fontWeight={300}>Featured Ingredients</Heading>
                    <Link href={'/shop'}>
                        <Flex alignItems={'center'} justifyItems={'flex-start'} gap={2}>
                            <Text>Shop All</Text>
                            <motion.div 
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: .9}}>
                            <ArrowForwardIcon boxSize={5}/>
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
        