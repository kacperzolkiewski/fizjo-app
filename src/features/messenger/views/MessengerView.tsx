import { Flex } from "@chakra-ui/react";
import React from "react";
import { MessagesFeed } from "../components/MessagesFeed";
import { Sidebar } from "../components/Sidebar";

export const MessengerView = () => {
  return (
    <Flex minHeight="100vh" pl="20px">
      <Sidebar />
      <MessagesFeed />
    </Flex>
  );
};
