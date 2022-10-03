import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { MessagesFeed } from "../components/MessagesFeed";
import { Sidebar } from "../components/Sidebar";

export const MessangerView = ({ children }: { children?: ReactNode }) => {
  return (
    <Flex h="100vh" pl="20px">
      <Sidebar />
      {children}
    </Flex>
  );
};
