import React, {useState} from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import greyBackground from '../Images/greyBackground.png'
import {Stack, Flex, Text, Button } from '@chakra-ui/react'

function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true);
    const [isShown, setIsShown] = useState(false)


    return (
        <Stack maxW={'100vw'} minH={'100vh'} backgroundColor={'#F0F6F6'}>
            {showLogin ? 
            <Flex 
             flexDir={'column'} 
             maxW={'500px'} 
             alignSelf={'center'} 
             alignItems={'center'} 
             p={10}>
                <Flex flexDir={'column'} gap={2} mb={10}>
                    <Text>Welcome to the Breath of the Wild Cooking App</Text>
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
                    maxW={'500px'} 
                    alignSelf={'center'} 
                    alignItems={'center'} 
                    p={10}>
                     <Flex flexDir={'column'} gap={2} mb={10}>
                        <Text>Welcome to the Breath of the Wild Cooking App</Text>
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