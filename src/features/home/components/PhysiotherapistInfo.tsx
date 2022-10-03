import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import AvatarImage from "../../../assets/awatar.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface PhysiotherapistInfoProps {
  name: string;
  surname: string;
  opinionsNumber: number;
  adress: string;
  visitPrice: number;
}

export const PhysiotherapistInfo = ({
  name,
  surname,
  opinionsNumber,
  adress,
  visitPrice,
}: PhysiotherapistInfoProps) => {
  return (
    <VStack w="40%" h="100%" p="20px">
      <HStack spacing={4} h="40%">
        <Image src={AvatarImage} width="80px" height="80px" />
        <VStack spacing={0} alignItems="flex-start">
          <Link href={`physiotherapist/${1}`}>
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
        <Text>Fizjoterapia - {visitPrice} zł</Text>
      </Box>
    </VStack>
  );
};
