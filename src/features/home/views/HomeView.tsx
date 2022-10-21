import { useUserData } from "@nhost/react";
import React from "react";
import { PatientHomeView } from "./PatientHomeView";
import { PhysiotherapistHomeView } from "./PhysiotherapistHomeView";

export const HomeView = (): JSX.Element => {
  const isPatient = useUserData()?.metadata.isPatient as boolean;

  return isPatient ? <PatientHomeView /> : <PhysiotherapistHomeView />;
};
