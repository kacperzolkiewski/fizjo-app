import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { CalendarItem } from "@/components/CalendarItem";

export const Calendar = (): JSX.Element => {
  return (
    <Box h="100%" overflowY="scroll">
      <Heading textAlign="center" fontSize="20px">
        Umów wizytę
      </Heading>
      <CalendarItem date="Poniedziałek, 10 Października" />
      <CalendarItem date="Poniedziałek, 10 Października" />
      <CalendarItem date="Poniedziałek, 10 Października" />
      <CalendarItem date="Poniedziałek, 10 Października" />
      <CalendarItem date="Poniedziałek, 10 Października" />
    </Box>
  );
};
