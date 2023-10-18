import React, {useState, useEffect} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery, Link } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import CookBookNav from "../Components/CookBookNav";
import Recipe from "../Components/Recipe"
import CookBookDetails from "../Components/CookBookDetails";

function Cookbook({ingredientList ,recipeList, changePage, changePinnedRecipe}){
    const [categoryFilter, setCategoryFilter] = useState("All")
    const [nameFilter, setNameFilter] = useState("")
    const [typeFilter, setTypeFilter] = useState("All")
    const [togDetails, setTogDetails] = useState(false)
    const [specificRecipe, setSpecificRecipe] = useState(null)
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })


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

    return (
            <Stack 
             flexDir={'row'}
             maxW={'100vw'} 
             mt={isMobile ? '55px':'65px'} 
             p={isMobile ? 0:10}
             backgroundColor={'#20606F'}
             minH={'90.5vh'}
             justifyContent={isMobile ? 'center':'flex-end'}>
                <motion.div 
                 style={{
                    display: 'flex',
                    flexDirection: 'row'
                 }}
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
                        {filteredByName.map((recipe) => 
                         <Recipe 
                          key={recipe.id}
                          recipe={recipe} 
                          setTogDetails={setTogDetails} 
                          setSpecificRecipe={setSpecificRecipe}/>)}
                     </Flex> 
                     <Flex>
                        {togDetails ? <CookBookDetails ingredientList={ingredientList} togDetails={togDetails} recipe={specificRecipe} setTogDetails={setTogDetails} changePinnedRecipe={changePinnedRecipe} /> : null}
                    </Flex> 
                </motion.div>
                
            </Stack>
    )
    
}

export default Cookbook