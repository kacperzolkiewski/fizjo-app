import { Flex } from "@chakra-ui/react";
import { useUserData } from "@nhost/react";
import React, { ReactNode } from "react";
import { PatientSidebar } from "../components/PatientSidebar";
import { PhysiotherapistSidebar } from "../components/PhysiotherapistSidebar";

export const MessengerView = ({ children }: { children?: ReactNode }) => {
  const data = useUserData();
  const isPatient = data?.metadata.isPatient;

  return (
    <Flex h="100vh" pl="20px">
      {isPatient ? <PatientSidebar /> : <PhysiotherapistSidebar />}
      {children}
    </Flex>
  );
};
