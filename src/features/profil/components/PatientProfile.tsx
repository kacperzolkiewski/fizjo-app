import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import AvatarImage from "@/assets/awatar.png";
import Image from "next/image";
import React from "react";
import { GridText } from "@/components/GridText";
import { usePatient } from "@/utilities/usePatient";
import { EditIcon } from "@chakra-ui/icons";
import { EditPatientModal } from "@/features/profil/components/EditPatientModal";

export const PatientProfile = (): JSX.Element => {
  const patient = usePatient();
  console.log(patient);
  const { name, surname, email, pesel, phone } = patient;
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              {`${name ?? ""} ${surname ?? ""}`}
            </Heading>
            <Text textAlign="center">{email}</Text>
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
          position="relative"
          justifyItems="center"
        >
          <GridText label="Imię" value={name} />
          <GridText label="Nazwisko" value={surname} />
          <GridText label="Email" value={email} />
          <GridText label="Pesel" value={pesel} />
          <GridText label="Telefon" value={phone} />
          <EditIcon
            position="absolute"
            w="100px"
            h="100px"
            cursor="pointer"
            right={0}
            bottom={10}
            onClick={onOpen}
          />
        </Grid>
      </Box>

      <EditPatientModal
        patient={patient}
        isOpen={isOpen}
        onClose={onClose}
        onEditUser={() => {}}
      />
    </Flex>
  );
};
