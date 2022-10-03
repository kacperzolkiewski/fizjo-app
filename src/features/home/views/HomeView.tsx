import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Physiotherapist } from "../components/Physiotherapist";

export const HomeView = () => {
  return (
    <Stack p="20px" spacing={8} alignItems="center">
      <Flex flexDir="column" alignItems="flex-start" w="100%">
        <Heading fontSize="50px">Fizjoterapeuci</Heading>
        <Box w="340px" mt="20px">
          <InputGroup bg="white">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input size="sm" placeholder="Kraków..." />
          </InputGroup>
        </Box>
      </Flex>
      <Physiotherapist />
      <Physiotherapist />
      <Physiotherapist />
    </Stack>
  );
};
