import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface MessageProps {
  me: boolean;
  message: string;
}

export const Message = ({ me, message }: MessageProps) => {
  return (
    <Flex
      bg={me ? "purple.500" : "teal.400"}
      mb="5px"
      color="#fff"
      w="350px"
      p="20px"
      borderRadius="20px"
      alignSelf={me ? "flex-end" : "flex-start"}
    >
      <Text>{message}</Text>
    </Flex>
  );
};