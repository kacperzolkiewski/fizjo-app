import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface GridTextProps {
  label: string;
  value?: string;
}

export const GridText = ({ label, value }: GridTextProps) => {
  return (
    <Flex
      width="70%"
      p="10px"
      rounded={14}
      border="1px solid lightgray"
      alignItems="center"
      position="relative"
    >
      <Text fontSize="20px" fontWeight="bold" position="absolute" top={-8}>
        {label}
      </Text>
      <Text fontWeight="bold" fontSize="20px" w="100%" padding="5px">
        {value || "..."}
      </Text>
    </Flex>
  );
};
