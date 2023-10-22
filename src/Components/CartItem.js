import React, {useState} from "react";
import rupee from '../Images/rupee.png'
import {Flex, Text, Button, Image, useMediaQuery, Alert, AlertIcon, AlertTitle, Menu, MenuButton, MenuList, MenuItem, Grid, GridItem } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";

function CartItem({item, i, cart, setCart, setShowRemove, removeFromCart}){

    const [newItemQuantity, setNewItemQuantity] = useState(0)
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    let quantityAsNumber = item.quantity


    function updateQuantity(num){
        let index = cart.findIndex((cartItem) => cartItem.id === item.id)
        let filteredCart = cart.filter((cartItem) => cartItem.id !== item.id)
        let updatedItem = {
          ...item,
          quantity: num
        }
        let updatedCart = [...filteredCart]
        updatedCart.splice(index, 0, updatedItem)
        setCart(updatedCart)
    }

    return (
        <Grid 
         templateColumns='repeat(6, 1fr)' 
         gap={5} 
         fontSize={isMobile ? 12:14} 
         alignItems={'center'} 
         mb={5} 
         mt={5} 
         py={1} 
         borderBottom={'1px solid black'}>
            <GridItem colSpan={2} minW={'70px'}>
                <Flex gap={0} flexDir={isMobile ? 'column' : 'row'} alignItems={isMobile ? 'flex-start':'center'}>
                    <Image 
                     w={isMobile ? '25px' :'35px'} 
                     h={isMobile ? '25px':'35px'} 
                     src={item.image} mr={2}/>
                    <Text>
                        {item.name}
                    </Text>
                </Flex>
            </GridItem>
            <GridItem colSpan={1} minW={'30px'}>
                <Flex gap={1} alignItems={'center'}>
                    <Image maxH={'20px'} src={rupee}/>
                    <Text>{item.price}</Text>
                </Flex>
            </GridItem>
            <GridItem colSpan={1}>
                <Flex>
                    <Menu>
                        <MenuButton>
                            <Flex>
                                <Button size={'sm'}>
                                    {item.quantity} 
                                    <ChevronDownIcon/>
                                </Button>
                                </Flex>
                        </MenuButton>
                        <MenuList>
                            {item.quantity > 2 ? <MenuItem onClick={(e) => {
                                setNewItemQuantity(e.target.value)
                                updateQuantity(e.target.value)
                                }} 
                                value={1}>
                                    1
                            </MenuItem> : null}
                            {item.quantity > 1 ? <MenuItem onClick={(e) => {
                                setNewItemQuantity(e.target.value)
                                updateQuantity(e.target.value)
                                }} 
                                value={parseInt(item.quantity) - 1}>
                                    {parseInt(item.quantity) - 1}
                            </MenuItem> : null}
                            <MenuItem onClick={(e) => {
                                setNewItemQuantity(e.target.value)
                                updateQuantity(e.target.value)
                                }} 
                                value={parseInt(item.quantity) + 1}>
                                    {parseInt(item.quantity) + 1}
                            </MenuItem>
                            <MenuItem onClick={(e) => 
                                updateQuantity(e.target.value)}
                                value={parseInt(item.quantity) + 2}>
                            {parseInt(item.quantity) + 2}
                            </MenuItem>
                            <MenuItem onClick={(e) => updateQuantity(e.target.value)} value={parseInt(item.quantity) + 3}>
                                {parseInt(item.quantity) + 3}
                            </MenuItem>
                            <MenuItem onClick={(e) => updateQuantity(e.target.value)} value={parseInt(item.quantity) + 4}>
                            {parseInt(item.quantity) + 4}
                            </MenuItem>
                            <MenuItem onClick={(e) => updateQuantity(e.target.value)} value={parseInt(item.quantity) + 5}>
                            {parseInt(item.quantity) + 5}
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </GridItem>
            <GridItem colSpan={1} pl={4} minW={'30px'}>
                <Flex>
                <Image maxH={'20px'} src={rupee} mr={1}/>
                       <Text>
                       {parseInt(item.price) * parseInt(item.quantity)}
                        </Text> 
                </Flex>
            </GridItem>
            <GridItem pl={1}>
            <CloseIcon 
                     mr={isMobile ? 5: 0}
                     onClick={() => removeFromCart(item)}
                     boxSize={4} 
                     p={1} 
                     borderRadius={'50%'} 
                     backgroundColor={'grey'} 
                     color={'white'}/>
            </GridItem>
            
        </Grid>
    )
}


export default CartItem

