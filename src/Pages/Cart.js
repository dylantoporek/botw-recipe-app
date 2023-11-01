import React, {useState, useEffect} from "react";
import CartItem from "../Components/CartItem";
import rupee from '../Images/rupee.png'
import {Stack, Flex, Text, Button, Image, useMediaQuery, Link, Grid, GridItem, AlertIcon, AlertTitle, Alert } from '@chakra-ui/react'
import {motion} from 'framer-motion'

function Cart({user, cart, deleteItemFromCart, checkPantryItems, setCart, setUser, changePage}){
  const [showCheckout, setShowCheckout] = useState(false)
  const [showRemove, setShowRemove] = useState(false)
  const [deletedItem, setDeletedItem] = useState(null)
  const [isMobile] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: false,
})
  useEffect(()=>{
    changePage(window.location.href)
  }, [])



  let tallyTotal = 0
  const tallyItems = cart.map((item)=> {
    return tallyTotal = tallyTotal + (item.price * item.quantity)
  })

    
  function checkoutItems(){
      if (user.bank > tallyTotal){
        let newBankStatement = user.bank - tallyTotal
        // UPDATE USER BANK
        fetch(`/api/v1/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bank: newBankStatement
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((data)=> {
              setUser({
                ...user,
                bank: data.bank
              })
            })
          } else {
            r.json().catch((data) => console.log(data))
          }
        });
        
        
        cart.forEach((item) => {
          checkPantryItems(item)
        })
        setShowCheckout(true)
        setCart([])
      } else {
        alert("Transaction declined. Please make sure you have enough money to make your purchase.")
      }
    }

  function removeFromCart(item){
    setDeletedItem(item)
    setShowRemove(true)
    deleteItemFromCart(item)
    setTimeout(() => {
        setShowRemove(false)
    }, 1000)
}


  return (
    // cart page container
    <Stack 
     alignItems={'center'}
     overflow={'hidden'}
     p={10}
     w={'100vw'} 
     maxH={'100vh'}
     minH={isMobile ? '93vh' : '89.6vh'}
     position={'absolute'}
     top={isMobile ? '50px':'70px'}
     backgroundColor={'#20606F'}>
        {showRemove && deletedItem ? 
         <Alert position={'fixed'} top={'10.5vh'}>
            <AlertIcon/>
            <AlertTitle>{`${deletedItem.name} has been removed from your cart.`}</AlertTitle>
          </Alert>:null}
          {showCheckout ? 
         <Alert status='success' position={'fixed'} top={isMobile ? '20.5vh': '22.5vh'} h={isMobile ? '120px':'100px'} maxW={'80vw'}>
            <AlertIcon/>
            <AlertTitle>{'Transaction Approved! Happy Cooking.'}</AlertTitle>
          </Alert>:null}
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        {/* cart itmes containter */}
        <Flex
         justifyContent={'center'}
         w={'100vw'}
         maxH={'80vh'}>
          {/* When cart has items */}
          {cart.length  > 0 && !showCheckout? 
          <Flex
           maxW={isMobile ? '100vw': '900px'}
           boxShadow={'0px 1px 2px 2px rgba(54,54,54,.5)'}
           backgroundColor={'rgba(255, 255, 255, .8)'} 
           flexDir={isMobile ? 'column' : 'row'}  
           gap={isMobile ? 0:1} 
           p={5}> 
            <Grid
             mb={3}
             overflow={'hidden'}
             maxW={isMobile ? '85vw': '100vw'}
             fontSize={isMobile ? 12:14}
             templateColumns='repeat(6, 1fr)' 
             templateAreas={`"header""main"`} 
             gap={0}>
                     <GridItem colSpan={2} area={'header'} fontWeight={'bold'}>
                      Item
                    </GridItem>
                    <GridItem colSpan={1} pl={isMobile ? 0:0} area={'header'} fontWeight={'bold'}>
                      Price
                    </GridItem>
                    <GridItem colSpan={1} pl={isMobile ? '2':'2'}  area={'header'} fontWeight={'bold'}>
                      Quantity
                    </GridItem>
                    <GridItem colSpan={1} pl={isMobile ? '6':'7'}  area={'header'} fontWeight={'bold'}>
                      Total
                    </GridItem>
                    <GridItem colSpan={6} overflowY={'scroll'}>
                      {cart.map((item, i) => 
                        <CartItem 
                         removeFromCart={removeFromCart}
                         setShowRemove={setShowRemove}
                         setCart={setCart} 
                         cart={cart} 
                         i={i} 
                         key={item.id} 
                         item={item} 
                         deleteItemFromCart={deleteItemFromCart}/>)}
                    </GridItem>
            </Grid>
            <Flex p={0} ml={isMobile ? 0:10}>
              <Flex
                boxShadow={'0px 1px 2px 2px rgba(54,54,54,.2)'}
                flexDir={isMobile ? 'row-reverse':'column'} 
                alignItems={'center'}
                justifyContent={'space-around'}
                backgroundColor={'rgba(255, 255, 255, .8)'}
                maxH={'100px'}
                w={'100%'}
                p={isMobile ? 2: 4}
                mr={isMobile ? 0:2}
                gap={5}>
                  <Flex alignItems={'center'}>
                    <Text mr={2}>Subtotal:</Text>
                    <Image mr={1} maxH={'20px'} src={rupee}/>
                    <Text>{tallyTotal}</Text>
                  </Flex>
                  <Button colorScheme="green" p={2} onClick={() => checkoutItems()}>Checkout</Button>
              </Flex> 
            </Flex>    
          </Flex>
          : 
          // empty cart display
          <Flex 
          maxW={'80vw'} 
          boxShadow={'0px 1px 2px 2px rgba(54,54,54,.5)'}
          backgroundColor={'rgba(255, 255, 255, .8)'}  
          overflow={'hidden'} 
          justifyContent={'center'}
          mt={'50px'} 
          p={5} 
          fontSize={isMobile ? 12:14}>
            <Text maxW={isMobile ? '100%' : '100%'}>Nothing to see in here yet! Try checking out the Recipes or Shop sections for inspiration.</Text>
          </Flex>}
        </Flex>
    </motion.div>
   </Stack>
  )
}

export default Cart