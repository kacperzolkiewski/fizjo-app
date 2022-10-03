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
  Text,
} from "@chakra-ui/react";

export const ReserveVisitModal = ({
  date,
  hour,
  isOpen,
  onClose,
  onReserveVisit,
}: {
  date: string;
  hour: string;
  isOpen: boolean;
  onClose: () => void;
  onReserveVisit: () => void;
}) => (
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

      <ModalHeader textAlign="center">
        <Text>{date}</Text>
        <Text>Godzina: {hour}</Text>
      </ModalHeader>
      <ModalBody px="0">
        <Center> Czy na pewno chcesz zarezerwować tę wizytę?</Center>
      </ModalBody>

      <ModalFooter justifyContent="space-between">
        <Button onClick={onClose} colorScheme="purple">
          Nie
        </Button>
        <Button onClick={onReserveVisit}>Tak</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
