import React, {useState, useEffect} from "react";
import {Stack, Flex, Text, Button, Image, useMediaQuery, Link, Heading } from '@chakra-ui/react'
import {motion} from 'framer-motion'

export default function Instrucitons(){
    return (
        <Stack w={'100vw'}>
            <Flex flexDir={'column'}>
                <Text>Pick a recipe to make from Recipes.</Text>
                <Text>Purchase ingredients from the Shop.</Text>
                <Text>Cook your dish in the Kitchen.</Text>
                <Text>Sell your dishes to earn back rupees.</Text>
            </Flex>
        </Stack>
    )
}