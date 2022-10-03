import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import AvatarImage from "../../../assets/awatar.png";

interface OpinionProps {
  name: string;
  surname: string;
  opinion: string;
  date: string;
}

export const Opinion = ({ name, surname, opinion, date }: OpinionProps) => {
  return (
    <Box bg="#F5F5F5" p="20px" rounded="14" w="100%" position="relative">
      <Flex alignItems="center">
        <Image src={AvatarImage} width="60px" height="60px" />
        <Heading fontSize="20px" ml="15px">
          {`${name} ${surname}`}
        </Heading>
      </Flex>
      <Text ml="75px">{opinion}</Text>
      <Text position="absolute" right="20px" top="10px">
        {date}
      </Text>
    </Box>
  );
};
