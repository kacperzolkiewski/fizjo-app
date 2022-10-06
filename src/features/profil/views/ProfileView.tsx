import { Box, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import { useUserData } from "@nhost/react";
import React from "react";
import { PatientProfile } from "../components/PatientProfile";
import { PhysiotherapistProfile } from "../components/PhysiotherapistProfile";

export const ProfileView = () => {
  const user = useUserData();

  return (
    // <PatientProfile
    //   name={user?.metadata.name as string}
    //   surname={user?.metadata.surname as string}
    //   email={user?.email as string}
    // />
    <PhysiotherapistProfile />
  );
};
