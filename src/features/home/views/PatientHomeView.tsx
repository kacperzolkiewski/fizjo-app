import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { usePhysiotherapistsQuery } from "../../../api/graphql";
import { PhysiotherapistBanner } from "../components/PhysiotherapistBanner";

export const PatientHomeView = () => {
  const { data } = usePhysiotherapistsQuery();

  return (
    <Stack p="20px" spacing={8} minH="100vh" alignItems="center">
      <Flex flexDir="column" alignItems="flex-start" w="100%">
        <Heading fontSize="40px">Fizjoterapeuci</Heading>
        <Box w="340px" mt="20px">
          <InputGroup bg="white">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input size="sm" placeholder="Kraków..." />
          </InputGroup>
        </Box>
      </Flex>
      {data?.physiotherapists.map((physiotherapist) => (
        <PhysiotherapistBanner
          key={physiotherapist.id}
          physiotherapist={physiotherapist}
        />
      ))}
    </Stack>
  );
};
