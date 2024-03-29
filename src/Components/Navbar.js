import React, {useEffect, useState} from "react";
import { useNavigate} from "react-router-dom"
import rupee from '../Images/rupee.png'
import kitchenIcon from '../Images/kitchenIcon.png'
import cookbookIcon from '../Images/cookbookIcon.png'
import storeIcon from '../Images/storeIcon.png'
import cartIcon from '../Images/cartIcon.png'
import {Stack, Flex, Text, Button, Image, useMediaQuery, Link } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ArrowRightIcon } from '@chakra-ui/icons'
import {motion} from 'framer-motion'
import AccountSettings from "./AccountSettings";
import '../App.css'

function Navbar({user, setUser, selectedPage, cart}){
  const navigate = useNavigate()

 
  const [expandNav, setExpandNav] = useState(false)
  const [expandAccount, setExpandAccount] = useState(false)
  const [isMobile] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: false,
})
 const navbarOptions = ['Home', 'Recipes', 'Shop', 'Kitchen',]

  function handleNavigate(string){
    if (string === 'Home'){
      setExpandNav(false)
      navigate('/')
    }
    if (string === 'Kitchen'){
      setExpandNav(false)
      navigate('/kitchen')
    }
    if (string === 'Recipes'){
      setExpandNav(false)
      navigate('/recipes')
    }
    if (string === 'Shop'){
      setExpandNav(false)
      navigate('/shop')
    }
    if (string === 'Cart'){
      setExpandNav(false)
      navigate('/cart')
    }
  }
 const variants = {
   open: { 
     opacity: 1, 
     x: 350, 
     transition: {
      x: {stiffness: 100}
    } 
  },
   close: { 
     opacity: 0, 
     x: -150,
     transition: {
      x: {stiffness: 100}
      } 
    }, 
    openRight: { 
      opacity: 1, 
      x: 0, 
      transition: {
       x: {stiffness: 100}
     } 
   },
   closeRight: { 
    opacity:  0, 
    x: 100, 
    transition: {
     x: {stiffness: 100}
   } 
 }
  }
    // Mobile Display
 if (isMobile){
  return (
    <Stack 
     transition={'all ease-in'}
     flexDir={'row'} 
     w={'100vw'} 
     maxH={'60px'}
     p={5} 
     justifyContent={'space-between'} 
     position={'fixed'} 
     top={0}
     zIndex={2}
     backgroundColor={'white'}
     boxShadow={'0px 1px 2px 2px rgba(54,54,54,.2)'}>
      <motion.div
       initial={{opacity: 0}}
       animate={{opacity: 1}}>
        <Image id='triforce' cursor={'pointer'} maxW={'25px'} maxH={'50px'} onClick={() => {
          setExpandNav(true)
          setExpandAccount(false)
        }} src={'./triforce.svg'}/>
      </motion.div>
      <Flex gap={10} alignItems={'center'}>
          <Flex gap={1}>
            <Image maxW={'10px'} maxH={'25px'} src={rupee}/>
            <Text>{user.bank}</Text>
          </Flex>
          <motion.div
            whileHover={{scale: 1.2}}
            whileTap={{scale: .9}}>
              <Flex>
              <Image 
              cursor={'pointer'}
              onClick={() => {
                navigate('/cart')
                setExpandNav(false)
                setExpandAccount(false)
              }} 
              maxW={'25px'} 
              src={'/cart.svg'}/>
                <Flex w={'10px'} h={'10px'} backgroundColor={cart.length > 0 ? 'red' : 'transparent'} borderRadius={'50%'} p={0}>
                  <Text color={'white'}>
                    {/* {cart.length > 0 ? cart.length : null} */}
                  </Text>
                </Flex>
              </Flex>
             
            </motion.div>
          <Flex gap={1}>
            <motion.div
             whileHover={{scale: 1.2}}
             whileTap={{scale: .9}}>
              <Image cursor={'pointer'} onClick={() => {
                setExpandAccount(!expandAccount)
                setExpandNav(false)
              }} 
                src={'./account_circle.svg'}/>
            </motion.div>
            
          </Flex>
        </Flex>
        {/* Left sliding nav for Mobile */}
        <motion.div
          initial={{opcaity: 0}}
          animate={expandNav ? 'open' : 'close'}
          variants={variants}
         style={{
          zIndex: 10,
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '150px',
          top: 0,
          left: -350,
          padding: 10,
          borderBottomRightRadius: '.5em',
          borderTopRightRadius: '.5em',
          backgroundColor: 'white',
          boxShadow: '-1px 0px 2px 2px rgba(54,54,54,.5)'
         }}
         >
          <Flex alignSelf={'flex-end'} zIndex={100}>
            <CloseIcon maxW={'10px'} mr={2} mt={1} cursor={'pointer'} onClick={() => setExpandNav(false)}/>
          </Flex>
          <Flex flexDir={'column'} alignItems={'center'} mt={'20vh'} gap={10}>
            {navbarOptions.map((item) => {
              return <motion.div
              style={{
                display: 'flex',
                alignItems: 'center'
               }}
              key={item}
              whileHover={{scale: 1.1, color: 'orange'}}
              whileTap={{scale: .9}}>
               <Flex justifyItems={'center'}>
                 <Text cursor={'pointer'} zIndex={100} onClick={() => handleNavigate(item)}>
                   {item}
                 </Text>
               </Flex> 
             </motion.div>
            })}
          </Flex>
        </motion.div>
        {/* Right sliding account options */}
        <motion.div
        initial={false}
        animate={expandAccount ? 'openRight' : 'closeRight'}
        variants={variants}
        style={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          top: 60,
          right: 0,
          padding: 10,
          borderBottomLeftRadius: '.5em',
          borderTopLeftRadius: '.5em',
          backgroundColor: 'white'
         }}>
        <AccountSettings 
       expandAccount={expandAccount} 
       variants={variants} 
       user={user}
       setUser={setUser}/>
       </motion.div>
    </Stack>
  )
  // Desktop Display
 } else return (
    <Stack 
      flexDir={'row'} 
      w={'100vw'} 
      p={5} 
      justifyContent={'space-between'} 
      position={'fixed'} 
      top={0}
      zIndex={2}
      backgroundColor={'white'}
      boxShadow={'0px 1px 2px 2px rgba(54,54,54,.2)'}> 
        <motion.div
         style={{
          display: 'flex',
          alignItems: 'center'
         }}
         initial={{opacity: 0}}
         animate={{opacity: 1}}>
          {navbarOptions.map((item) => {
            if(item === 'Home'){
              return (
                <motion.div
                style={{
                  display: 'flex',
                  alignItems: 'center'
                 }}
               key={item}
               whileHover={{scale: 1.1, color: 'orange'}}
               whileTap={{scale: .9}}>
                <Flex mr={10} alignItems={'center'}>
                  <Image 
                   id={'triforce'}
                   src={'./triforce.svg'} 
                   cursor={'pointer'} 
                   maxW={'30px'}
                   onClick={() => {
                    handleNavigate(item)
                    setExpandAccount(false)
                    }}/>
                </Flex> 
              </motion.div>
              )
            } else return (
              <motion.div
               style={{
                display: 'flex',
                alignItems: 'center'
               }}
               initial={{opacity: 0}}
               animate={{opacity: 1}}
               key={item}
               whileHover={{scale: 1.1, color: 'orange'}}
               whileTap={{scale: .9}}>
                <Flex mr={10} alignItems={'center'}>
                  <Text cursor={'pointer'} onClick={() => {
                    handleNavigate(item)
                    setExpandAccount(false)
                    }}>
                    {item}
                  </Text>
                </Flex> 
              </motion.div>
            )
          })}
        </motion.div>
        <motion.div
         style={{
          display: 'flex',
          alignItems: 'center'
         }}
         initial={{opacity: 0}}
         animate={{opacity: 1}}>
          <Flex gap={10} alignItems={'center'}>
            <Flex gap={1}>
              <Image maxW={'10px'} src={rupee}/>
              <Text>{user.bank}</Text>
            </Flex>
            <motion.div
            whileHover={{scale: 1.2}}
            whileTap={{scale: .9}}>
              <Flex>
                <Image 
                cursor={'pointer'}
                onClick={() => {
                  navigate('/cart')
                  setExpandNav(false)
                  setExpandAccount(false)
                }} 
                maxW={'25px'} 
                src={'/cart.svg'}/>
                <Flex w={'10px'} h={'10px'} backgroundColor={cart.length > 0 ? 'red' : 'transparent'} borderRadius={'50%'} p={0}>
                  <Text color={'white'}>
                    {/* {cart.length > 0 ? cart.length : null} */}
                  </Text>
                </Flex>
              </Flex>
              
            </motion.div>
            <motion.div
            whileHover={{scale: 1.2}}
            whileTap={{scale: .9}}>
              <Image cursor={'pointer'} src={'./account_circle.svg'} onClick={() => setExpandAccount(!expandAccount)}/>
            </motion.div>
          </Flex>
        </motion.div>
        {/* Right sliding account options */}
        <motion.div
        initial={false}
        animate={expandAccount ? 'openRight' : 'closeRight'}
        variants={variants}
        style={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          top: 70,
          right: 0,
          padding: 10,
          borderBottomLeftRadius: '.5em',
          borderTopLeftRadius: '.5em',
          backgroundColor: 'white'
         }}>
        <AccountSettings 
       expandAccount={expandAccount} 
       variants={variants} 
       user={user}
       setUser={setUser}/>
       </motion.div>
    </Stack>
  )
  
}
export default Navbar