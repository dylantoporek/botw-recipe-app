import React, {useState} from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import greyBackground from '../Images/greyBackground.png'
import {Stack, Flex, Text, Button } from '@chakra-ui/react'

function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true);
    const [isShown, setIsShown] = useState(false)


    return (
        <Stack maxW={'100vw'} minH={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <Flex minH={'80vh'} borderRadius={'5em'} border={'1px solid black'}>
            {showLogin ? 
            <Flex 
             flexDir={'column'} 
             maxW={'350px'} 
             alignSelf={'center'} 
             alignItems={'center'} 
             p={10}>
                <Flex flexDir={'column'} gap={2} mb={10}>
                    <Text mb={5} textAlign={'center'}>Welcome</Text>
                    <Text>Please Login or Signup to continue to the applciation</Text>
                </Flex>
                <LoginForm onLogin={onLogin}/>
                <Flex gap={1} mt={10}>
                    <Text>
                        Don't have an account?
                    </Text>
                    <Text fontWeight={'bold'} color={'orange'} onClick={() => setShowLogin(false)}>
                        Signup
                    </Text>
                </Flex>
            </Flex>
                :
                <Flex 
                    flexDir={'column'} 
                    maxW={'350px'} 
                    alignSelf={'center'} 
                    alignItems={'center'} 
                    p={10}>
                     <Flex flexDir={'column'} gap={2} mb={10}>
                        <Text mb={5} textAlign={'center'}>Welcome</Text>
                        <Text>Please Login or Signup to continue to the applciation</Text>
                    </Flex>
                    <SignupForm onLogin={onLogin}/>
                    <Flex gap={1} mt={10}>
                        <Text>
                            Already have an account?
                        </Text>
                        <Text fontWeight={'bold'} color={'orange'} onClick={() => setShowLogin(true)}>
                            Login
                        </Text>
                    </Flex>
                </Flex>}
            </Flex>
            
        </Stack>

        // <div>
        //     {showLogin ? (
        //         <div>
        //             <LoginForm onLogin={onLogin}/>
        //                {isShown ? 
        //                <button id='login-signup' onClick={() => setShowLogin(false)} 
        //                style={{backgroundColor: "gainsboro"}}
        //                onMouseEnter={()=> setIsShown(true)}
        //                onMouseLeave={()=> setIsShown(false)}>
        //                    No account? Sign up.
        //                 </button>
        //                :
        //                <button id='login-signup' onClick={() => setShowLogin(false)} 
        //                onMouseEnter={()=> setIsShown(true)}
        //                onMouseLeave={()=> setIsShown(false)}>
        //                    No account? Sign up.
        //                 </button>}
        //         </div>
        //     ) : (
        //         <div>
        //             <SignupForm onLogin={onLogin}/>
        //             {isShown ? 
        //                <button id='login-signup' onClick={() => setShowLogin(true)}
        //                style={{backgroundColor: "gainsboro"}} 
        //                onMouseEnter={()=> setIsShown(true)}
        //                onMouseLeave={()=> setIsShown(false)}
        //                >Already have an account? Login.</button>
        //                :
        //                <button id='login-signup' onClick={() => setShowLogin(false)} 
        //                onMouseEnter={()=> setIsShown(true)}
        //                onMouseLeave={()=> setIsShown(false)}
        //             >Already have an account? Login.</button>}
        //         </div>
        //     )}
        //     <img id='login-signup-background' src={greyBackground} />
        // </div>
    )
}

export default Login