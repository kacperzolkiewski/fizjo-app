import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { isUndefined } from "lodash";
import React, { useState } from "react";
import { PhysiotherapistsQuery, useOpinionsQuery } from "@/api/graphql";
import { Calendar } from "@/components/Calendar";
import { ArrayElement } from "@/utilities/types";
import { Opinion } from "@/features/home/components/Opinion";
import { PhysiotherapistInfo } from "@/features/home/components/PhysiotherapistInfo";

const AnimatedStack = motion(VStack);

interface PhysiotherapistBannerProps {
  physiotherapist: ArrayElement<PhysiotherapistsQuery["physiotherapists"]>;
}

export const PhysiotherapistBanner = ({
  physiotherapist,
}: PhysiotherapistBannerProps): JSX.Element => {
  const [showOpinions, setShowOpinions] = useState(false);
  const { data } = useOpinionsQuery({
    variables: { physiotherapist_id: physiotherapist.id },
  });
  const opinionsLength = data?.opinions.length;

  const stackVariants = {
    expanded: { height: "300px" },
    shrinked: { height: "0px" },
  };
  const currentStackVariant = showOpinions ? "expanded" : "shrinked";

  return (
    <Flex w="80%" flexDir="column" bg="white" rounded={5}>
      <HStack spacing={0.5} h="350px" mb="20px">
        <PhysiotherapistInfo physiotherapist={physiotherapist} />
        <Box p="20px" w="60%" h="100%" borderLeft="1px solid lightgray">
          <Calendar />
        </Box>
      </HStack>
      <AnimatedStack
        initial={{ height: "0px" }}
        variants={stackVariants}
        animate={currentStackVariant}
        overflow="auto"
        alignItems="flex-start"
        px="20px"
        spacing={4}
      >
        {!isUndefined(opinionsLength) && opinionsLength > 0 ? (
          data?.opinions.map((opinion) => (
            <Opinion key={opinion.id} opinion={opinion} />
          ))
        ) : (
          <Flex w="100%" h="100%" alignItems="center" justifyContent="center">
            <Heading>
              Ten fizjoterapeuta nie posiada jeszcze żadnych opinii
            </Heading>
          </Flex>
        )}
      </AnimatedStack>
      <Button
        bg="white"
        size="lg"
        h="60px"
        borderTopEndRadius={0}
        borderTopStartRadius={0}
        onClick={() => {
          setShowOpinions(!showOpinions);
        }}
      >
        {showOpinions ? (
          <VStack h="100%" justifyContent="center" spacing="0">
            <ArrowUpIcon />
            <Text>Opinie</Text>
          </VStack>
        ) : (
          <VStack h="100%" justifyContent="center" spacing="0">
            <Text>Opinie</Text>
            <ArrowDownIcon />
          </VStack>
        )}
      </Button>
    </Flex>
  );
};
