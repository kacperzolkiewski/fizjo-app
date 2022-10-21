import React from "react";
import { PatientProfile } from "@/features/profil/components/PatientProfile";
import { PhysiotherapistProfile } from "@/features/physiotherapist/components/PhysiotherapistProfile";
import { useUserData } from "@nhost/react";

export const ProfileView = (): JSX.Element => {
  const isPatient = useUserData()?.metadata.isPatient as boolean;

  return isPatient ? <PatientProfile /> : <PhysiotherapistProfile />;
};
