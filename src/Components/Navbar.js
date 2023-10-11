import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom"
import rupee from '../Images/rupee.png'
import kitchenIcon from '../Images/kitchenIcon.png'
import cookbookIcon from '../Images/cookbookIcon.png'
import storeIcon from '../Images/storeIcon.png'
import cartIcon from '../Images/cartIcon.png'
import {Stack, Flex, Text, Button, Image, useMediaQuery, Link } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ArrowRightIcon } from '@chakra-ui/icons'
import {motion} from 'framer-motion'

function Navbar({user, setUser, selectedPage}){
  const navigate = useNavigate()
  function handleLogoutClick() {
    fetch("/api/v1/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    navigate('/')
  }
  const [expandNav, setExpandNav] = useState(false)
  const [expandAccount, setExpandAccount] = useState(false)
  const [isMobile] = useMediaQuery("(max-width: 768px)", {
    ssr: true,
    fallback: false,
})
 const navbarOptions = ['Home', 'Kitchen', 'Cookbook', 'Store', 'Cart']
 
 function iconPicker(string){
  if (string === 'Home'){
    return null
  }
  if (string === 'Kitchen'){
    return kitchenIcon
  }
  if (string === 'Cookbook'){
    return cookbookIcon
  }
  if (string === 'Store'){
    return storeIcon
  }
  if (string === 'Cart'){
    return cartIcon
  }
 }

  function handleNavigate(string){
    if (string === 'Home'){
      setExpandNav(false)
      navigate('/')
    }
    if (string === 'Kitchen'){
      setExpandNav(false)
      navigate('/kitchen')
    }
    if (string === 'Cookbook'){
      setExpandNav(false)
      navigate('/cookbook')
    }
    if (string === 'Store'){
      setExpandNav(false)
      navigate('/store')
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
      x: -150, 
      transition: {
       x: {stiffness: 100}
     } 
   },
   closeRight: { 
    opacity: 1, 
    x: 150, 
    transition: {
     x: {stiffness: 100}
   } 
 }
  }
 if (isMobile){
  return (
    <Stack 
     flexDir={'row'} 
     minW={'100vw'} 
     p={5} 
     justifyContent={'space-between'} 
     position={'fixed'} 
     top={0}
     zIndex={1}
     backgroundColor={'white'}>
      <motion.div
       initial={{opacity: 0}}
       animate={{opacity: 1}}>
        <HamburgerIcon cursor={'pointer'} onClick={() => setExpandNav(true)}/>
      </motion.div>
      <Flex gap={5}>
          <Flex gap={1}>
            <Image maxW={'10px'} src={rupee}/>
            <Text>{user.bank}</Text>
          </Flex>
          <Flex gap={1}>
            <Image cursor={'pointer'} onClick={() => setExpandAccount(true)} src={'./account_circle.svg'}/>
          </Flex>
        </Flex>
        <motion.div
          initial={{opcaity: 0}}
          animate={expandNav ? 'open' : 'close'}
          variants={variants}
         style={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          height: '300px',
          width: '150px',
          top: 0,
          left: -350,
          padding: 10,
          borderBottomRightRadius: '.5em',
          borderTopRightRadius: '.5em',
          backgroundColor: 'white'
         }}
         >
          <Flex alignSelf={'flex-end'}>
            <CloseIcon maxW={'10px'} mr={2} mt={1} cursor={'pointer'} onClick={() => setExpandNav(false)}/>
          </Flex>
          <Flex flexDir={'column'} alignItems={'center'} mt={10} gap={2}>
            {navbarOptions.map((item) => {
              return <motion.div
              key={item}
              whileHover={{scale: 1.1, color: 'orange'}}
              whileTap={{scale: .9}}>
               <Flex justifyItems={'center'}>
                 <Text cursor={'pointer'} onClick={() => handleNavigate(item)}>
                   {item}
                 </Text>
               </Flex> 
             </motion.div>
            })}
          </Flex>
        </motion.div>
        <motion.div
        initial={{opcaity: 0}}
        animate={expandAccount ? 'openRight' : 'closeRight'}
        variants={variants}
        style={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          height: '50px',
          width: '150px',
          top: 0,
          right: -150,
          padding: 10,
          borderBottomRightRadius: '.5em',
          borderTopRightRadius: '.5em',
          backgroundColor: 'white'
         }}>
          <Flex alignItems={'center'}>
            <ArrowRightIcon cursor={'pointer'} mr={2} onClick={() => setExpandAccount(false)}/>
            <Button onClick={() => handleLogoutClick()}>
              Signout
            </Button>
          </Flex>
        </motion.div>
    </Stack>
  )
 } else return (
    <Stack 
      flexDir={'row'} 
      minW={'100vw'} 
      p={5} 
      justifyContent={'space-between'} 
      position={'fixed'} 
      top={0}
      zIndex={1}
      backgroundColor={'white'}> 
        <motion.div
         style={{
          display: 'flex',
          alignItems: 'center'
         }}
         initial={{opacity: 0}}
         animate={{opacity: 1}}>
          {navbarOptions.map((item) => {
            return (
              <motion.div
               key={item}
               whileHover={{scale: 1.1, color: 'orange'}}
               whileTap={{scale: .9}}>
                <Flex mr={10} alignItems={'center'}>
                  <Text cursor={'pointer'} onClick={() => handleNavigate(item)}>
                    {item}
                  </Text>
                </Flex> 
              </motion.div>
            )
          })}
        </motion.div>
        <motion.div
         initial={{opacity: 0}}
         animate={{opacity: 1}}>
          <Flex gap={10}>
            <Flex gap={1}>
              <Image maxW={'10px'} src={rupee}/>
              <Text>{user.bank}</Text>
            </Flex>
            <Flex gap={1}>
              <Image cursor={'pointer'} src={'./account_circle.svg'} onClick={() => setExpandAccount(true)}/>
            </Flex>
          </Flex>
        </motion.div>
        
        <motion.div
        initial={{opcaity: 0}}
        animate={expandAccount ? 'openRight' : 'closeRight'}
        variants={variants}
        style={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          height: '50px',
          width: '150px',
          top: 0,
          right: -150,
          padding: 10,
          borderBottomRightRadius: '.5em',
          borderTopRightRadius: '.5em',
          backgroundColor: 'white'
         }}>
          <Flex alignItems={'center'}>
            <ArrowRightIcon cursor={'pointer'} mr={2} onClick={() => setExpandAccount(false)}/>
            <Button onClick={() => handleLogoutClick()}>
              Signout
            </Button>
          </Flex>
        </motion.div>
    </Stack>
  )
  
}
export default Navbar