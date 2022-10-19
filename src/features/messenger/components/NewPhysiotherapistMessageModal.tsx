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
import { useRouter } from "next/router";
import { useState } from "react";
import { usePatientsQuery } from "../../../api/graphql";
import { User } from "../../home/components/User";

export const NewPhysiotherapistMessageModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { push } = useRouter();
  const [name, setName] = useState("");
  const { data } = usePatientsQuery();
  const patients = data?.patients.filter(
    (patient) => patient.name.includes(name) || patient.surname.includes(name)
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent alignSelf="center">
        <ModalHeader textAlign="center">Do kogo chcesz napisać?</ModalHeader>
        <ModalCloseButton />
        <ModalBody my={4}>
          <FormLabel>Nazwa pacjenta</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Daniel"
          />
          <VStack mt="10px">
            {patients?.map((patient) => (
              <User
                key={patient.id}
                name={patient.name}
                surname={patient.surname}
                w={"100%"}
                onClick={() => {
                  push(`/messenger/${patient.id}`);
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
