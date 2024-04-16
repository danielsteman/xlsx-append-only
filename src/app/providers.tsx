"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black",
        color: "#ECECEC",
      },
    },
  },
  components: {
    Button: {
      variants: {
        borderDrop: {
          variant: "outline",
          color: "gray.100",
          borderWidth: 0.5,
          borderColor: "gray.600",
          _hover: { borderColor: "black" },
        },
      },
    },
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
