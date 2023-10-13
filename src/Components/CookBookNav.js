import React, {useState} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery, Input } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {ChevronDownIcon, TriangleDownIcon, SmallCloseIcon} from '@chakra-ui/icons'


function CookBookNav({name, category, typeFilter, setNameFilter, setCategoryFilter, setTypeFilter}){
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    const typesArr = ['Meat', 'Veggie', 'Soup', 'Seafood', 'Curry', 'Dessert']
    const [showTypeMenu, setShowTypeMenu] = useState(false)
    function handleSearchByName(e){
        setNameFilter(e.target.value)
    }

    function handleFilterChange(e){
        console.log(e.target.innerText)
        setCategoryFilter(e.target.innerText)
    }

    function handleTypeChange(e){
        setTypeFilter(e.target.value)
    }


    const variants = {
        open: { 
          opacity: 1,
          transition: 1
       },
        close: { 
          opacity: 0, 
          transition: 0,
          y: -50
         }, 
    }

    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}> 
            <Stack
             minH={isMobile ? '50px':'90vh'}
             minW={isMobile ? '100vw' : '10vw'}
             top={isMobile ? 55 : 65}
             left={0}
             gap={isMobile ? 5:20}
             position={'fixed'}
             zIndex={1}
             p={5}
             backgroundColor={'white'}>
                <Flex>
                    <Input
                     borderRadius={'1em'}
                     mt={6} 
                     placeholder='search' 
                     type="text" 
                     value={name} 
                     onChange={handleSearchByName}/>
                </Flex>
                    <Flex 
                     flexDir={'column'} 
                     onMouseOver={() => setShowTypeMenu(true)} 
                     onMouseLeave={() => setShowTypeMenu(false)}>
                        <motion.div>
                            <Flex
                            borderBottom={'1px solid black'}
                            mr={isMobile ? 5:0} 
                            alignItems={'center'}>
                                <Text>
                                    Filter
                                </Text>
                                <ChevronDownIcon/>
                            </Flex>
                        </motion.div>
                        
                        <motion.div
                        style={{
                            height: showTypeMenu ? 'fit-content': 0,
                        }}
                        animate={showTypeMenu ? 'open' : 'close'}
                        variants={variants}>
                            <Flex flexDir={'column'} mt={5}>
                                {typesArr.map((type) => <motion.div>
                                    {category === type ? 
                                    <Flex gap={10} mb={2} alignItems={'center'} >
                                        <Text cursor={'pointer'}>{type}</Text>
                                        <SmallCloseIcon cursor={'pointer'} onClick={() => setCategoryFilter('')}/>
                                    </Flex>
                                    :
                                    <Text mb={2} cursor={'pointer'} onClick={(e) => {
                                        handleFilterChange(e)
                                        }}>{type}</Text>}
                                </motion.div>)}
                            </Flex>
                       </motion.div>
                    </Flex>
            </Stack>
        </motion.div>
    )
}

export default CookBookNav