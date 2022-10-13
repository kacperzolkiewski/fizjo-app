import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import AvatarImage from "../../../assets/awatar.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrayElement } from "../../../utilities/types";
import { PhysiotherapistsQuery } from "../../../api/graphql";

interface PhysiotherapistInfoProps {
  physiotherapist: ArrayElement<PhysiotherapistsQuery["physiotherapists"]>;
}

export const PhysiotherapistInfo = ({
  physiotherapist,
}: PhysiotherapistInfoProps) => {
  const { id, name, surname, opinions, adress, visit_types } = physiotherapist;

  const opinionsNumber = opinions.length;

  return (
    <VStack w="40%" h="100%" p="20px">
      <HStack spacing={4} h="40%">
        <Image src={AvatarImage} width="80px" height="80px" />
        <VStack spacing={0} alignItems="flex-start">
          <Link href={`physiotherapist/${id}`}>
            <Text
              fontWeight="bold"
              fontSize="24px"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              {`${name} ${surname}`}
            </Text>
          </Link>
          <Text>Fizjoterapeuta</Text>
          <Text color="lightslategray">{opinionsNumber} opinii</Text>
        </VStack>
      </HStack>
      <Box w="100%" h="50%" borderTop="1px solid lightgray">
        <Text mt="20px" mb="10px">
          {adress}
        </Text>
        {visit_types.map((visitType) => (
          <Text>
            {visitType.name} - {visitType.price} zł
          </Text>
        ))}
      </Box>
    </VStack>
  );
};
