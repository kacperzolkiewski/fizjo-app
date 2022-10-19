import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { UserMessagesQuery } from "../api/graphql";
import { Message } from "./Message";

interface MessagesProps {
  messages: UserMessagesQuery["messages"];
  createdBy?: string;
}

export const Messages = ({ messages, createdBy }: MessagesProps) => {
  const messagesEndRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Flex p="20px" pb="50px" flexDir="column" justifyContent="flex-end">
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message.message}
          me={message.created_by === createdBy}
        />
      ))}
      <Flex ref={messagesEndRef} />
    </Flex>
  );
};
