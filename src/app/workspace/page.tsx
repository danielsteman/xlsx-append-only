"use client";

import {
  Box,
  Drawer,
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

const Workspace = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Flex flexDir="row" p={2} px={4} bgColor={"slate.100"} align="center">
          <Logo />
          <Spacer />
          <IconButton
            onClick={onOpen}
            p={0}
            size="md"
            icon={<HamburgerIcon />}
            aria-label={"menu"}
            fontSize="24px"
          ></IconButton>
        </Flex>
        <UploadFile />
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new account
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Workspace;
