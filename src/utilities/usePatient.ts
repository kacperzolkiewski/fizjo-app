import { useUserId } from "@nhost/react";
import { usePatientByUserIdQuery } from "@/features/profil/api/graphql";
import { Patient } from "@/utilities/types";

export const usePatient = (): Patient => {
  const id = useUserId();
  const { data } = usePatientByUserIdQuery({ variables: { user_id: id } });
  const currentPatient = data?.patients[0];

  const patient: Patient = {
    id: currentPatient?.id,
    name: currentPatient?.name,
    pesel: currentPatient?.pesel,
    surname: currentPatient?.surname,
    phone: currentPatient?.phone,
    email: currentPatient?.user.email,
  };

  return patient;
};
