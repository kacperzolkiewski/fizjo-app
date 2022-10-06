import { Button, Flex, List, ListItem, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const PhysiotherapistVisit = () => {
  return (
    <Flex bg="white" p="20px" minW="350px" rounded={14} flexDir="column">
      <VStack
        w="100%"
        borderBottom="1px solid lightgray"
        alignItems="flex-start"
        pb="10px"
      >
        <Text fontSize="22px">Pacjent: Kacper Żółkiewski</Text>
        <Text fontSize="20px">Dzisiaj, 22.07.2022</Text>
        <Text fontSize="18px">Godzina: 10:00</Text>
      </VStack>
      <List w="100%" fontSize="18px" pt="10px" spacing={2}>
        <ListItem>Typ wizyty: Fizjoterapia (150zł)</ListItem>
        <ListItem>Pesel: 123432123321</ListItem>
        <ListItem>Telefon: 8754234192</ListItem>
        <ListItem>Email: kacperzolkiewski@gmail.com</ListItem>
        <ListItem>Wiek: 22</ListItem>
      </List>
      <Button mt="20px" w="100%" colorScheme="purple">
        Odwołaj wizytę
      </Button>
    </Flex>
  );
};
