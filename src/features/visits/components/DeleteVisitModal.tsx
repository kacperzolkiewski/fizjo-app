import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

export const VisitDeleteModal = ({
  isOpen,
  onClose,
  onDeleteVisit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onDeleteVisit: () => void;
}): JSX.Element => (
  <Modal isOpen={isOpen} onClose={onClose} isCentered>
    <ModalOverlay />
    <ModalContent
      maxW="507px"
      h="293px"
      p="32px"
      fontSize="18px"
      boxShadow="xl"
    >
      <ModalCloseButton _hover={{ bg: "none" }} m="20px" />

      <ModalBody pt="70px" px="0">
        <Center> Czy na pewno chcesz odwołać tę wizytę?</Center>
      </ModalBody>

      <ModalFooter justifyContent="space-between">
        <Button onClick={onClose} colorScheme="purple">
          Nie
        </Button>
        <Button onClick={onDeleteVisit}>Tak</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
