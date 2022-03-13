import React, {useState} from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import toSignupLight from '../Images/toSignupLight.png'
import toSignupDark from '../Images/toSignupDark.png'
import toLoginLight from '../Images/toLoginLight.png'
import toLoginDark from '../Images/toLoginDark.png'
import wood from '../Images/wood.png'

function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true);
    const [isShown, setIsShown] = useState(false)


    return (
        <div>
            {showLogin ? (
                <div>
                    <LoginForm onLogin={onLogin}/>
                    <div id='tog-login-signup'
                     onClick={() => setShowLogin(false)}>
                       {isShown ? 
                       <img id='to-login-signup' 
                       onMouseEnter={()=> setIsShown(true)}
                       onMouseLeave={()=> setIsShown(false)}
                       src={toSignupLight}/>
                       :
                       <img id='to-login-signup' 
                        onMouseEnter={()=> setIsShown(true)}
                        onMouseLeave={()=> setIsShown(false)}
                        src={toSignupDark}/>}
                    </div>
                </div>
            ) : (
                <div>
                    <SignupForm onLogin={onLogin}/>
                    <div id='tog-login-signup' onClick={() => setShowLogin(true)}>
                    {isShown ? 
                       <img id='to-login-signup' 
                       onMouseEnter={()=> setIsShown(true)}
                       onMouseLeave={()=> setIsShown(false)}
                       src={toLoginLight}/>
                       :
                       <img id='to-login-signup' 
                        onMouseEnter={()=> setIsShown(true)}
                        onMouseLeave={()=> setIsShown(false)}
                        src={toLoginDark}/>}
                    </div>
                </div> 
            )}
        <img id='login-signup-background' src={wood} />
        </div>
    )
}

export default Login