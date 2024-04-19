"use client";

import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Spacer,
  Text,
  useBreakpointValue,
  useDisclosure,
  useTheme,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Logo from "./components/logo";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavigationContent = () => {
  return (
    <>
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
      <Divider orientation="vertical" height="25px" />
      <Link href="login">
        <Button variant="link" color="white">
          Login
        </Button>
      </Link>
      <Link href="signup">
        <Button
          variant="outline"
          color="white"
          _hover={{ bgColor: "primary.500", borderColor: "rgba(0,0,0,0)" }}
        >
          Sign up
        </Button>
      </Link>
    </>
  );
};

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dropDown = useBreakpointValue({ base: true, md: false }) ?? true;
  if (dropDown) {
    return (
      <>
        <IconButton
          onClick={onOpen}
          variant="ghost"
          p={0}
          size="md"
          icon={<HamburgerIcon />}
          aria-label={"menu"}
          fontSize="24px"
          color="white"
        ></IconButton>
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg="rgba(0,0,0,0.1)" blur="2px">
            <DrawerBody>
              <NavigationContent />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  } else {
    return <NavigationContent />;
  }
};

export default function Home() {
  const theme = useTheme();
  const maxWidth = theme.breakpoints.xl;
  const dropDown = useBreakpointValue({ base: true, md: false }) ?? true;
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
            <Heading size="md" fontWeight={1000}>
              ingestify
            </Heading>
          </Flex>
          <Spacer />
          <Navigation />
        </Flex>
      </GridItem>
      <GridItem py={8} pr={8}>
        <Flex flexDir="column" gap={8}>
          <Heading fontSize="5xl" fontWeight={800}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Heading>
          <Text fontSize="xl" color="gray.400">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Text>
          <Flex flexDir="row" gap={8}>
            <Link href="workspace">
              <Button p={6} px={10} colorScheme="primary">
                Get started
              </Button>
            </Link>
            <Button p={6} variant="borderDrop">
              See products
            </Button>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem borderColor="gray" borderWidth={1}>
        2
      </GridItem>
    </Grid>
  );
}
