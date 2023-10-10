import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom"
import rupee from '../Images/rupee.png'
import kitchenIcon from '../Images/kitchenIcon.png'
import cookbookIcon from '../Images/cookbookIcon.png'
import storeIcon from '../Images/storeIcon.png'
import cartIcon from '../Images/cartIcon.png'
import {Stack, Flex, Text, Button, Image, useMediaQuery } from '@chakra-ui/react'
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
      navigate('/')
    }
    if (string === 'Kitchen'){
      navigate('/kitchen')
    }
    if (string === 'Cookbook'){
      navigate('/cookbook')
    }
    if (string === 'Store'){
      navigate('/store')
    }
    if (string === 'Cart'){
      navigate('/cart')
    }
  }
 const variants = {
   open: { 
     opacity: 1, 
     x: 150, 
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
    <Stack flexDir={'row'} maxW={'100vw'} p={5} justifyContent={'space-between'}>
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
            <Text>
              {user.username}
            </Text>
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
          left: -150,
          padding: 10,
          borderBottomRightRadius: '.5em',
          borderTopRightRadius: '.5em',
          backgroundColor: 'white'
         }}
         >
          <Flex alignSelf={'flex-end'}>
            <CloseIcon cursor={'pointer'} onClick={() => setExpandNav(false)}/>
          </Flex>
          <Flex flexDir={'column'} mt={10} gap={2}>
            {navbarOptions.map((item) => {
              return <Text alignSelf={'center'} cursor={'pointer'} onClick={() => handleNavigate(item)}>
                {item}
              </Text>
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
    <Stack flexDir={'row'} maxW={'100vw'} p={5} justifyContent={'space-between'}> 
        <motion.div
         style={{
          display: 'flex'
         }}
         initial={{opacity: 0}}
         animate={{opacity: 1}}>
          {navbarOptions.map((item) => {
            return (
              <Flex mr={5}>
                <Text cursor={'pointer'} onClick={() => handleNavigate(item)}>
                  {item}
                </Text>
              </Flex>
            )
          })}
        </motion.div>
        <Flex gap={5}>
          <Flex gap={1}>
            <Image maxW={'10px'} src={rupee}/>
            <Text>{user.bank}</Text>
          </Flex>
          <Flex gap={1}>
            <Image cursor={'pointer'} src={'./account_circle.svg'} onClick={() => setExpandAccount(true)}/>
          </Flex>
        </Flex>
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

// return <div id='navbar'>  
// <div id='user-container-display'> 
//   <p id='user-display'>User: {user.username}</p>
//   <p id='user-bank'>{rupeeDisplay}{user.bank}</p> 
// </div>
// <div id='nav-links-cont'>
// {selectedPage === 'https://obscure-scrubland-39099.herokuapp.com/' || selectedPage === 'http://localhost:4000/' ? 
//     <NavLink id='selected-to-about' to='/'>Home</NavLink>
//     : 
//     <NavLink id='nav-to-about' to='/'>Home</NavLink>}
//    {selectedPage === 'https://obscure-scrubland-39099.herokuapp.com/kitchen' || selectedPage === 'http://localhost:4000/kitchen' ? 
//    <NavLink id='selected-to-home' to='/kitchen'>Kitchen{homeDisplay}</NavLink> 
//    : 
//    <NavLink id='nav-to-home' to='/kitchen'>Kitchen{homeDisplay}</NavLink>}
//    {selectedPage === 'https://obscure-scrubland-39099.herokuapp.com/cookbook' || selectedPage === 'http://localhost:4000/cookbook' ? 
//    <NavLink id='selected-to-cookbook' to='/cookbook'>Cookbook{cookbookDisplay}</NavLink>
//    :
//    <NavLink id='nav-to-cookbook' to='/cookbook'>Cookbook{cookbookDisplay}</NavLink>}
//    {selectedPage === 'https://obscure-scrubland-39099.herokuapp.com/store' || selectedPage === 'http://localhost:4000/store' ? 
//    <NavLink id='selected-to-store' to='/store'>Store{storeDisplay}</NavLink>
//    :
//    <NavLink id='nav-to-store' to='/store'>Store{storeDisplay}</NavLink>}
//     {selectedPage === 'https://obscure-scrubland-39099.herokuapp.com/cart' || selectedPage === 'http://localhost:4000/cart' ? 
//     <NavLink id='selected-to-cart' to='/cart'>Cart{cartDisplay}</NavLink>
//     :
//     <NavLink id='nav-to-cart' to='/cart'>Cart{cartDisplay}</NavLink>}
    
// </div>
// <button id='signout-button' onClick={handleLogoutClick}>Sign Out</button>
// </div>