import { Td, Tr } from "@chakra-ui/react";
import React from "react";
import { VisitMenu } from "@/features/visits/components/VisitsMenu";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface VisitProps {
  startTimestamp?: string;
  endTimestamp?: string;
  visitType?: string;
  price?: string;
  physioterapists?: string;
  id?: string;
}

export const Visit = (): JSX.Element => {
  return (
    <Tr h="48px">
      <Td>22.09.2022</Td>
      <Td>Konsultacja fizjoterapeutyczna</Td>
      <Td>18:00-19:00</Td>
      <Td>130 zł</Td>
      <Td>Wojtek Wojtek</Td>
      <Td>
        <VisitMenu />
      </Td>
    </Tr>
  );
};
