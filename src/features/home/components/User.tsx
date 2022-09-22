import { Button, Flex, Text } from "@chakra-ui/react";
import AvatarImage from "../../../assets/awatar.png";
import Image from "next/image";
import React from "react";

interface UserProps {
  name: string;
  surname: string;
  image?: string;
}

export const User = ({ name, surname }: UserProps) => {
  return (
    <Button
      pl="20px"
      alignItems="center"
      w="330px"
      height="65px"
      variant="outline"
      justifyContent="flex-start"
    >
      <Image src={AvatarImage} width="50px" height="50px" />
      <Text fontSize="20px" pl="20px">
        {name} {surname}
      </Text>
    </Button>
  );
};
