import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { UsersList } from "../components/UsersList";

export const HomeView = () => {
  return (
    <>
      <Heading>Fizjoterapeuci</Heading>;
      <Box w="330px" ml="20px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input placeholder="name..." />
        </InputGroup>
        <UsersList />
      </Box>
    </>
  );
};
