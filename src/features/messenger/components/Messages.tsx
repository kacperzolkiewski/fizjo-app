import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { UserMessagesQuery } from "@/features/messenger/api/graphql";
import { Message } from "@/features/messenger/components/Message";

interface MessagesProps {
  messages: UserMessagesQuery["messages"];
  createdBy?: string;
}

export const Messages = ({
  messages,
  createdBy,
}: MessagesProps): JSX.Element => {
  const messagesEndRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Flex p="20px" pb="50px" overflow="scroll" flexDir="column">
      {messages.map((message) => {
        return (
          <Message
            key={message.id}
            message={message}
            me={message.created_by === createdBy}
          />
        );
      })}
      <Flex ref={messagesEndRef} />
    </Flex>
  );
};
