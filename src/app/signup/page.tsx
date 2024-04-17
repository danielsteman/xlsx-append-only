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
  Center,
  FormHelperText,
} from "@chakra-ui/react";
import Logo from "../components/logo";
import { Link } from "@chakra-ui/next-js";
import React from "react";

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Center h="calc(100vh)">
      <VStack
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
        <form>
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
            <FormHelperText color="slate.300">
              At least 8 characters long
            </FormHelperText>
          </FormControl>
        </form>
      </VStack>
    </Center>
  );
};

export default SignUp;
