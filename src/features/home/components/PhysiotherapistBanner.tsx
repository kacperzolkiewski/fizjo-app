import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Calendar } from "../../../components/Calendar";
import { Opinion } from "./Opinion";
import { PhysiotherapistInfo } from "./PhysiotherapistInfo";

const AnimatedStack = motion(VStack);

export const PhysiotherapistBanner = () => {
  const [showOpinions, setShowOpinions] = useState(false);

  const stackVariants = {
    expanded: { height: "300px" },
    shrinked: { height: "0px" },
  };
  const currentStackVariant = showOpinions ? "expanded" : "shrinked";

  return (
    <Flex w="80%" flexDir="column" bg="white" rounded={5}>
      <HStack spacing={0.5} h="350px" mb="20px">
        <PhysiotherapistInfo
          name="Danel"
          surname="Koszyk"
          opinionsNumber={54}
          adress="Czerwonego Prądnika 8A, Kraków"
          visitPrice={150}
        />
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
        <Opinion
          name="Kacper"
          surname="Żółkiewski"
          opinion="Wizyta przebiegła w bardzo pozytywnej atmosferze. Daniel jest
        profesjonalistą w swoim fachu. Polecam!!! ssssssssssssss zsdasdas
        asdasdasd"
          date="22.07.2022"
        />
        <Opinion
          name="Kacper"
          surname="Żółkiewski"
          opinion="Wizyta przebiegła w bardzo pozytywnej atmosferze. Daniel jest
        profesjonalistą w swoim fachu. Polecam!!! ssssssssssssss zsdasdas
        asdasdasd"
          date="22.07.2022"
        />
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
