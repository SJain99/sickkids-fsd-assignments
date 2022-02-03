import { Component } from "react";
import axios from "axios";
import { withRouter } from "../utils/withRouter";
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

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      showPassword: false
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlePasswordShowClick = e => {
      this.state.showPassword = !this.state.showPassword
  }

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    const userInfo = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/api/login", userInfo)
      .then(res => {
        res.data.email ? this.props.navigate("/dashboard") : alert("Please enter a valid login.")
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
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
            <Stack as="form" onSubmit={this.handleSubmit} spacing={4} minWidth="60%" maxWidth="80%">
            <InputGroup size="lg">
                <InputLeftAddon>
                    <EmailIcon name="email" />
                </InputLeftAddon>
                <Input type="text" name="email" placeholder="Email" onChange={this.handleInputChange} />
            </InputGroup>
            <InputGroup size="lg">
                <InputLeftAddon>
                    <LockIcon name="lock" />
                </InputLeftAddon>
                <Input type={this.state.showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={this.handleInputChange} />
                <InputRightElement>
                <IconButton onClick={this.handlePasswordShowClick} aria-label="View Password Toggle" icon={this.state.showPassword ? <ViewOffIcon /> : <ViewIcon />} variant="ghost" size="md" />
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
}

export default withRouter(Login);