import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { format, parseISO, toDate } from "date-fns";
import { pl } from "date-fns/locale";
import Image from "next/image";
import React from "react";
import { OpinionsQuery } from "../../../api/graphql";
import AvatarImage from "../../../assets/awatar.png";
import { ArrayElement } from "../../../utilities/types";

interface OpinionProps {
  opinion: ArrayElement<OpinionsQuery["opinions"]>;
}

export const Opinion = ({ opinion }: OpinionProps) => {
  const { comment, created_at, patient, id } = opinion;
  const formattedDate = format(parseISO(created_at), "dd MMMM yyyy", {
    locale: pl,
  });

  return (
    <Box bg="#F5F5F5" p="20px" rounded="14" w="100%" position="relative">
      <Flex alignItems="center">
        <Image src={AvatarImage} width="60px" height="60px" />
        <Heading fontSize="20px" ml="15px">
          {`${patient?.name} ${patient?.surname}`}
        </Heading>
      </Flex>
      <Text ml="75px">{comment}</Text>
      <Text position="absolute" right="20px" top="10px">
        {formattedDate}
      </Text>
    </Box>
  );
};
