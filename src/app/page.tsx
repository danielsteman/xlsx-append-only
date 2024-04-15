"use client";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
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
            <Heading size="lg" fontWeight={900}>
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
      <GridItem bgColor="blue">1</GridItem>
      <GridItem bgColor="green">2</GridItem>
    </Grid>
  );
}
