import React, {useState, useEffect} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery, Link } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import CookBookNav from "../Components/CookBookNav";
import Recipe from "../Components/Recipe"
import CookBookDetails from "../Components/CookBookDetails";
import greyBackground from '../Images/greyBackground.png'

function Cookbook({recipeList, changePage, changePinnedRecipe}){
    const [categoryFilter, setCategoryFilter] = useState("All")
    const [nameFilter, setNameFilter] = useState("")
    const [typeFilter, setTypeFilter] = useState("All")
    const [togDetails, setTogDetails] = useState(false)
    const [specificRecipe, setSpecificRecipe] = useState(null)
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })


    console.log(recipeList)
    const filteredByCategory = recipeList.filter((recipe)=>{
        if (categoryFilter === "All" && recipe.category !== 'Elixer' && !recipe.name.includes('Monster')){
            return recipe
        }
        if (categoryFilter !== "All" && recipe.category !== 'Elixer'){
            return recipe.category.includes(categoryFilter)
        }
    })

    const filteredByType = filteredByCategory.filter((recipe)=>{
        if (typeFilter === 'All'){
            return recipe
        }
        if(typeFilter !== "All"){
            return recipe.name.includes(typeFilter)
        }
    })

    const filteredByName = filteredByType.filter((recipe)=>{
        if (nameFilter === ""){
            return recipe
        }
        if (nameFilter !== ""){
            return recipe.name ? recipe.name.toLowerCase().includes(nameFilter.toLowerCase()) : null
        }
    })

    console.log(togDetails)
    return (
            <Stack 
             flexDir={'row'}
             minH={'90vh'}
             maxW={'100vw'} 
             mt={isMobile ? '55px':'65px'} 
             p={isMobile ? 0:10}
             backgroundColor={'#E7DECD'}>
                <motion.div 
                 initial={{opacity: 0}}
                 animate={{opacity: 1}}>
                    <Flex>
                    <CookBookNav 
                     name={nameFilter} 
                     category={categoryFilter}
                     typeFilter={typeFilter}
                     setNameFilter={setNameFilter}
                     setCategoryFilter={setCategoryFilter}
                     setTypeFilter={setTypeFilter}/>
                    </Flex>
                   
                     <Flex
                       maxW={isMobile ? '100vw':'75vw'}
                       p={0}
                       overflowY={'scroll'}
                       maxH={'80vh'}
                       position={'relative'}
                       flexWrap={'wrap'} 
                       top={isMobile ? '200px': 0} 
                       marginBottom={10}
                       gap={5}
                       zIndex={0}
                       left={isMobile ? 0 : '250px'}
                       ml={isMobile ? 0:'3vw'}
                       mr={isMobile ? 0:'1vw'}
                       justifyContent={isMobile ? 'center' : 'flex-start'}>
                        {filteredByName.map((recipe) => 
                         <Recipe 
                          recipe={recipe} 
                          setTogDetails={setTogDetails} 
                          setSpecificRecipe={setSpecificRecipe}/>)}
                     </Flex> 
                     <Flex>
                        {togDetails ? <CookBookDetails recipe={specificRecipe} setTogDetails={setTogDetails} changePinnedRecipe={changePinnedRecipe} /> : null}
                    </Flex> 
                </motion.div>
                
            </Stack>
    )
    
}

export default Cookbook