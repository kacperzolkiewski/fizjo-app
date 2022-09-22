import { Flex, Heading, Text } from "@chakra-ui/react";
import AvatarImage from "../../../assets/awatar.png";
import Image from "next/image";
import React from "react";

interface ProfileProps {
  image?: string;
  name: string;
  surname: string;
  email: string;
}

export const Profile = ({ name, surname, email }: ProfileProps) => {
  return (
    <Flex flexDir="column" alignItems="center" m="70px">
      <Image src={AvatarImage} width="180px" height="180px" />
      <Flex flexDir="column" mt="15px">
        <Heading fontSize="20px">
          {name} {surname}
        </Heading>
        <Text>{email}</Text>
      </Flex>
    </Flex>
  );
};
