import {
  Flex,
  Heading,
  Select,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AvatarImage from "@/assets/awatar.png";
import Image from "next/image";
import { OpinionsModal } from "@/features/profil/components/OpinionsModal";
import { CustomEditModal } from "@/features/profil/components/CustomEditModal";
import { USER_SCHEMAS } from "@/features/profil/utilities/schemas";
import { VisitTypesModal } from "@/features/profil/components/VisitTypesModal";
import { usePhysiotherapist } from "@/utilities/usePhysiotherapist";
import { usePhysiotherapistUpdateMutations } from "@/utilities/usePhysiotherapistUpdateMutations";
import { useUserId } from "@nhost/react";
import { isUndefined } from "lodash";
import { createHoursSelectOptions } from "@/features/physiotherapist/utilities/createHoursSelectOptions";
import {
  GetUserByIdDocument,
  VisitTypesDocument,
} from "@/features/physiotherapist/api/graphql";
import { EditPasswordModal } from "@/components/EditPasswordModal";
import { faAddressBook, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle, faPhone } from "@fortawesome/free-solid-svg-icons";

export const PhysiotherapistProfile = (): JSX.Element => {
  const {
    name,
    surname,
    email,
    adress,
    aboutMe,
    phone,
    id,
    startWork: physiotherapistStartWork,
    endWork: physiotherapistEndWork,
  } = usePhysiotherapist();
  const userId = useUserId();
  const {
    onEditPhone,
    onEditAboutMe,
    onEditAdress,
    onEditEmail,
    onCreateVisitType,
    onStartWorkUpdate,
    onEndWorkUpdate,
  } = usePhysiotherapistUpdateMutations();
  const [startWork, setStartWork] = useState(physiotherapistStartWork);
  const [endWork, setEndWork] = useState(physiotherapistEndWork);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setStartWork(physiotherapistStartWork);
  }, [physiotherapistStartWork]);

  useEffect(() => {
    setEndWork(physiotherapistEndWork);
  }, [physiotherapistEndWork]);

  return (
    <Stack p="20px" h="100vh" justifyContent="center">
      <Text
        position="absolute"
        right={10}
        top={10}
        _hover={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={onOpen}
      >
        Zmień hasło
      </Text>
      <Flex
        w="100%"
        h="60%"
        justifyContent="center"
        alignItems="center"
        gap="100px"
        position="relative"
      >
        <Heading position="absolute" top="10" textAlign="center">
          {!isUndefined(name) && !isUndefined(surname)
            ? `${name} ${surname}`
            : ""}
        </Heading>
        <VStack spacing={4}>
          <CustomEditModal
            label="Email"
            property="email"
            propertyValue={email}
            schema={USER_SCHEMAS.emailSchema}
            onEdit={(value: string) => {
              void onEditEmail({
                refetchQueries: [GetUserByIdDocument],
                variables: {
                  user_id: userId,
                  email: value,
                },
              });
            }}
            icon={faEnvelope}
          />
          <CustomEditModal
            label="Telefon"
            property="phone"
            propertyValue={phone}
            schema={USER_SCHEMAS.phoneSchema}
            onEdit={(value: string) => {
              void onEditPhone({
                refetchQueries: [GetUserByIdDocument],
                variables: {
                  id,
                  phone: value,
                },
              });
            }}
            icon={faPhone}
          />
          <CustomEditModal
            label="Adres"
            property="adress"
            propertyValue={adress}
            schema={USER_SCHEMAS.adressSchema}
            onEdit={(value: string) => {
              void onEditAdress({
                refetchQueries: [GetUserByIdDocument],
                variables: {
                  id,
                  adress: value,
                },
              });
            }}
            icon={faAddressBook}
          />
        </VStack>
        <Flex>
          <Image src={AvatarImage} width="250px" height="250px" />
        </Flex>
        <VStack spacing={4}>
          <OpinionsModal physiotherapistId={id} />
          <VisitTypesModal
            onCreateVisitType={(name: string, price: string) => {
              void onCreateVisitType({
                refetchQueries: [VisitTypesDocument],
                variables: {
                  physiotherapist_id: id,
                  name,
                  price,
                },
              });
            }}
            physiotherapistId={id}
          />
          <CustomEditModal
            label="O mnie"
            property="aboutMe"
            propertyValue={aboutMe}
            schema={USER_SCHEMAS.aboutMeSchema}
            onEdit={(value: string) => {
              void onEditAboutMe({
                refetchQueries: [GetUserByIdDocument],
                variables: {
                  id,
                  aboutMe: value,
                },
              });
            }}
            icon={faInfoCircle}
          />
        </VStack>
      </Flex>
      <Flex position="absolute" top={10} alignItems="flex-end">
        <Heading fontSize="25px">Pracuję od </Heading>
        <Select
          value={startWork}
          onChange={(e) => {
            void onStartWorkUpdate({
              refetchQueries: [GetUserByIdDocument],
              variables: {
                id,
                startWork: Number(e.target.value),
              },
            });
            setStartWork(Number(e.target.value));
          }}
          w="100px"
          mx={5}
        >
          {createHoursSelectOptions()}
        </Select>
        <Heading fontSize="25px">do </Heading>
        <Select
          value={endWork}
          onChange={(e) => {
            void onEndWorkUpdate({
              refetchQueries: [GetUserByIdDocument],
              variables: {
                id,
                endWork: Number(e.target.value),
              },
            });
            setEndWork(Number(e.target.value));
          }}
          ml={5}
          w="100px"
        >
          {createHoursSelectOptions()}
        </Select>
      </Flex>
      <EditPasswordModal isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
};
