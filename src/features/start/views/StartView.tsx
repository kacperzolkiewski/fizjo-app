import { Box, Button, Checkbox, Flex, Heading, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { LoginView } from "@/features/login";
import { RegisterView } from "@/features/register";

export const StartView = (): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false);
  const [isPatient, setIsPatient] = useState(true);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      flexDir="column"
      bg="purple.500"
    >
      <Flex
        bg="white"
        w="50%"
        h="700px"
        justifyContent="space-around"
        alignItems="center"
        boxShadow="1px 1px 19px -7px rgba(66, 68, 90, 1);"
        p="20px"
        borderRadius="10px"
      >
        <Flex
          flexDir="column"
          h="full"
          w="50%"
          justifyContent="center"
          position="relative"
          alignItems="center"
        >
          <Heading fontSize="70px" textAlign="center" fontFamily="heading">
            Witamy <br /> w <br />
            ZnanyFizjo!
          </Heading>
          {isClicked ? (
            <Stack spacing={5} direction="row" position="absolute" bottom="10%">
              <Checkbox
                size="lg"
                colorScheme="purple"
                isChecked={isPatient}
                onChange={() => setIsPatient(!isPatient)}
              >
                Pacjent
              </Checkbox>
              <Checkbox
                size="lg"
                colorScheme="purple"
                isChecked={!isPatient}
                onChange={() => setIsPatient(!isPatient)}
              >
                Fizjoterapeuta
              </Checkbox>
            </Stack>
          ) : null}
        </Flex>
        <Box w="30%">
          {isClicked ? <RegisterView isPatient={isPatient} /> : <LoginView />}
          <Button
            mt={4}
            colorScheme="purple"
            w="100%"
            onClick={() => setIsClicked(!isClicked)}
          >
            {isClicked ? "Zaloguj się" : "Zarejestruj się"}
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
