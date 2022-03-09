import React, {useState} from 'react'

function LoginForm({onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
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
        <button id='login-form-submit' type="submit">Login</button>
      
        <div className="errors">
            {errors.map((err) => (
            <p key={err}>{err}</p>
            ))}
        </div>
    </form>
  );
}

export default LoginForm