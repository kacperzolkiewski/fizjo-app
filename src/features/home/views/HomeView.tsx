import { useUserData } from "@nhost/react";
import React from "react";
import { PatientHomeView } from "@/features/home/views/PatientHomeView";
import { PhysiotherapistHomeView } from "@/features/home/views/PhysiotherapistHomeView";

export const HomeView = (): JSX.Element => {
  const isPatient = useUserData()?.metadata.isPatient as boolean;

  return isPatient ? <PatientHomeView /> : <PhysiotherapistHomeView />;
};
