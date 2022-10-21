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
import React, { useState } from "react";
import { usePhysiotherapistsQuery } from "../../../api/graphql";
import { PhysiotherapistBanner } from "../components/PhysiotherapistBanner";

export const PatientHomeView = (): JSX.Element => {
  const { data } = usePhysiotherapistsQuery();
  const [adress, setAdress] = useState("");

  const physiotherapists =
    data?.physiotherapists.filter((physio) =>
      physio.adress?.includes(adress)
    ) ?? [];

  return (
    <Stack p="20px" spacing={8} minH="100vh" alignItems="center">
      <Flex flexDir="column" alignItems="flex-start" w="100%">
        <Heading fontSize="40px">Fizjoterapeuci</Heading>
        <Box w="340px" mt="20px">
          <InputGroup bg="white">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              size="sm"
              placeholder="Kraków..."
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </InputGroup>
        </Box>
      </Flex>
      {physiotherapists.map((physiotherapist) => (
        <PhysiotherapistBanner
          key={physiotherapist.id}
          physiotherapist={physiotherapist}
        />
      ))}
    </Stack>
  );
};
