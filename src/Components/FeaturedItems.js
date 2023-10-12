import React, {useState, useEffect, useRef} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery} from '@chakra-ui/react'
import {motion} from 'framer-motion'
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import FeaturedItemDisplay from "./FeaturedItemDisplay";

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
            interval.current = setInterval(increment, 5000)
        }
        if (reset){
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

    return (
        <Stack maxW={'100vw'} style={{
            WebkitTapHighlightColor: 'transparent'
        }}>
                <Flex alignItems={'center'} w={'100vw'} justifyContent={'center'}> 
                        <motion.div
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: .9}}
                        style={{
                            zIndex: 1,
                            position: 'relative',
                            right: isMobile ? -25 : -55,
                            p: 2,
                            borderRadius: '50%',
                            ml: 5,
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        }}
                         >
                            <ChevronLeftIcon
                                WebkitTapHighlightColor={'transparent'}
                                boxSize={10}
                                cursor={'pointer'}
                                onClick={() => {
                                setReset(true)
                                reduce()
                            }}/>
                        </motion.div>
                    <Flex backgroundColor={'rgba(255, 255, 255, .3)'} borderRadius={'1em'}>
                        <FeaturedItemDisplay variants={variants} targetedItem={targetedItem} isMobile={isMobile} itemSwitch={itemSwitch} />
                    </Flex>
                     

                        <motion.div 
                        style={{
                         zIndex: 1,
                         position: 'relative', 
                         left: isMobile ? -25 : -55,
                         p: 2,
                         borderRadius: '50%',
                         mr: 5, 
                         backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        }}
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: .9}}>
                            <ChevronRightIcon 
                                WebkitTapHighlightColor={'transparent'}
                                boxSize={10}
                                cursor={'pointer'}
                                onClick={() => {
                                setReset(true)
                                increment()
                                }}/
                            >
                        </motion.div>
                    
                </Flex>
        </Stack>
    )
}

export default FeaturedItems