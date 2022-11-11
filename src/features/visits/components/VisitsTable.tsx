import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { Visit } from "@/features/visits/components/Visit";
import { usePatientVisitsQuery } from "@/features/visits/api/graphql";
import { usePatient } from "@/utilities/usePatient";

export const VisitsTable = (): JSX.Element => {
  const patient = usePatient();
  const { data } = usePatientVisitsQuery({
    variables: { id: patient.id },
  });
  const visits = data?.visits ?? [];

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
        {visits.map((visit) => (
          <Visit key={visit.id} visit={visit} />
        ))}
      </Tbody>
    </Table>
  );
};
