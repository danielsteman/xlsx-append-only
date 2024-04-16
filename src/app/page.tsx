"use client";

import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
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
          <Link href="products" _hover={{ color: "gray.400" }}>
            Products
          </Link>
          <Link href="solutions" _hover={{ color: "gray.400" }}>
            Solutions
          </Link>
          <Link href="pricing" _hover={{ color: "gray.400" }}>
            Pricing
          </Link>
          <Link href="company" _hover={{ color: "gray.400" }}>
            Company
          </Link>
        </Flex>
      </GridItem>
      <GridItem borderColor="blue" borderWidth={1} py={8} pr={8}>
        <Flex flexDir="column" gap={8}>
          <Heading fontSize="5xl" fontWeight={900}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Heading>
          <Text fontSize="xl" color="gray.400">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>
          <Flex flexDir="row" gap={8}>
            <Button p={6} px={10}>
              Get started
            </Button>
            <Button p={6} variant="borderDrop">
              See products
            </Button>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem borderColor="green" borderWidth={1}>
        2
      </GridItem>
    </Grid>
  );
}
