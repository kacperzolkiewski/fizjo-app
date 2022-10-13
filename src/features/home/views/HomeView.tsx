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
import { useUserData } from "@nhost/react";
import React from "react";
import { PhysiotherapistBanner } from "../components/PhysiotherapistBanner";
import { PatientHomeView } from "./PatientHomeView";
import { PhysiotherapistHomeView } from "./PhysiotherapistHomeView";

export const HomeView = () => {
  const isPatient = useUserData()?.metadata.isPatient;

  return isPatient ? <PatientHomeView /> : <PhysiotherapistHomeView />;
};
