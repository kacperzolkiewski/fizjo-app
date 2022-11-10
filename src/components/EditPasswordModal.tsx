import { FormField } from "@/components/FormField";
import { ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useChangePassword } from "@nhost/react";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

export const EditPasswordModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element => {
  const schema = yup.object().shape({
    password: yup
      .string()
      .min(8, (l) => `Hasło ma minimum ${l.min} znaków`)
      .max(15, (l) => `Hasło ma maksimum ${l.max} znaków`)
      .required("Hasło jest wymagane"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Hasłą muszą być identyczne"),
  });
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const showToast = useToast();
  const { changePassword, isSuccess } = useChangePassword();

  const submitForm: SubmitHandler<FieldValues> = async (data) => {
    void changePassword(data.password);

    if (isSuccess) {
      showToast({
        status: "success",
        title: "Zmiana hasła się powiodła",
      });
    } else {
      showToast({
        status: "error",
        title: "Zmiana hasła nie powiodła się, spróbuj ponownie",
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="507px" p="32px" fontSize="18px" boxShadow="xl">
        <ModalCloseButton _hover={{ bg: "none" }} m="20px" />

        <ModalBody pt="70px" px="0">
          <Center> Czy na pewno chcesz edytować hasło?</Center>
          <form
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleSubmit(submitForm)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <ViewIcon
              mt={3}
              w={10}
              h={10}
              cursor="pointer"
              onClick={() => setIsVisible(!isVisible)}
            />
            <FormField
              name="password"
              type={isVisible ? "text" : "password"}
              label="Nowe hasło"
              error={errors.password?.message}
              register={register}
            />
            <FormField
              name="confirmPassword"
              type={isVisible ? "text" : "password"}
              label="Potwierdź hasło"
              error={errors.confirmPassword?.message}
              register={register}
            />
            <Button
              mt={8}
              colorScheme="purple"
              isLoading={isSubmitting}
              type="submit"
              w="100%"
            >
              Edytuj
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
