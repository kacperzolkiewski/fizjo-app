import {
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormField } from "../../../components/FormField";
import { editPatientSchema } from "../utilities/editPatientSchema";

export const EditPatientModal = ({
  editValue,
  isOpen,
  onClose,
  onEditUser,
}: {
  editValue: string;
  isOpen: boolean;
  onClose: () => void;
  onEditUser: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(editPatientSchema),
  });

  const submitForm: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay />
      <ModalContent p="32px" fontSize="18px" boxShadow="xl">
        <ModalCloseButton _hover={{ bg: "none" }} m="20px" />
        <ModalHeader textAlign="center">Edytuj dane</ModalHeader>
        <ModalBody px="0">
          <form
            onSubmit={handleSubmit(submitForm)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Flex w="100%" gap="4">
              <FormField
                name="name"
                label="Imię"
                error={errors.name?.message}
                register={register}
              />
              <FormField
                name="surname"
                label="Nazwisko"
                error={errors.surname?.message}
                register={register}
              />
            </Flex>
            <Flex w="100%" gap="4">
              <FormField
                name="email"
                label="Email"
                error={errors.email?.message}
                register={register}
              />

              <FormField
                name="pesel"
                label="Pesel"
                error={errors.pesel?.message}
                register={register}
              />
            </Flex>
            <Flex w="100%" gap="4" mb="32px">
              <FormField
                name="phone"
                label="Telefon"
                error={errors.phone?.message}
                register={register}
              />
              <FormField
                name="adress"
                label="Adres"
                error={errors.adress?.message}
                register={register}
              />
            </Flex>
            <Button
              mt={4}
              colorScheme="purple"
              isLoading={isSubmitting}
              type="submit"
              w="100%"
            >
              Edytuj
            </Button>
          </form>
        </ModalBody>

        <ModalFooter justifyContent="space-between" px="0" paddingTop="0px">
          <Button onClick={onClose} w="100%">
            Wróć
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
