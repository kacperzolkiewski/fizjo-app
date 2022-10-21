import { Flex } from "@chakra-ui/react";
import { useUserData } from "@nhost/react";
import React, { ReactNode } from "react";
import { PatientSidebar } from "@/features/messenger/components/PatientSidebar";
import { PhysiotherapistSidebar } from "@/features/messenger/components/PhysiotherapistSidebar";

export const MessengerView = ({
  children,
}: {
  children?: ReactNode;
}): JSX.Element => {
  const data = useUserData();
  const isPatient = data?.metadata.isPatient as boolean;

  return (
    <Flex h="100vh" pl="20px">
      {isPatient ? <PatientSidebar /> : <PhysiotherapistSidebar />}
      {children}
    </Flex>
  );
};
