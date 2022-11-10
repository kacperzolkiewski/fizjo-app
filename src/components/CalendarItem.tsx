import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ReserveVisitButton } from "@/components/ReserveVisitButton";

interface CalendarItemProps {
  date: string;
}

export const CalendarItem = ({ date }: CalendarItemProps): JSX.Element => {
  return (
    <VStack overflowX="scroll" maxH="100%" w="120px">
      <Text borderBottom="1px solid lightgray">{date}</Text>
      <ReserveVisitButton date={date} hour="11:00" />
      <ReserveVisitButton date={date} hour="11:00" />
      <ReserveVisitButton date={date} hour="11:00" />
      <ReserveVisitButton date={date} hour="11:00" />
      <ReserveVisitButton date={date} hour="11:00" />
      <ReserveVisitButton date={date} hour="11:00" />
      <ReserveVisitButton date={date} hour="11:00" />
      <ReserveVisitButton date={date} hour="11:00" />
      <ReserveVisitButton date={date} hour="11:00" />
    </VStack>
  );
};
