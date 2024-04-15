"use client";

import { Flex, Grid, GridItem, useTheme } from "@chakra-ui/react";
import Logo from "./components/logo";

export default function Home() {
  const theme = useTheme();
  const maxWidth = theme.breakpoints.xl;
  return (
    <Grid
      bgColor="black"
      height="100%"
      templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      gap={4}
      p={4}
      mx="auto"
      maxWidth={maxWidth}
    >
      <GridItem colSpan={{ base: 1, md: 2 }} bgColor="teal">
        <Flex flexDir="row" gap={2}>
          <Logo />
        </Flex>
      </GridItem>
      <GridItem bgColor="blue">1</GridItem>
      <GridItem bgColor="green">2</GridItem>
    </Grid>
  );
}
