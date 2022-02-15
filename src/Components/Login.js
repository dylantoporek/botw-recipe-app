import React, {useState} from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true);


    return (
        <div>
            {showLogin ? (
                <div>
                    <LoginForm onLogin={onLogin}/>
                    <button onClick={() => setShowLogin(false)}>Don't have an account? Sign up</button>
                </div>
            ) : (
                <div>
                    <SignupForm onLogin={onLogin}/>
                    <button onClick={() => setShowLogin(true)}>Already have an account? Login</button>
                </div> 
            )}
        </div>
    )
}

export default Login