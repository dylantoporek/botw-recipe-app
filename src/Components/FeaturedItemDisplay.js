import React, {useState, useEffect, useRef} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery} from '@chakra-ui/react'
import {motion} from 'framer-motion'

export default function FeaturedItemDisplay({targetedItem, variants, itemSwitch, isMobile}){
    return (
        <motion.div
            style={{
                WebkitTapHighlightColor: 'transparent',
            }} 
            animate={itemSwitch ? 'open' : 'close'}
            variants={variants}>
                <Flex justifyContent={'center'} h={'60vh'}>
                    <Flex
                    p={5} 
                    flexDir={'column'} 
                    minH={'40vh'} 
                    w={isMobile ? '80vw' : '60vw'}
                    gap={5} 
                    alignItems={'center'} 
                    justifyContent={'center'}
                    WebkitTapHighlightColor={'transparent'}>
                        <Image  w={'150px'} h={'150px'} src={targetedItem?.image}/>
                        <Text mb={2}>{targetedItem?.name}</Text>
                        <Text maxW={isMobile ? '100%':'60%'}>{targetedItem?.description}</Text>
                    </Flex>
                </Flex>
        </motion.div>
    )
}