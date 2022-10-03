import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { User } from "../../home/components/User";

export const Sidebar = () => {
  return (
    <VStack spacing="40px" pt="20px">
      <VStack>
        <User name="Kacper" surname="Zolkiewski" />
        <Button w="100%" colorScheme="purple">
          Nowa wiadomość
        </Button>
      </VStack>
      <VStack overflowY="scroll" spacing="8px">
        <User name="kacper" surname="zolkiewski" />
        <User name="kacper" surname="zolkiewski" />
        <User name="kacper" surname="zolkiewski" />
        <User name="kacper" surname="zolkiewski" />
        <User name="kacper" surname="zolkiewski" />
        <User name="kacper" surname="zolkiewski" />
        <User name="kacper" surname="zolkiewski" />
        <User name="kacper" surname="zolkiewski" />
        <User name="kacper" surname="zolkiewski" />
      </VStack>
    </VStack>
  );
};
