"use client";

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { UploadFile } from "../upload-file";
import Logo from "../components/logo";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";

const Workspace = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Flex flexDir="row" p={2} px={4} bgColor={"slate.800"} align="center">
          <Logo />
          <Spacer />
          <IconButton
            onClick={onOpen}
            p={0}
            size="md"
            icon={<HamburgerIcon />}
            aria-label={"menu"}
            fontSize="24px"
            bgColor="slate.700"
            color="white"
          ></IconButton>
        </Flex>
        <UploadFile />
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="slate.800">
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody py={4}>
            <Flex flexDir="column" gap={4}>
              <Link href={"/"} fontWeight={600}>
                Your databases
              </Link>
              <Link href={"/"} fontWeight={600}>
                Settings
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Workspace;
