import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import AvatarImage from "../../../assets/awatar.png";
import { Messages } from "./Messages";

export const MessagesFeed = ({ userId }: { userId: string }) => {
  return (
    <Flex pl="20px" w="100%" flexDir="column" justifyContent="space-between">
      <HStack borderBottom="1px solid #EDF2F7" bg="white" h="15%" pl="40px">
        <Image src={AvatarImage} width="90px" height="90px" />
        <Heading>Wiktoria Zaczyk</Heading>
      </HStack>
      <Flex
        flexDir="column"
        bg="white"
        h="85%"
        overflow="auto"
        pb="20px"
        px="20px"
        position="relative"
      >
        <Messages messages={[]} />
        <InputGroup position="sticky" bottom="5px" bg="white">
          <Input placeholder="Aa..." />
          <InputRightElement>
            <ArrowForwardIcon w="50px" h="30px" />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
};
