import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { ReserveVisitButton } from "./ReserveVisitButton";

interface CalendarItemProps {
  date: string;
}

export const CalendarItem = ({ date }: CalendarItemProps) => {
  return (
    <>
      <Box mt="10px">
        <Text>{date}</Text>
      </Box>
      <HStack overflowX="scroll" h="60px" borderBottom="1px solid lightgray">
        <ReserveVisitButton date={date} hour="11:00" />
        <ReserveVisitButton date={date} hour="11:00" />
        <ReserveVisitButton date={date} hour="11:00" />
        <ReserveVisitButton date={date} hour="11:00" />
        <ReserveVisitButton date={date} hour="11:00" />
        <ReserveVisitButton date={date} hour="11:00" />
        <ReserveVisitButton date={date} hour="11:00" />
        <ReserveVisitButton date={date} hour="11:00" />
        <ReserveVisitButton date={date} hour="11:00" />
      </HStack>
    </>
  );
};
