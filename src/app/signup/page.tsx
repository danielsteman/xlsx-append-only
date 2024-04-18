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
  HStack,
  Spacer,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import Logo from "../components/logo";
import { Link } from "@chakra-ui/next-js";
import React from "react";

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

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
            <HStack py={4} gap={4}>
              <Checkbox size="md" color="slate.300" defaultChecked>
                Remember me
              </Checkbox>
              <Spacer />
              <Link href={"reset-password"}>
                <Text size="xs" color="primary" fontWeight={600}>
                  Forgot password
                </Text>
              </Link>
            </HStack>
            <Button colorScheme="primary" mt={4} w="100%">
              Sign up
            </Button>
          </FormControl>
        </form>
      </VStack>
    </Box>
  );
};

export default SignUp;
