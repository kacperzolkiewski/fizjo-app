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
import { Message } from "./Message";

export const MessagesFeed = () => {
  return (
    <Flex pl="20px" w="100%" flexDir="column" justifyContent="space-between">
      <HStack border="1px solid #EDF2F7" height="132px" w="100%" pl="50px">
        <Image src={AvatarImage} width="90px" height="90px" />
        <Heading>Wiktoria Zaczyk</Heading>
      </HStack>
      <Flex flexDir="column" w="100%" maxH="100%" pb="20px" pr="20px">
        <Flex
          h="100%"
          p="20px"
          flexDir="column"
          borderLeft="1px solid #EDF2F7"
          justifyContent="flex-end"
        >
          <Message me={true} message="Nowa wiadomość" />
          <Message me={false} message="Nowa wiadomość" />
          <Message me={true} message="Nowa wiadomość" />
          <Message me={true} message="Nowa wiadomość" />
          <Message me={false} message="Nowa wiadomość" />
          <Message me={true} message="Nowa wiadomość" />
          <Message me={false} message="Nowa wiadomość" />
          <Message me={true} message="Nowa wiadomość" />
        </Flex>
        <InputGroup>
          <Input placeholder="Aa..." />
          <InputRightElement>
            <ArrowForwardIcon w="50px" h="30px" />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
};
