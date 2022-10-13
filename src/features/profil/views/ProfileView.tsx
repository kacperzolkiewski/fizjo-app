import React from "react";
import { PatientProfile } from "../components/PatientProfile";
import { PhysiotherapistProfile } from "../../physiotherapist/components/PhysiotherapistProfile";
import { useUserData } from "@nhost/react";

export const ProfileView = () => {
  const isPatient = useUserData()?.metadata.isPatient;
  const user = useUserData();
  console.log(user);
  return isPatient ? <PatientProfile /> : <PhysiotherapistProfile />;
};
