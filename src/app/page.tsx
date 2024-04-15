"use client";

import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text,
  useTheme,
} from "@chakra-ui/react";
import Logo from "./components/logo";

export default function Home() {
  const theme = useTheme();
  const maxWidth = theme.breakpoints.xl;
  return (
    <Grid
      height="100%"
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap={4}
      p={4}
      mx="auto"
      maxWidth={maxWidth}
    >
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <Flex flexDir="row" gap={8} align="center">
          <Flex flexDir="row" align="center" gap={2}>
            <Logo />
            <Heading size="md" fontWeight={900}>
              ingestify
            </Heading>
          </Flex>
          <Spacer />
          <Box>Products</Box>
          <Box>Solutions</Box>
          <Box>Pricing</Box>
          <Box>Company</Box>
        </Flex>
      </GridItem>
      <GridItem borderColor="blue" borderWidth={1} py={8} pr={8}>
        <Flex flexDir="column" gap={8}>
          <Heading fontWeight={900}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Heading>
          <Text fontSize="xl" color="gray.400">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>
          <Flex flexDir="row" gap={8}>
            <Button p={6}>Get started</Button>
            <Button
              p={6}
              variant="outline"
              color="gray.100"
              borderWidth={0.5}
              borderColor="gray.600"
              _hover={{ borderColor: "black" }}
            >
              See products
            </Button>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem bgColor="green">2</GridItem>
    </Grid>
  );
}
