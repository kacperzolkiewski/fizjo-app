import { Button, useDisclosure, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { usePhysiotherapist } from "../../../utilities/usePhysiotherapist";
import { User } from "../../home/components/User";
import { usePhysiotherapistContactsQuery } from "../api/graphql";
import { NewPhysiotherapistMessageModal } from "./NewPhysiotherapistMessageModal";

export const PhysiotherapistSidebar = (): JSX.Element => {
  const { push } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id, name, surname } = usePhysiotherapist();
  const { data } = usePhysiotherapistContactsQuery({
    variables: {
      physiotherapist_id: id,
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
        {data?.patients.map((patient) => (
          <User
            w="330px"
            key={patient.id}
            name={patient.name}
            surname={patient.surname}
            onClick={() => {
              void push(`/messenger/${String(patient.id)}`);
            }}
          />
        ))}
      </VStack>
      <NewPhysiotherapistMessageModal onClose={onClose} isOpen={isOpen} />
    </VStack>
  );
};
