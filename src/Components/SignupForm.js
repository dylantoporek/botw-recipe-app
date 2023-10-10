import React, {useState} from 'react'
import {Stack, Flex, Text, Button, Input, FormControl } from '@chakra-ui/react'

function SignupForm({onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [bank, setBank] = useState(100)
    const [errors, setErrors] = useState([]);
    const [isShown, setIsShown] = useState(false)


  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        bank
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user))
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (

<Flex flexDir={'column'}>
<FormControl onSubmit={handleSubmit}>
    <Input
      id={'username'}
      type="text"
      autoComplete="off"
      placeholder='username'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <Input
     id={'password'}
      type="password"
      placeholder='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <Input
     id={'password-confirmation'}
      type="password"
      placeholder='password confirmation'
      value={passwordConfirmation}
      onChange={(e) => setPasswordConfirmation(e.target.value)}
    />
    <Button
       marginLeft={'10%'}
       minW={'80%'}
       onClick={(e) => handleSubmit(e)}
       mt={5}
       borderRadius={'5em'}
       style={{backgroundColor: 'orange'}}
       type="submit"
      >
       Signup
    </Button>
    <Flex>
        {errors.map((err) => (
        <Text key={err}>{err}</Text>
        ))}
    </Flex>
</FormControl>
</Flex>
  );
}

export default SignupForm