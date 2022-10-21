import { useToast } from "@chakra-ui/react";
import {
  useCreateVisitTypeMutation,
  useUpdatePhysiotherapistAboutMeMutation,
  useUpdatePhysiotherapistAdressMutation,
  useUpdatePhysiotherapistEmailMutation,
  useUpdatePhysiotherapistPhoneMutation,
} from "../features/physiotherapist/api/graphql";

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

  return {
    onEditAboutMe,
    onEditAdress,
    onEditEmail,
    onEditPhone,
    onCreateVisitType,
  };
};
