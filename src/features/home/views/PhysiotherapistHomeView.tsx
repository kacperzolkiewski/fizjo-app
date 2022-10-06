import { Heading, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import { PhysiotherapistVisit } from "../components/PhysiotherapistVisit";

export const PhysiotherapistHomeView = () => {
  return (
    <Stack
      overflow="auto"
      p="20px"
      minH="100vh"
      spacing={150}
      alignItems="flex-start"
    >
      <Heading fontSize="40px">Zbliżające się wizyty</Heading>
      <HStack w="100%" overflow="auto" spacing={8} pb="20px">
        <PhysiotherapistVisit />
        <PhysiotherapistVisit />
        <PhysiotherapistVisit />
        <PhysiotherapistVisit />
        <PhysiotherapistVisit />
        <PhysiotherapistVisit />
        <PhysiotherapistVisit />
        <PhysiotherapistVisit />
      </HStack>
    </Stack>
  );
};
