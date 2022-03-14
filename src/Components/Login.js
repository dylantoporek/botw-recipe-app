import React, {useState} from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import greyBackground from '../Images/greyBackground.png'

function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true);
    const [isShown, setIsShown] = useState(false)


    return (
        <div>
            {showLogin ? (
                <div>
                    <LoginForm onLogin={onLogin}/>
                       {isShown ? 
                       <button id='login-signup' onClick={() => setShowLogin(false)} 
                       style={{backgroundColor: "gainsboro"}}
                       onMouseEnter={()=> setIsShown(true)}
                       onMouseLeave={()=> setIsShown(false)}>
                           No account? Sign up.
                        </button>
                       :
                       <button id='login-signup' onClick={() => setShowLogin(false)} 
                       onMouseEnter={()=> setIsShown(true)}
                       onMouseLeave={()=> setIsShown(false)}>
                           No account? Sign up.
                        </button>}
                    </div>
            ) : (
                <div>
                    <SignupForm onLogin={onLogin}/>
                    {isShown ? 
                       <button id='login-signup' onClick={() => setShowLogin(true)}
                       style={{backgroundColor: "gainsboro"}} 
                       onMouseEnter={()=> setIsShown(true)}
                       onMouseLeave={()=> setIsShown(false)}
                       >Already have an account? Login.</button>
                       :
                       <button id='login-signup' onClick={() => setShowLogin(false)} 
                       onMouseEnter={()=> setIsShown(true)}
                       onMouseLeave={()=> setIsShown(false)}
                       >Already have an account? Login.</button>}
                    </div>
            )}
        <img id='login-signup-background' src={greyBackground} />
        </div>
    )
}

export default Login