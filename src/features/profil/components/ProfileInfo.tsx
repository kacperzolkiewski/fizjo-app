import { Box, Flex, Heading, Text, Textarea } from "@chakra-ui/react";
import React from "react";

export const ProfileInfo = () => {
  return (
    <Box ml="50px" w="500px" justifyContent="space-around">
      <Flex flexDir="column" padding="50px">
        <Heading fontSize="26px">O mnie</Heading>
        <Text>xxxxxxxxxxxxxxxxxxxxxxxxxxx</Text>
      </Flex>
      <Flex justifyContent="space-between" padding="50px">
        <Flex flexDir="column">
          <Text>name: kacper</Text>
          <Text>email: asdasdsa</Text>
        </Flex>
        <Flex flexDir="column">
          <Text>surname: zoliewski</Text>
          <Text>phone: 123321123</Text>
        </Flex>
      </Flex>
    </Box>
  );
};
