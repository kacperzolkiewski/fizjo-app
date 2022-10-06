import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";

export const MessengerView = ({ children }: { children?: ReactNode }) => {
  return (
    <Flex h="100vh" pl="20px">
      <Sidebar />
      {children}
    </Flex>
  );
};
