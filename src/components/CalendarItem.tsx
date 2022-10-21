import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { ReserveVisitButton } from "./ReserveVisitButton";

interface CalendarItemProps {
  date: string;
}

export const CalendarItem = ({ date }: CalendarItemProps): JSX.Element => {
  return (
    <>
      <Box mt="10px">
        <Text>{date}</Text>
      </Box>
      <HStack overflowX="scroll" h="70px" borderBottom="1px solid lightgray">
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
