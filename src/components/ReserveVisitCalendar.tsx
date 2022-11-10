import { Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { createCalendarItems } from "@/utilities/createCalendarItems";

interface ReserveVisitCalendarProps {
  id?: string;
}

export const ReserveVisitCalendar = ({
  id,
}: ReserveVisitCalendarProps): JSX.Element => {
  const { push } = useRouter();

  return (
    <>
      <Heading
        width="150px"
        m="10px auto"
        _hover={{ textDecoration: "underline", cursor: "pointer" }}
        fontSize="20px"
        onClick={() => {
          void push(`physiotherapist/${id}/calendar`);
        }}
      >
        Umów wizytę
      </Heading>
      <HStack h="100%" w="100%" justifyContent="space-around">
        {createCalendarItems(0, 5)}
      </HStack>
    </>
  );
};
