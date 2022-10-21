import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { Visit } from "./Visit";

export const VisitsTable = (): JSX.Element => {
  return (
    <Table
      bg="white"
      variant="simple"
      size="md"
      borderRadius="4px 4px 0 0"
      overflow="hidden"
    >
      <Thead h="48px" bg="purple.500">
        <Tr>
          <Th color="white">Data</Th>
          <Th color="white">Typ wizyty</Th>
          <Th color="white">Godzina</Th>
          <Th color="white">Kwota</Th>
          <Th color="white">Fizjoterapeuta</Th>
          <Th color="white">Menu</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Visit />
        <Visit />
        <Visit />
        <Visit />
        <Visit />
        <Visit />
        <Visit />
        <Visit />
      </Tbody>
    </Table>
  );
};
