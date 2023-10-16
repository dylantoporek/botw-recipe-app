import React, {useState} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery, Input, Checkbox, transition } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {ChevronDownIcon, TriangleDownIcon, SmallCloseIcon} from '@chakra-ui/icons'


function CookBookNav({name, category, typeFilter, setNameFilter, setCategoryFilter, setTypeFilter}){
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    const typesArr = ['Meat', 'Vegetarian', 'Soup', 'Seafood', 'Curry', 'Dessert']
    const [showTypeMenu, setShowTypeMenu] = useState(false)
    const [animationTrigger, setAnimationTrigger] = useState(false)
    function handleSearchByName(e){
        setNameFilter(e.target.value)
    }

    function handleFilterChange(e){
        console.log(category === e.target.innerText)
        if(category === e.target.innerText){
            setCategoryFilter('All')
        } else setCategoryFilter(e.target.innerText)
    }

    function handleTypeChange(e){
        setTypeFilter(e.target.value)
    }


    const variants = {
        open: { 
          opacity: 1,
          transition: {
            duration: .2,
            height: 30
          }
       },
        close: { 
          opacity: 1, 
          transition: {
            duration: .2,
            height: 0
          }
         }, 
    }

    const handleMouseEnter = () => {
        setShowTypeMenu(true);
        setTimeout(() => {
            setAnimationTrigger(true)
        }, 500)

      };
    
      const handleMouseLeave = () => {
        setAnimationTrigger(false)
        setTimeout(() =>{
            setShowTypeMenu(false)
        }, 500)

      };

     console.log(showTypeMenu)
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}> 
            <Stack
             minH={isMobile ? '40px':'90vh'}
             minW={isMobile ? '100vw' : '10vw'}
             top={isMobile ? 55 : 65}
             left={0}
             gap={isMobile ? 5:20}
             position={'fixed'}
             zIndex={1}
             p={5}
             backgroundColor={'white'}
             boxShadow={isMobile ? '0px 1px 2px 2px rgba(54,54,54,.2)' : null}>
                <Flex>
                    <Input
                     borderRadius={'1em'}
                     mt={6} 
                     placeholder='Search Recipes' 
                     type="text" 
                     value={name} 
                     onChange={handleSearchByName}
                     boxShadow={'0px 1px 2px 2px rgba(54,54,54,.2)'}
                     />
                </Flex>
                <Flex
                    onClick={!showTypeMenu ? handleMouseEnter : handleMouseLeave}
                    onMouseOver={isMobile ? null : handleMouseEnter}
                    onMouseLeave={isMobile ? null : handleMouseLeave}
                    flexDir={'column'}
                    p={1}>
                        <motion.div>
                            <Flex
                            borderBottom={'1px solid black'}
                            mr={isMobile ? 5:0} 
                            marginBottom={5}
                            alignItems={'center'}>
                                <Text>
                                    Filter Recipes
                                </Text>
                                <ChevronDownIcon/>
                            </Flex>
                        </motion.div>
                    { isMobile &&
                        <motion.div
                            style={{
                                borderRadius: '1em'
                            }}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}>
                            <Flex flexDir={'row'} flexWrap={'wrap'} gap={2} mt={0} justifyContent={'center'}>
                                {typesArr.map((type) => <motion.div
                                whileTap={{scale: .9}}
                                 style={{
                                    transition: 'height .2s ease-in-out',
                                    overflow: 'hidden',
                                 }}
                                 initial={false}
                                //  animate={animationTrigger ? 'open' : 'close'}
                                animate={{
                                    height: showTypeMenu ? 50 : 0,
                                    transition: 'height .2s ease-in-out',
                                }}
                                exit={{
                                    height: showTypeMenu ? 50 : 0,
                                    transition: 'height .2s ease-in-out',
                                }}
                                 variants={variants}
                                 >
                                    {category === type ? 
                                    <Flex p={2} mb={2} alignItems={'center'} >
                                        <Button onClick={(e) => {
                                        handleFilterChange(e)
                                        }} cursor={'pointer'}>
                                            {type}
                                            </Button>
                                        <SmallCloseIcon
                                            onClick={(e) =>  setCategoryFilter('All')}
                                            position={'relative'} 
                                            top={-4}
                                            right={2}
                                            backgroundColor={'#2B8091'}
                                            borderRadius={'50%'} 
                                            cursor={'pointer'} 
                                         />
                                        
                                    </Flex>
                                    :
                                    <Flex p={2}>
                                    <Button mb={2} cursor={'pointer'} onClick={(e) => {
                                        handleFilterChange(e)
                                        }}>
                                        {type}
                                    </Button>
                                    </Flex>
                                    }
                                </motion.div>
                                )}
                                
                            </Flex>
                       </motion.div>
                    }
                    {!isMobile &&
                        <motion.div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            maxWidth: '200px',
                            gap: 5 }}>
                            {typesArr.map((type) => <motion.div
                                whileHover={{scale: 1.1, x:0}}
                                whileTap={{scale: .9}}>
                            <Flex>   
                            {category === type ? 
                                <Flex mb={2}>
                                    <Button onClick={(e) => {
                                    handleFilterChange(e)
                                    }} cursor={'pointer'}>
                                        {type}
                                    </Button>
                                    <SmallCloseIcon
                                            onClick={() =>  setCategoryFilter('All')}
                                            position={'relative'} 
                                            top={-1}
                                            right={3}
                                            backgroundColor={'#2B8091'}
                                            borderRadius={'50%'} 
                                            cursor={'pointer'} 
                                         />
                                </Flex>
                            
                            :
                                <Button mb={2} cursor={'pointer'} onClick={(e) => {
                                    handleFilterChange(e)
                                    }}>
                                    {type}
                                </Button>
                            }
                                </Flex>
                            </motion.div>)}
                        </motion.div>
                    }
                </Flex>    
            </Stack>
        </motion.div>
    )
}

export default CookBookNav