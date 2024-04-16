"use client";

import { Box, Button, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { UploadFile } from "../upload-file";
import Logo from "../components/logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHamburger } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { HamburgerIcon } from "@chakra-ui/icons";

const Workspace = () => {
  return (
    <Box>
      <Flex flexDir="row" p={2} px={4} bgColor={"slate.100"} align="center">
        <Logo />
        <Spacer />
        <IconButton
          p={0}
          size="md"
          icon={<HamburgerIcon />}
          aria-label={"menu"}
          fontSize="24px"
        ></IconButton>
      </Flex>
      <UploadFile />
    </Box>
  );
};

export default Workspace;
