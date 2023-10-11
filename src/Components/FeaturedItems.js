import React, {useState, useEffect, useRef} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'

function FeaturedItems({props}) {

    const filteredProps = props.filter((item) => {
        if (item.name !== null){
            return item
        }
    })
    const [itemSwitch, setItemSwitch] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [reset, setReset] = useState(false)
    var i = currentIndex;
    const stop = filteredProps.length - 1 ;
    const interval = useRef(null)
    
    const [isMobile] = useMediaQuery("(max-width: 768px)", {
        ssr: true,
        fallback: false,
    })
    useEffect(() => {

        if (!reset){
            console.log("running useEffect");
            interval.current = setInterval(increment, 5000)
        }
        if (reset){
            console.log('cleared')
            clearInterval(interval.current)

            setTimeout(() => {
                setReset(false)
            }, 500)
        }


    }, [reset]);

    function increment() {
        i = i + 1;
    
        if (i === stop) {
            i = 0;
        }
        setItemSwitch(false)
        setTimeout(() => {
            setCurrentIndex(i);
            setItemSwitch(true)
        }, 200)
    }

    function reduce() {
        if (i - 1 === -1) {
            i = stop;
        } else i = i - 1
        
        setItemSwitch(false)
        setTimeout(() => {
            setCurrentIndex(i);
            setItemSwitch(true)
        }, 200)
    }

    const variants = {
        open: { 
          opacity: 1, 
       },
        close: { 
          opacity: 0, 
         }, 
    }


    const targetedItem = filteredProps?.find(( item, i ) => {
        if (i === currentIndex){
            return item
        }
    })

    const itemDisplay = <motion.div 
            animate={itemSwitch ? 'open' : 'close'}
            variants={variants}>
                <Flex justifyContent={'center'} h={'70vh'}>
                    <Flex
                     p={5} 
                     flexDir={'column'} 
                     minH={'40vh'} 
                     w={isMobile ? '80vw' : '60vw'}
                     gap={5} 
                     alignItems={'center'} 
                     justifyContent={'center'}>
                        <Image w={'150px'} h={'150px'} src={targetedItem?.image}/>
                        <Text>{targetedItem?.name}</Text>
                        <Text>{targetedItem?.description}</Text>
                    </Flex>
                </Flex>
        </motion.div>

    return (
        <Stack maxW={'100vw'}>
                <Flex alignItems={'center'} w={'100vw'} justifyContent={'center'}> 
                    <motion.div 
                     whileHover={{scale: 1.1}}
                     whileTap={{scale: .9}}>
                        <Flex p={2} borderRadius={'50%'}>
                            <ArrowBackIcon 
                                cursor={'pointer'}
                                onClick={() => {
                                setReset(true)
                                reduce()
                            }}/>
                        </Flex>
                    </motion.div> 
                    
                    {itemDisplay}

                    <motion.div
                     whileHover={{scale: 1.1}}
                     whileTap={{scale: .9}}>
                        <Flex p={2} borderRadius={'50%'}>
                            <ArrowForwardIcon 
                                cursor={'pointer'}
                                onClick={() => {
                                setReset(true)
                                increment()
                                }}/
                            >
                        </Flex>
                        
                    </motion.div>
                    
                </Flex>
        </Stack>
    )
}

export default FeaturedItems