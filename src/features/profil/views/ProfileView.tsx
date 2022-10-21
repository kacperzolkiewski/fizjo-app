import React from "react";
import { PatientProfile } from "../components/PatientProfile";
import { PhysiotherapistProfile } from "../../physiotherapist/components/PhysiotherapistProfile";
import { useUserData } from "@nhost/react";

export const ProfileView = (): JSX.Element => {
  const isPatient = useUserData()?.metadata.isPatient as boolean;

  return isPatient ? <PatientProfile /> : <PhysiotherapistProfile />;
};
