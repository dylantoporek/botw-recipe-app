import React, {useState} from 'react'
import {Stack, Flex, Text, Button, Input, FormControl } from '@chakra-ui/react'


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
          autoComplete="current-password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          onClick={(e) => handleSubmit(e)}
          marginLeft={'10%'}
          minW={'80%'}
          mt={5}
          borderRadius={'5em'}
          style={{backgroundColor: 'orange'}}
          type="submit"
          >
           Login
        </Button>
        <Flex>
            {errors.map((err) => (
            <Text key={err}>{err}</Text>
            ))}
        </Flex>
    </FormControl>
    </Flex>

  )
}

export default LoginForm