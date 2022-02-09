import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Flex,
    Heading,
    Stack,
    InputGroup,
    InputLeftAddon,
    Input,
    InputRightElement,
    IconButton,
    Button,
    Text,
    Link
  } from '@chakra-ui/react'
import { EmailIcon, ViewIcon, ViewOffIcon, LockIcon } from '@chakra-ui/icons'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

    return (
    <Flex
        flexDirection="column"
        justify="center"
        align="center"
    >
        <Heading color="blue.500" textAlign="center" fontSize="5xl">Nurturing the Seed</Heading>
        <Flex
        width="100%"
        height="90vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        >
        <Flex
            width="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Heading pb={4} fontSize="5xl">Log in</Heading>
            <Stack as="form" onSubmit={(e) => {
              e.preventDefault();
            
              const userInfo = {
                email,
                password,
              };
            
              axios
                .post("http://localhost:5000/api/login", userInfo)
                .then(res => {
                  res.data.email ? navigate("/dashboard") : alert("Please enter a valid login.")
                })
                .catch(err => {
                  console.error(err);
                });
            }} spacing={4} minWidth="60%" maxWidth="80%">
            <InputGroup size="lg">
                <InputLeftAddon>
                    <EmailIcon name="email" />
                </InputLeftAddon>
                <Input type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </InputGroup>
            <InputGroup size="lg">
                <InputLeftAddon>
                    <LockIcon name="lock" />
                </InputLeftAddon>
                <Input type={showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <InputRightElement>
                <IconButton onClick={() => setShowPassword(!showPassword)} aria-label="View Password Toggle" icon={showPassword ? <ViewOffIcon /> : <ViewIcon />} variant="ghost" size="md" />
                </InputRightElement>
            </InputGroup>
            <Button type="submit" variant="solid" size="lg" colorScheme="blue">
                Log in
            </Button>
            <Text textAlign="center">Don't have an account? <a href="/" style={{fontWeight: "bold"}}>Sign up</a></Text>
            <Link textAlign="center" fontWeight="bold" _hover="none">Forgot your password?</Link>
            </Stack>
        </Flex>
        </Flex>
    </Flex>
    );
  }

export default Login;