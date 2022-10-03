import { Button, Text } from "@chakra-ui/react";
import AvatarImage from "../../../assets/awatar.png";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

interface UserProps {
  name: string;
  surname: string;
  image?: string;
}

export const User = ({ name, surname }: UserProps) => {
  const { push } = useRouter();

  return (
    <Button
      bg="white"
      pl="20px"
      alignItems="center"
      w="330px"
      minH="65px"
      variant="outline"
      justifyContent="flex-start"
      onClick={() => {
        push(`/messenger/${1}`);
      }}
    >
      <Image src={AvatarImage} width="50px" height="50px" />
      <Text fontSize="20px" pl="20px">
        {name} {surname}
      </Text>
    </Button>
  );
};
