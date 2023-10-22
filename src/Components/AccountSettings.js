import {Stack, Flex, Text, Button, Image, useMediaQuery, Link } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ArrowRightIcon } from '@chakra-ui/icons'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';

export default function AccountSettings({expandAccount, variants, user, setUser}){
    console.log(user)
    const navigate = useNavigate()
    function handleLogoutClick() {
        fetch("/api/v1/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
        navigate('/')
      }
    return (
          <Flex alignItems={'center'} flexDir={'column'} gap={5}>
            <Text>{user ? user.username : null}</Text>
            <Button fontSize={'12px'} onClick={() => handleLogoutClick()}>
              Signout
            </Button>
          </Flex>
    )
}