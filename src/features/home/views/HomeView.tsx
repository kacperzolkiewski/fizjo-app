import { useUserData } from "@nhost/react";
import React from "react";
import { PatientHomeView } from "./PatientHomeView";
import { PhysiotherapistHomeView } from "./PhysiotherapistHomeView";

export const HomeView = () => {
  const isPatient = useUserData()?.metadata.isPatient;

  return isPatient ? <PatientHomeView /> : <PhysiotherapistHomeView />;
};
