import { PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface ProfilPropertyBoxProps {
  property: string;
  propertyValue: string;
  onClick?: () => void;
}

export const ProfilPropertyBox = ({
  property,
  propertyValue,
  onClick,
}: ProfilPropertyBoxProps) => {
  return (
    <Button
      display="flex"
      flexDir="column"
      alignItems="flex-start"
      position="relative"
      gap={2}
      w="300px"
      h="80px"
      bg="white"
      _hover={{ bg: "#F2F3F8" }}
      rounded={8}
      p="10px"
      boxShadow="8px 8px 24px 0px rgba(66, 68, 90, 0.2)"
      onClick={onClick}
    >
      <Heading fontSize="18px" color="purple.500">
        {property}
      </Heading>
      <PhoneIcon position="absolute" right={5} />
      <Text color="gray">{propertyValue}</Text>
    </Button>
  );
};
