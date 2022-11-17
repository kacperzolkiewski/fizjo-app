import { ChatIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import AvatarImage from "@/assets/awatar.png";
import { OpinionsModal } from "@/features/profil/components/OpinionsModal";

import { ProfilPropertyBox } from "@/components/ProfilPropertyBox";
import { VisitTypesModal } from "@/features/profil/components/VisitTypesModal";
import { usePhysiotherapistQuery } from "@/features/physiotherapist/api/graphql";
import { OpinionsDocument, useCreateOpinionMutation } from "@/api/graphql";
import { usePatient } from "@/utilities/usePatient";
import dynamic from "next/dynamic";
import {
  faAddressBook,
  faCalendar,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const MapModal = dynamic(
  async () =>
    await import("../components/MapModal").then((module) => module.MapModal),
  { ssr: false }
);

export const PhysiotherapistView = (): JSX.Element => {
  const router = useRouter();
  const showToast = useToast();
  const { id } = router.query;
  const { id: patientId } = usePatient();
  const { data } = usePhysiotherapistQuery({ variables: { id } });
  const physiotherapist = data?.physiotherapists_by_pk;
  const [createOpininon] = useCreateOpinionMutation();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Stack p="20px" h="100vh" justifyContent="center">
      <Flex
        flexDir="column"
        alignItems="center"
        position="absolute"
        right={20}
        top={20}
      >
        <ChatIcon
          cursor="pointer"
          height={50}
          width={50}
          onClick={() => {
            void router.push(`/messenger/${String(id)}`);
          }}
        />
        <Text fontSize={20}>Napisz do mnie</Text>
      </Flex>
      <Flex
        w="100%"
        h="60%"
        justifyContent="center"
        alignItems="center"
        gap="100px"
        position="relative"
      >
        <Heading position="absolute" top="10" textAlign="center">
          {`${physiotherapist?.name ?? ""} ${physiotherapist?.surname ?? ""}`}
        </Heading>
        <VStack spacing={4}>
          <ProfilPropertyBox
            label="Email"
            propertyValue={physiotherapist?.user?.email}
            icon={faEnvelope}
          />
          <ProfilPropertyBox
            label="Telefon"
            propertyValue={physiotherapist?.phone}
            icon={faPhone}
          />
          <ProfilPropertyBox
            onClick={onOpen}
            label="Adres"
            propertyValue={physiotherapist?.adress}
            icon={faAddressBook}
          />
        </VStack>
        <Flex>
          <Image src={AvatarImage} width="250px" height="250px" />
        </Flex>
        <VStack spacing={4}>
          <OpinionsModal
            physiotherapistId={String(id)}
            addOpinion={(comment: string) => {
              if (comment.length < 20) {
                showToast({
                  status: "warning",
                  title: "Opinia musi mieć minimum 20 znaków",
                });
                return;
              }
              void createOpininon({
                refetchQueries: [OpinionsDocument],
                variables: {
                  comment,
                  physiotherapist_id: id,
                  created_at: new Date(),
                  patient_id: patientId,
                },
                onCompleted() {
                  showToast({
                    status: "success",
                    title: "Pomyślnie dodano opinię",
                  });
                },
                onError() {
                  showToast({
                    status: "error",
                    title: "Dodanie opinii nie powiodło się, spróbuj ponownie",
                  });
                },
              });
            }}
          />
          <VisitTypesModal physiotherapistId={String(id)} />
          <ProfilPropertyBox
            label="O mnie"
            propertyValue={physiotherapist?.aboutMe}
            icon={faInfoCircle}
          />
        </VStack>
        <Button
          flexDir="column"
          position="absolute"
          alignItems="flex-start"
          bottom="0"
          w="300px"
          h="80px"
          bg="white"
          _hover={{ bg: "#F2F3F8" }}
          rounded={8}
          p="10px"
          boxShadow="8px 8px 24px 0px rgba(66, 68, 90, 0.2)"
          onClick={() => {
            void router.push(`${id}/calendar`);
          }}
        >
          <Heading fontSize="18px" color="purple.500">
            Kalendarz
          </Heading>
          <FontAwesomeIcon
            style={{ position: "absolute", right: "15px" }}
            icon={faCalendar}
            size="xl"
          />
        </Button>
      </Flex>
      <MapModal
        adress={physiotherapist?.adress}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Stack>
  );
};
