import React, { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";

export const UIProvider = ({ children }: PropsWithChildren) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
