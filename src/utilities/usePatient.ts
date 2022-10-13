import { useUserEmail, useUserId } from "@nhost/react";
import { usePatientByUserIdQuery } from "../features/profil/api/graphql";
import { Patient } from "./types";

export const usePatient = () => {
  const id = useUserId();
  const email = useUserEmail();
  const { data } = usePatientByUserIdQuery({ variables: { user_id: id } });
  const currentPatient = data?.patients[0];

  const patient: Patient = {
    id: currentPatient?.id,
    name: currentPatient?.name,
    pesel: currentPatient?.pesel,
    surname: currentPatient?.surname,
    phone: currentPatient?.phone,
    email: email,
  };

  return patient;
};
