import { CalendarIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { isError, isUndefined } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import AvatarImage from "../../../assets/awatar.png";
import { OpinionsModal } from "../../profil/components/OpinionsModal";

import { ProfilPropertyBox } from "../../../components/ProfilPropertyBox";
import { VisitTypesModal } from "../../profil/components/VisitTypesModal";
import { usePhysiotherapistQuery } from "../api/graphql";
import { useCreateOpinionMutation } from "../../../api/graphql";
import { usePatient } from "../../../utilities/usePatient";

export const PhysiotherapistView = () => {
  const router = useRouter();
  const showToast = useToast();
  const { id } = router.query;
  const { id: patient_id } = usePatient();
  const { data } = usePhysiotherapistQuery({ variables: { id: id } });
  const physiotherapist = data?.physiotherapists_by_pk;
  const [createOpininon] = useCreateOpinionMutation();

  return (
    <Stack p="20px" h="100vh" justifyContent="center">
      <Flex
        w="100%"
        h="60%"
        justifyContent="center"
        alignItems="center"
        gap="100px"
        position="relative"
      >
        <Heading position="absolute" top="10" textAlign="center">
          {`${physiotherapist?.name} ${physiotherapist?.surname}`}
        </Heading>
        <VStack spacing={4}>
          <ProfilPropertyBox
            label="Email"
            propertyValue={physiotherapist?.user?.email}
          />
          <ProfilPropertyBox
            label="Telefon"
            propertyValue={physiotherapist?.phone}
          />
          <ProfilPropertyBox
            label="Adres"
            propertyValue={physiotherapist?.adress}
          />
        </VStack>
        <Flex>
          <Image src={AvatarImage} width="250px" height="250px" />
        </Flex>
        <VStack spacing={4}>
          <OpinionsModal
            physiotherapist_id={String(id)}
            addOpinion={(comment: string) => {
              if (comment.length < 20) {
                showToast({
                  status: "warning",
                  title: "Opinia musi mieć minimum 20 znaków",
                });
                return;
              }
              void createOpininon({
                refetchQueries: ["OpinionsQuery"],
                variables: {
                  comment: comment,
                  physiotherapist_id: id,
                  created_at: new Date(),
                  patient_id: patient_id,
                },
                onCompleted() {
                  showToast({
                    status: "success",
                    title: "Pomyślnie dodano opinię",
                  });
                },
                onError(error) {
                  console.log(error);
                  showToast({
                    status: "error",
                    title: "Dodanie opinii nie powiodło się, spróbuj ponownie",
                  });
                },
              });
            }}
          />
          <VisitTypesModal physiotherapist_id={String(id)} />
          <ProfilPropertyBox
            label="O mnie"
            propertyValue={physiotherapist?.aboutMe}
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
        >
          <Heading fontSize="18px" color="purple.500">
            Kalendarz
          </Heading>
          <CalendarIcon position="absolute" right={5} />
        </Button>
      </Flex>
    </Stack>
  );
};
