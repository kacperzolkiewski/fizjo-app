import { Button, useDisclosure, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { usePatient } from "@/utilities/usePatient";
import { User } from "@/features/home/components/User";
import { usePatientContactsQuery } from "@/features/messenger/api/graphql";
import { NewPatientMessageModal } from "@/features/messenger/components/NewPatientMessageModal";

export const PatientSidebar = (): JSX.Element => {
  const { push } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id, name, surname } = usePatient();
  const { data } = usePatientContactsQuery({
    variables: {
      patient_id: id,
    },
  });

  return (
    <VStack spacing="40px" pt="20px">
      <VStack>
        <User w="330px" name={name} surname={surname} />
        <Button w="100%" colorScheme="purple" onClick={onOpen}>
          Nowa wiadomość
        </Button>
      </VStack>
      <VStack overflowY="scroll" spacing="8px">
        {data?.physiotherapists.map((physio) => (
          <User
            w="330px"
            key={physio.id}
            name={physio.name}
            surname={physio.surname}
            onClick={() => {
              void push(`/messenger/${String(physio.id)}`);
            }}
          />
        ))}
      </VStack>
      <NewPatientMessageModal onClose={onClose} isOpen={isOpen} />
    </VStack>
  );
};
