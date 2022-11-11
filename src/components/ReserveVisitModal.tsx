import { VisitTypesQuery } from "@/features/physiotherapist/api/graphql";
import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { padStart } from "lodash";
import React, { useEffect, useState } from "react";

export const ReserveVisitModal = ({
  visitTypes,
  date,
  isOpen,
  onClose,
  onReserveVisit,
}: {
  visitTypes: VisitTypesQuery["visit_types"];
  date: Date;
  isOpen: boolean;
  onClose: () => void;
  onReserveVisit: (visitTypeId: string | null) => void;
}): JSX.Element => {
  const [visitTypeId, setVisitTypeId] = useState<string | null>(null);

  useEffect(() => {
    if (visitTypes.length !== 0) {
      setVisitTypeId(visitTypes[0].id);
    }
  }, [visitTypes]);

  const hour = `${padStart(String(date.getHours()), 2, "0")}:00`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="507px" p="32px" fontSize="18px" boxShadow="xl">
        <ModalCloseButton _hover={{ bg: "none" }} m="20px" />

        <ModalHeader textAlign="center">
          <Text>{format(date, "dd.MM.yyyy")}</Text>
          <Text>Godzina: {hour}</Text>
        </ModalHeader>
        <ModalBody px="0">
          {visitTypes.length !== 0 ? (
            <Select
              fontSize="18px"
              textAlign="center"
              onChange={(e) => setVisitTypeId(e.target.value)}
            >
              {visitTypes.map((visitType) => (
                <option
                  key={visitType.id}
                  value={visitType.id}
                >{`${visitType.name} ${visitType.price}zł`}</option>
              ))}
            </Select>
          ) : (
            <Select textAlign="center" fontSize="18px">
              <option>Fizjoterapia</option>
            </Select>
          )}
          <Center mt={5}> Czy na pewno chcesz zarezerwować tę wizytę?</Center>
        </ModalBody>

        <ModalFooter justifyContent="space-between">
          <Button onClick={onClose} colorScheme="purple">
            Nie
          </Button>
          <Button
            onClick={() => {
              onReserveVisit(visitTypeId);
              onClose();
            }}
          >
            Tak
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
