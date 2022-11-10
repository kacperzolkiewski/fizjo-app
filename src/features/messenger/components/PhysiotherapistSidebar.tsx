import { Button, useDisclosure, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { usePhysiotherapist } from "@/utilities/usePhysiotherapist";
import { User } from "@/features/home/components/User";
import {
  PhysiotherapistContactsQuery,
  usePhysiotherapistContactsQuery,
} from "@/features/messenger/api/graphql";
import { NewPhysiotherapistMessageModal } from "@/features/messenger/components/NewPhysiotherapistMessageModal";
import { ArrayElement } from "@/utilities/types";
import { useNotification } from "@/features/messenger/hooks/useNotification";

interface UserNotificationWrapperProps {
  patient: ArrayElement<PhysiotherapistContactsQuery["patients"]>;
  physioId?: string;
}

const UserNotificationWrapper = ({
  patient,
  physioId,
}: UserNotificationWrapperProps) => {
  const { push } = useRouter();
  const isNotification = useNotification({
    patientId: patient.id,
    physiotherapistId: physioId,
    userId: physioId,
  });

  return (
    <User
      w="330px"
      name={patient.name}
      surname={patient.surname}
      onClick={() => {
        void push(`/messenger/${String(patient.id)}`);
      }}
      isNotification={isNotification}
    />
  );
};

export const PhysiotherapistSidebar = (): JSX.Element => {
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
          <UserNotificationWrapper
            key={patient.id}
            patient={patient}
            physioId={id}
          />
        ))}
      </VStack>
      <NewPhysiotherapistMessageModal onClose={onClose} isOpen={isOpen} />
    </VStack>
  );
};
