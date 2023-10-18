import React, {useEffect, useState} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery, Input, Heading,  Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import { motion} from 'framer-motion'
import noImg from '../Images/noImg.png'
import rupee from '../Images/rupee.png'
import parchH from '../Images/parchH.png'
import {ArrowBackIcon, AddIcon, MinusIcon} from '@chakra-ui/icons'
import { useLockBodyScroll } from "@uidotdev/usehooks";



function StoreDetails({togDetails, ing, setTogDetails, addItemToCart}){

    const [quantity, setQuantity] = useState(1)
    const [showPin, setShowPin] = useState(false)
    const [isShown, setIsShown] = useState(true)
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    const [recipeIngredients ,setRecipeIngredients] = useState([])
    
    function removeOne(){
        if (quantity > 1){
            setQuantity((quantity) => quantity - 1)
        } else {
           return alert(`You must purchase at least 1 ${ing.name}`)
        }
        
    }

    function addOne(){
        setQuantity((quantity) => quantity + 1)
    }
    function putInCart(){
        let newCartItem = {
            ...ing,
            quantity: quantity
        }
        setShowPin(true)
        addItemToCart(newCartItem)
        setTimeout(() => {
            setTogDetails(false)
        }, 1000)
       
    }

    const totalPrice = ing.price * quantity
 
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
                <AlertTitle>{`${ing.name} was added to your cart.`}</AlertTitle>
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
                        Back To Shop
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
                                {ing.name}
                            </Heading>
                            <Text 
                             maxW={isMobile ? '100%' : '80%'}
                             fontSize={isMobile ? 12:14} 
                             mt={isMobile ? 2:3}>
                                {ing.description}
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex flexDir={isMobile ? 'column-reverse': 'row'} gap={isMobile ? 5:0} justifyContent={'space-around'} mt={isMobile ? 5:10}>
                        <Flex flexDir={'column'} alignItems={'center'} gap={5}>
                                <Text>Select Quantity</Text>
                                <Flex gap={5} alignItems={'center'}>
                                    <Button borderRadius={'50%'} isDisabled={quantity === 1 ? true:false} onClick={removeOne}>
                                        <MinusIcon boxSize={3}/>
                                    </Button>
                                    <Text>
                                        {quantity}
                                    </Text>
                                    <Button borderRadius={'50%'}  onClick={addOne}>
                                        <AddIcon boxSize={3}/>
                                    </Button>
                                </Flex>
                                <Flex>
                                    <Button onClick={putInCart}>
                                        Add to Cart
                                    </Button>
                                </Flex>
                            </Flex>
                            <Flex flexDir={'column'} alignItems={'center'}>
                            <Flex gap={1} mt={0} mb={1}>
                                <Text mr={2}>Price:</Text>
                                <Image mt={'1px'} w={'10px'} h={'20px'} src={rupee}/>
                                <Text>{ing.price}</Text>
                            </Flex>
                            <Image mt={5} maxW={isMobile ? '75px':'100px'} maxH={isMobile ? '75px' : '100px'} src={ing.image}/>
                        </Flex>
                    </Flex>
                </Flex>
            </Stack>
        </motion.div>
    )
}

export default StoreDetails