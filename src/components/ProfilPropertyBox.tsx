import { Button, Heading, Text } from "@chakra-ui/react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ProfilPropertyBoxProps {
  label: string;
  propertyValue?: string | null;
  onClick?: () => void;
  icon: IconProp;
}

export const ProfilPropertyBox = ({
  label,
  propertyValue,
  onClick,
  icon,
}: ProfilPropertyBoxProps): JSX.Element => {
  const subValue =
    propertyValue != null
      ? propertyValue.length > 25
        ? propertyValue.substring(0, 25) + "..."
        : propertyValue
      : "...";
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
      {
        <FontAwesomeIcon
          style={{ position: "absolute", right: "15px" }}
          icon={icon}
          size="xl"
        />
      }
      <Text color="gray">{subValue}</Text>
    </Button>
  );
};
