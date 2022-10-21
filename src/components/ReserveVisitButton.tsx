import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { ReserveVisitModal } from "@/components/ReserveVisitModal";

interface ReserveVisitButtonProps {
  hour: string;
  date: string;
}

export const ReserveVisitButton = ({
  hour,
  date,
}: ReserveVisitButtonProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button
        mr="4px"
        mt="4px"
        colorScheme="purple"
        w="70px"
        h="35px"
        onClick={onOpen}
      >
        {hour}
      </Button>
      <ReserveVisitModal
        hour={hour}
        date={date}
        isOpen={isOpen}
        onClose={onClose}
        onReserveVisit={() => {}}
      />
    </Box>
  );
};
