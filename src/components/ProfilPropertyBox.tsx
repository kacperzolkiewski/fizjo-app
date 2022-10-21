import { PhoneIcon } from "@chakra-ui/icons";
import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface ProfilPropertyBoxProps {
  label: string;
  propertyValue?: string | null;
  onClick?: () => void;
}

export const ProfilPropertyBox = ({
  label,
  propertyValue,
  onClick,
}: ProfilPropertyBoxProps): JSX.Element => {
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
        {label}
      </Heading>
      <PhoneIcon position="absolute" right={5} />
      <Text color="gray">{propertyValue ?? "..."}</Text>
    </Button>
  );
};
