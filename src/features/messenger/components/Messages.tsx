import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { Message } from "./Message";

interface MessagesProps {
  messages: { message: string; userId: string }[];
}

export const Messages = ({ messages }: MessagesProps) => {
  const messagesEndRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Flex p="20px" pb="50px" flexDir="column" justifyContent="flex-end">
      <Message me={true} message="Nowa wiadomość" />
      <Message me={false} message="Nowa wiadomość" />
      <Message me={true} message="Nowa wiadomość" />
      <Message me={true} message="Nowa wiadomość" />
      <Message me={false} message="Nowa wiadomość" />
      <Message me={true} message="Nowa wiadomość" />
      <Message me={false} message="Nowa wiadomość" />
      <Message me={true} message="Nowa wiadomość" />
      <Message me={true} message="Nowa wiadomość" />
      <Message me={false} message="Nowa wiadomość" />
      <Message me={true} message="Nowa wiadomość" />
      <Message me={true} message="Nowa wiadomość" />
      <Message me={false} message="Nowa wiadomość" />
      <Message me={true} message="Nowa wiadomość" />
      <Message me={true} message="Nowa wiadomość" />
      <Flex ref={messagesEndRef} />
    </Flex>
  );
};
