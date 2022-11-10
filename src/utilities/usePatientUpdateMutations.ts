import {
  PatientByUserIdDocument,
  useUpdatePatientEmailMutation,
  useUpdatePatientMutation,
} from "@/features/profil/api/graphql";
import { useToast } from "@chakra-ui/react";

export const usePatientUpdateMutations = () => {
  const showToast = useToast();
  const [onEditPatient] = useUpdatePatientMutation({
    onCompleted() {
      showToast({
        status: "success",
        title: "Pomyślnie edytowano dane",
      });
    },

    onError() {
      showToast({
        status: "error",
        title: "Edycja danych nie powiodła się, spróbuj ponownie",
      });
    },
  });

  const [onEditPatientEmail] = useUpdatePatientEmailMutation();

  const updatePatient = ({
    id,
    pesel,
    email,
    phone,
    name,
    surname,
    userId,
  }: {
    id?: string;
    pesel: string;
    email: string;
    phone: string;
    name: string;
    surname: string;
    userId?: string;
  }) => {
    void onEditPatient({
      refetchQueries: [PatientByUserIdDocument],
      variables: {
        id,
        phone,
        pesel,
        name,
        surname,
      },
    });

    void onEditPatientEmail({
      variables: {
        userId,
        email,
      },
    });
  };

  return { onEditPatient, onEditPatientEmail, updatePatient };
};
