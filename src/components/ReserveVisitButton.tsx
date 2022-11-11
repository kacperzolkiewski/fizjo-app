import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { padStart } from "lodash";

interface ReserveVisitButtonProps {
  date: Date;
  isReserved: boolean;
  onClick: (date: Date) => void;
}

export const ReserveVisitButton = ({
  date,
  isReserved,
  onClick,
}: ReserveVisitButtonProps): JSX.Element => {
  const hour = `${padStart(String(date.getHours()), 2, "0")}:00`;

  return (
    <Box>
      <Button
        disabled={isReserved}
        mr="4px"
        mt="4px"
        colorScheme="purple"
        w="70px"
        h="35px"
        onClick={() => onClick(date)}
      >
        {hour}
      </Button>
    </Box>
  );
};
