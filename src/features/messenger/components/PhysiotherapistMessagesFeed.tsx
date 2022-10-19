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
import React, { useEffect, useRef, useState } from "react";
import { usePatientQuery } from "../../../api/graphql";
import AvatarImage from "../../../assets/awatar.png";
import { usePhysiotherapist } from "../../../utilities/usePhysiotherapist";
import { useCreateMessageMutation, useUserMessagesQuery } from "../api/graphql";
import { Message } from "./Message";
import { Messages } from "./Messages";

export const PhysiotherapistMessagesFeed = ({
  patientId,
}: {
  patientId: string;
}) => {
  const [newMessage, setNewMessage] = useState("");
  const { data } = usePatientQuery({ variables: { id: patientId } });
  const [createNewMessage] = useCreateMessageMutation();
  const { id: physiotherapistId } = usePhysiotherapist();
  const patient = data?.patients_by_pk;
  const { data: messagesData, refetch } = useUserMessagesQuery({
    variables: {
      physiotherapist_id: physiotherapistId,
      patient_id: patientId,
    },
  });
  const messages = messagesData?.messages ?? [];
  const messagesEndRef: React.LegacyRef<HTMLDivElement> = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Flex pl="20px" w="100%" flexDir="column" justifyContent="space-between">
      <HStack borderBottom="1px solid #EDF2F7" bg="white" h="15%" pl="40px">
        <Image src={AvatarImage} width="90px" height="90px" />
        <Heading>{`${patient?.name} ${patient?.surname}`}</Heading>
      </HStack>
      <Flex
        flexDir="column"
        bg="white"
        h="85vh"
        overflow="auto"
        pb="20px"
        px="20px"
        position="relative"
      >
        <Messages messages={messages} createdBy={physiotherapistId} />
        <InputGroup position="sticky" bottom="5px" bg="white">
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
              onClick={() => {
                void createNewMessage({
                  variables: {
                    message: newMessage,
                    created_at: new Date(),
                    patient_id: patientId,
                    physiotherapist_id: physiotherapistId,
                    created_by: physiotherapistId,
                  },
                  onCompleted() {
                    refetch();
                    setNewMessage("");
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