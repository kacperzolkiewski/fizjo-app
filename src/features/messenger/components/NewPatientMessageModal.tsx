import {
  Button,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { usePhysiotherapistsQuery } from "../../../api/graphql";
import { User } from "../../home/components/User";

export const NewPatientMessageModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element => {
  const { push } = useRouter();
  const [name, setName] = useState("");
  const { data } = usePhysiotherapistsQuery();
  const physiotherapists = data?.physiotherapists.filter(
    (physio) => physio.name.includes(name) || physio.surname.includes(name)
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent alignSelf="center">
        <ModalHeader textAlign="center">Do kogo chcesz napisać?</ModalHeader>
        <ModalCloseButton />
        <ModalBody my={4}>
          <FormLabel>Nazwa fizjoterapeuty</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Daniel"
          />
          <VStack mt="10px">
            {physiotherapists?.map((physio) => (
              <User
                key={physio.id}
                name={physio.name}
                surname={physio.surname}
                w={"100%"}
                onClick={() => {
                  void push(`/messenger/${String(physio.id)}`);
                  onClose();
                }}
              />
            ))}
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} colorScheme="purple" onClick={onClose}>
            Wróć
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
