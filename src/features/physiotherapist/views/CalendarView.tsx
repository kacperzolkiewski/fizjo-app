import { useCalendarDays } from "@/utilities/useCalendarIDays";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Flex, Heading, HStack, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const CalendarView = () => {
  const {
    query: { id },
  } = useRouter();

  const [startDay, setStartDay] = useState(0);
  const [endDay, setEndDay] = useState(7);
  const calendarDays = useCalendarDays(startDay, endDay, String(id));

  return (
    <Stack height="100vh" justifyContent="center" alignItems="center">
      <Flex
        height="80%"
        bg="white"
        w="70%"
        rounded={14}
        flexDir="column"
        alignItems="center"
        p="20px"
        boxShadow="8px 8px 24px 0px rgba(66, 68, 90, 0.2)"
      >
        <Heading>Umów wizytę</Heading>
        <Flex mt="30px" mb="20px" w="100%" justifyContent="space-between">
          <ArrowLeftIcon
            boxSize="20px"
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              setStartDay((prev) => prev - 7);
              setEndDay((prev) => prev - 7);
            }}
          />
          <ArrowRightIcon
            boxSize="20px"
            _hover={{ cursor: "pointer" }}
            onClick={() => {
              setStartDay((prev) => prev + 7);
              setEndDay((prev) => prev + 7);
            }}
          />
        </Flex>
        <HStack
          alignItems="flex-start"
          h="100%"
          w="100%"
          justifyContent="space-around"
        >
          {calendarDays}
        </HStack>
      </Flex>
    </Stack>
  );
};
