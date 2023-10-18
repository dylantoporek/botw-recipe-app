import React, {useState, useEffect} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery, Link } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import Ingredient from "../Components/Ingredient";
import StoreNav from "../Components/StoreNav";
import StoreDetails from "../Components/StoreDetails";
import Details from "../Components/Details";
import greyBackground from '../Images/greyBackground.png'

function Store({ingredientList, addItemToCart, changePage}){
    const [categoryFilter, setCategoryFilter] = useState("All")
    const [nameFilter, setNameFilter] = useState("")
    const [togDetails, setTogDetails] = useState(false)
    const [specificIng, setSpecificIng] = useState(null)
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    useEffect(()=>{
        changePage(window.location.href)
    }, [])

    
    const filteredByCategory = ingredientList.filter((ing)=>{
        if (categoryFilter === "All"){
            return ing
        }
        if (categoryFilter !== "All"){
            return ing.category === categoryFilter
        }
    })

    const filteredByName = filteredByCategory.filter((ing)=>{
        if (nameFilter === ""){
            return ing
        }
        if (nameFilter !== ""){
            return ing.name ? ing.name.toLowerCase().includes(nameFilter.toLowerCase()) : null
        }
    })

    // const ingredientDisplay = filteredByName.map((ing)=>{
    //     return <Ingredient key={ing.id} ing={ing} setTogDetails={setTogDetails} setSpecificIng={setSpecificIng}/>
    // })

    // const detailsDisplay = specificIng ? <Details addItemToCart={addItemToCart} setTogDetails={setTogDetails} ing={specificIng}/> : null
    
    
//     if(!togDetails){
//         return <div id='page-background'>
// <div className="store-comp-cont-1">
//         <StoreNav 
//             name={nameFilter} 
//             category={categoryFilter} 
//             setCategoryFilter={setCategoryFilter}
//             setNameFilter={setNameFilter}
//         />
//         {ingredientDisplay}
//     </div>
//     <img id='login-signup-background' src={greyBackground} />
//         </div>
        
//     } else{
//         return <div id='page-background'>

// <div className="store-comp-cont-1">
//         <StoreNav 
//             name={nameFilter} 
//             category={categoryFilter} 
//             setCategoryFilter={setCategoryFilter}
//             setNameFilter={setNameFilter}
//         />
//         {detailsDisplay}
//         {ingredientDisplay}
        
//     </div>
//     <img id='login-signup-background' src={greyBackground} />
//         </div>
        
//     }
return (
    <Stack
     overflowY={'hidden'}
     flexDir={'row'}
     maxW={'100vw'} 

     p={isMobile ? 0:10}
     backgroundColor={'#20606F'}
     maxH={'100vh'}
     justifyContent={isMobile ? 'center':'flex-end'}>
        <motion.div
        style={{
            overflowY: 'scroll',
            height: isMobile ? '92vh':'80vh',
            display: 'flex',
            flexDirection: 'row',
            marginTop: isMobile ? '55px' : '55px',
         }}
         initial={{opacity: 0}}
         animate={{opacity: 1}}>
            <Flex>
                <StoreNav 
                    nameFilter={nameFilter} 
                    category={categoryFilter}
                    setNameFilter={setNameFilter}
                    setCategoryFilter={setCategoryFilter}/>
            </Flex>
            <Flex
                overflow={togDetails ? 'hidden' : 'unset'}
                h={togDetails ? '100vh' : '100%'}
                transition={'height .2s ease-in-out'}
                w={isMobile ? '100vw':'70vw'}
                p={0}
                position={'relative'}
                flexWrap={'wrap'} 
                top={isMobile ? '180px': 0} 
                paddingY={10}
                gap={5}
                zIndex={0}
                left={isMobile ? 0 : 0}
                ml={isMobile ? 0:'3vw'}
                mr={isMobile ? 0:'1vw'}
                justifyContent={isMobile ? 'center' : 'center'}
                backgroundColor={'#20606F'}>
                    {filteredByName.map((ingredient) => 
                     ingredient.name ? 
                        <Ingredient 
                        key={ingredient.id}
                        ing={ingredient} 
                        setTogDetails={setTogDetails} 
                        setSpecificIng={setSpecificIng}/> : null)}
            </Flex> 
            <Flex>
                {togDetails ? <StoreDetails ing={specificIng} togDetails={togDetails} addItemToCart={addItemToCart} setTogDetails={setTogDetails}/> : null}
            </Flex>
        </motion.div>
    </Stack>
)
    
}

export default Store