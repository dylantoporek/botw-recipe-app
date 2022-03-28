import React, {useState} from 'react'


function LoginForm({onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isShown, setIsShown] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/api/v1/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

    return (
    <form id='login-form'  onSubmit={handleSubmit}>
        <input
          type="text"
          id="username-input"
          autoComplete="off"
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password-input"
          autoComplete="current-password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isShown ? 
        <button id='login-form-submit'
        style={{backgroundColor: 'gainsboro'}}
        onMouseEnter={()=> setIsShown(true)}
        onMouseLeave={()=> setIsShown(false)}
          type="submit">
         Login
        </button>
        : 
        <button id='login-form-submit'
        onMouseEnter={()=> setIsShown(true)}
        onMouseLeave={()=> setIsShown(false)}
          type="submit">
         Login
        </button>}
        
      
        <div className="errors">
            {errors.map((err) => (
            <p key={err}>{err}</p>
            ))}
        </div>
    </form>
  );
}

export default LoginForm