"use client";

import {
  Text,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import Logo from "../components/logo";
import { Link } from "@chakra-ui/next-js";
import React, { FormEvent } from "react";
import GoogleLoginButton from "../components/googleloginbutton";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Your form submission logic goes here
    console.log("Form submitted!");
  };

  return (
    <Box h="100%" display="flex" justifyContent="center" alignItems="center">
      <VStack
        maxW="30em"
        w="fit-content"
        gap={4}
        bgColor="slate.800"
        borderRadius={8}
        p={8}
        boxShadow="dark-lg"
      >
        <Logo />
        <Heading size="md">Create an account</Heading>
        <Text>
          Already have an account?{" "}
          <Link fontWeight={700} href="login">
            Log in
          </Link>
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired p={2}>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Name" borderColor={"slate.400"} />
            <FormLabel mt={4}>Email address</FormLabel>
            <Input type="email" placeholder="Email" borderColor={"slate.400"} />
            <FormLabel mt={4}>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="Password"
                borderColor={"slate.400"}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                  colorScheme="slate"
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button type="submit" colorScheme="primary" mt={8} w="100%">
              Sign up
            </Button>
            <GoogleLoginButton />
          </FormControl>
        </form>
      </VStack>
    </Box>
  );
};

export default SignUp;
