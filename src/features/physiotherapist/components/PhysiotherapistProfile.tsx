import { Button, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import AvatarImage from "../../../assets/awatar.png";
import Image from "next/image";
import { OpinionsModal } from "../../profil/components/OpinionsModal";
import { CustomEditModal } from "../../profil/components/CustomEditModal";
import { USER_SCHEMAS } from "../../profil/utilities/schemas";
import { VisitTypesModal } from "../../profil/components/VisitTypesModal";
import { CalendarIcon } from "@chakra-ui/icons";
import { usePhysiotherapist } from "../../../utilities/usePhysiotherapist";
import { usePhysiotherapistUpdateMutations } from "../../../utilities/usePhysiotherapistUpdateMutations";
import { useUserId } from "@nhost/react";
import { isUndefined } from "lodash";

export const PhysiotherapistProfile = (): JSX.Element => {
  const { name, surname, email, adress, aboutMe, phone, id } =
    usePhysiotherapist();
  const userId = useUserId();
  const {
    onEditPhone,
    onEditAboutMe,
    onEditAdress,
    onEditEmail,
    onCreateVisitType,
  } = usePhysiotherapistUpdateMutations();

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
                variables: {
                  user_id: userId,
                  email: value,
                },
              });
            }}
          />
          <CustomEditModal
            label="Telefon"
            property="phone"
            propertyValue={phone}
            schema={USER_SCHEMAS.phoneSchema}
            onEdit={(value: string) => {
              void onEditPhone({
                variables: {
                  id,
                  phone: value,
                },
              });
            }}
          />
          <CustomEditModal
            label="Adres"
            property="adress"
            propertyValue={adress}
            schema={USER_SCHEMAS.adressSchema}
            onEdit={(value: string) => {
              void onEditAdress({
                refetchQueries: ["VisitTypesQuery"],
                variables: {
                  id,
                  adress: value,
                },
              });
            }}
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
                variables: {
                  id,
                  aboutMe: value,
                },
              });
            }}
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
