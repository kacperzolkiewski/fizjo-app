import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export const SignOutModal = ({
  isOpen,
  onClose,
  onSignOut,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSignOut: () => void;
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Potwierdź wylogowanie</ModalHeader>
      <ModalCloseButton />
      <ModalBody my={4}>Czy na pewno chcesz się wylogować?</ModalBody>
      <ModalFooter>
        <Button mr={3} colorScheme="purple" onClick={onClose}>
          Anuluj
        </Button>
        <Button w={40} onClick={onSignOut}>
          Wyloguj się
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
