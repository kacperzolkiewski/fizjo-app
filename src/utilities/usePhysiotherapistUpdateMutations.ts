import { useToast } from "@chakra-ui/react";
import {
  useCreateVisitTypeMutation,
  useUpdatePhysiotherapistAboutMeMutation,
  useUpdatePhysiotherapistAdressMutation,
  useUpdatePhysiotherapistEmailMutation,
  useUpdatePhysiotherapistEndWorkMutation,
  useUpdatePhysiotherapistPhoneMutation,
  useUpdatePhysiotherapistStartWorkMutation,
} from "@/features/physiotherapist/api/graphql";
import { useDeleteVisitTypeMutation } from "@/features/profil/api/graphql";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const usePhysiotherapistUpdateMutations = () => {
  const showToast = useToast();
  const [onEditPhone] = useUpdatePhysiotherapistPhoneMutation({
    onCompleted() {
      showToast({
        status: "success",
        title: "Pomyślnie edytowano numer telefonu",
      });
    },

    onError() {
      showToast({
        status: "error",
        title: "Edycja numeru nie powiodła się, spróbuj ponownie",
      });
    },
  });

  const [onEditAdress] = useUpdatePhysiotherapistAdressMutation({
    onCompleted() {
      showToast({
        status: "success",
        title: "Pomyślnie edytowano adress",
      });
    },

    onError() {
      showToast({
        status: "error",
        title: "Edycja adresu nie powiodła się, spróbuj ponownie",
      });
    },
  });

  const [onEditAboutMe] = useUpdatePhysiotherapistAboutMeMutation({
    onCompleted() {
      showToast({
        status: "success",
        title: "Pomyślnie edytowano informacje o sobie",
      });
    },

    onError() {
      showToast({
        status: "error",
        title: "Edycja informacji o sobie nie powiodła się, spróbuj ponownie",
      });
    },
  });

  const [onEditEmail] = useUpdatePhysiotherapistEmailMutation({
    onCompleted() {
      showToast({
        status: "success",
        title: "Pomyślnie edytowano email",
      });
    },

    onError() {
      showToast({
        status: "error",
        title: "Edycja emailu nie powiodła się, spróbuj ponownie",
      });
    },
  });

  const [onCreateVisitType] = useCreateVisitTypeMutation({
    onCompleted() {
      showToast({
        status: "success",
        title: "Pomyślnie dodano typ wizyty",
      });
    },

    onError() {
      showToast({
        status: "error",
        title: "Dodanie typu wizyty nie powiodło się, spróbuj ponownie",
      });
    },
  });

  const [onStartWorkUpdate] = useUpdatePhysiotherapistStartWorkMutation({
    onCompleted() {
      showToast({
        status: "success",
        title: "Pomyślnie zmieniono godzinę rozpoczęcia pracy",
      });
    },

    onError(error) {
      console.log(error);
      showToast({
        status: "error",
        title:
          "Zmiana godziny rozpoczęcia pracy nie powiodła się, spróbuj ponownie",
      });
    },
  });

  const [onEndWorkUpdate] = useUpdatePhysiotherapistEndWorkMutation({
    onCompleted() {
      showToast({
        status: "success",
        title: "Pomyślnie zmieniono godzinę zakończenia pracy",
      });
    },

    onError() {
      showToast({
        status: "error",
        title:
          "Zmiana godziny zakończenia pracy nie powiodła się, spróbuj ponownie",
      });
    },
  });

  const [onDeleteVisitType] = useDeleteVisitTypeMutation({
    onCompleted() {
      showToast({
        status: "success",
        title: "Pomyślnie usunięto",
      });
    },

    onError() {
      showToast({
        status: "error",
        title: "Usunięcie typu wizyty nie powiodło się, spróbuj ponownie",
      });
    },
  });

  return {
    onEditAboutMe,
    onEditAdress,
    onEditEmail,
    onEditPhone,
    onCreateVisitType,
    onStartWorkUpdate,
    onEndWorkUpdate,
    onDeleteVisitType,
  };
};
