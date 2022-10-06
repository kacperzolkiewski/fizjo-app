import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import AvatarImage from "../../../assets/awatar.png";
import Image from "next/image";
import React from "react";
import { GridText } from "../../../components/GridText";

interface PatientProfileProps {
  image?: string;
  name: string;
  surname: string;
  email: string;
}

export const PatientProfile = ({
  name,
  surname,
  email,
}: PatientProfileProps) => {
  return (
    <Flex h="100vh" p="20px" justifyContent="center" alignItems="center">
      <Box
        w="90%"
        h="90%"
        rounded={5}
        boxShadow="3px 1px 25px -12px rgba(66, 68, 90, 1)"
        overflow="hidden"
        padding="20px"
        bg="white"
      >
        <Flex
          flexDir="column"
          alignItems="center"
          padding="10px"
          borderBottom="1px solid lightgray"
          h="35%"
        >
          <Image src={AvatarImage} width="180px" height="180px" />
          <Flex flexDir="column" mt="15px">
            <Heading fontSize="20px" textAlign="center">
              {/* {name} {surname} */}
              Kacper Żółkieski
            </Heading>
            <Text textAlign="center">
              {/* {email} */}
              kacperzolkiewski@gmail.com
            </Text>
          </Flex>
        </Flex>
        <Grid
          padding="10px"
          w="100%"
          h="70%"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
          alignItems="center"
          justifyItems="center"
        >
          <GridText label="Imię" value="Kacper" />
          <GridText label="Nazwisko" value="Żółkiewski" />
          <GridText label="Email" value="kacperzolkiewski@gmail" />
          <GridText label="Pesel" value="1235431234321" />
          <GridText label="Telefon" value="123432123" />
          <GridText label="Adres" value="Kraków, ul. xasdawdasd" />
        </Grid>
      </Box>
    </Flex>
  );
};
