import { Grid, GridItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4} p={4} mx="auto" maxW="48em">
      <GridItem bgColor="blue">1</GridItem>
      <GridItem bgColor="green">2</GridItem>
    </Grid>
  );
}
