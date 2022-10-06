import { Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import AvatarImage from "../../../assets/awatar.png";
import Image from "next/image";
import { ProfilPropertyBox } from "./ProfilPropertyBox";
import { OpinionsModal } from "./OpinionsModal";
import { CustomEditModal } from "./CustomEditModal";
import { USER_SCHEMAS } from "../utilities/schemas";

export const PhysiotherapistProfile = () => {
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
          Kacper Żółkiewski
        </Heading>
        <VStack spacing={4}>
          <CustomEditModal
            property="email"
            propertyValue="kacperzolkiewski@gmail.com"
            schema={USER_SCHEMAS.emailSchema}
          />
          <CustomEditModal
            property="Telefon"
            propertyValue="123432567"
            schema={USER_SCHEMAS.phoneSchema}
          />
          <CustomEditModal
            property="Adres"
            propertyValue="Kraków, ul. xxxyyy"
            schema={USER_SCHEMAS.adressSchema}
          />
        </VStack>
        <Flex>
          <Image src={AvatarImage} width="250px" height="250px" />
        </Flex>
        <VStack spacing={4}>
          <OpinionsModal />
          <ProfilPropertyBox
            property="Typy wizyt"
            propertyValue="Fizjoterapia 150zł"
          />
          <CustomEditModal
            property="O mnie"
            propertyValue="Pracuję w zawodzie ..."
            schema={USER_SCHEMAS.aboutMeSchema}
          />
        </VStack>
      </Flex>
    </Stack>
  );
};
