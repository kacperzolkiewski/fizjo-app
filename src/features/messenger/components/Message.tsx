import { Flex, Text } from "@chakra-ui/react";
import { formatDistanceToNow, parseISO } from "date-fns";
import { pl } from "date-fns/locale";
import React, { useEffect } from "react";
import {
  NotDisplayedMessagesDocument,
  UserMessagesQuery,
  useUpdateDisplayMessageMutation,
} from "@/features/messenger/api/graphql";
import { ArrayElement } from "@/utilities/types";

interface MessageProps {
  me: boolean;
  message: ArrayElement<UserMessagesQuery["messages"]>;
}

export const Message = ({ me, message }: MessageProps): JSX.Element => {
  const { id, created_at: createdAt, displayed } = message;
  const [updateDisplayMessage] = useUpdateDisplayMessageMutation();
  const createdAgo = formatDistanceToNow(parseISO(createdAt), {
    locale: pl,
    addSuffix: true,
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!me && !displayed) {
      void updateDisplayMessage({
        refetchQueries: [NotDisplayedMessagesDocument],
        variables: { id },
      });
    }
  }, []);

  return (
    <Flex
      bg={me ? "purple.500" : "gray.400"}
      mb="5px"
      color="#fff"
      w="350px"
      p="20px"
      borderRadius="20px"
      alignSelf={me ? "flex-end" : "flex-start"}
      position="relative"
    >
      <Text>{message.message}</Text>
      <Text fontSize={12} position="absolute" right={5} top={1}>
        {createdAgo}
      </Text>
    </Flex>
  );
};
