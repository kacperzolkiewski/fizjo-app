import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import AvatarImage from "@/assets/awatar.png";
import { usePatient } from "@/utilities/usePatient";
import { usePhysiotherapistQuery } from "@/features/physiotherapist/api/graphql";
import {
  useCreateMessageMutation,
  useUserMessagesQuery,
} from "@/features/messenger/api/graphql";
import { Messages } from "@/features/messenger/components/Messages";

export const PatientMessagesFeed = ({
  physiotherapistId,
}: {
  physiotherapistId: string;
}): JSX.Element => {
  const [newMessage, setNewMessage] = useState("");
  const { data } = usePhysiotherapistQuery({
    variables: { id: physiotherapistId },
  });
  const [createNewMessage] = useCreateMessageMutation();
  const { id: patientId } = usePatient();
  const physiotherapist = data?.physiotherapists_by_pk;
  const { data: messagesData, refetch } = useUserMessagesQuery({
    variables: {
      physiotherapist_id: physiotherapistId,
      patient_id: patientId,
    },
  });
  const messages = messagesData?.messages ?? [];

  return (
    <Flex
      pl="20px"
      w="100%"
      flexDir="column"
      justifyContent="space-between"
      position="relative"
    >
      <HStack borderBottom="1px solid #EDF2F7" bg="white" h="15%" pl="40px">
        <Image src={AvatarImage} width="90px" height="90px" />
        <Heading>{`${physiotherapist?.name ?? ""} ${
          physiotherapist?.surname ?? ""
        }`}</Heading>
      </HStack>
      <Flex
        flexDir="column"
        bg="white"
        height="85vh"
        pb="20px"
        justifyContent="flex-end"
        px="20px"
      >
        <Messages messages={messages} createdBy={patientId} />
        <InputGroup bg="white" position="sticky" bottom={5}>
          <Input
            placeholder="Aa..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <InputRightElement>
            <ArrowForwardIcon
              w="50px"
              h="30px"
              cursor="pointer"
              aria-label="send-button"
              onClick={() => {
                void createNewMessage({
                  variables: {
                    message: newMessage,
                    created_at: new Date(),
                    patient_id: patientId,
                    physiotherapist_id: physiotherapistId,
                    created_by: patientId,
                  },
                  onCompleted() {
                    void refetch();
                    setNewMessage("");
                  },
                  onError(error) {
                    console.log(error);
                  },
                });
              }}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
};
