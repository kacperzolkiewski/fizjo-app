import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { VisitsTable } from "../components/VisitsTable";

export const VisitsView = () => {
  return (
    <Stack minH="100vh" p="20px" spacing="30px">
      <Heading fontSize="50px">Wizyty</Heading>
      <VisitsTable />
    </Stack>
  );
};
