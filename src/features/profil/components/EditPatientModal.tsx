import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormField } from "@/components/FormField";
import { Patient } from "@/utilities/types";
import React, { useEffect, useState } from "react";
import { editPatientSchema } from "@/features/profil/utilities/schemas";
import { usePatientUpdateMutations } from "@/utilities/usePatientUpdateMutations";
import { useUserId } from "@nhost/react";

export const EditPatientModal = ({
  patient,
  isOpen,
  onClose,
}: {
  patient: Patient;
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element => {
  const userId = useUserId();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(editPatientSchema),
  });

  const [inputs, setInputs] = useState({
    name: patient.name,
    surname: patient.surname,
    pesel: patient.pesel,
    email: patient.email,
    phone: patient.phone,
  });

  useEffect(() => {
    Object.keys(inputs).forEach((key) => {
      setInputs((prevState) => ({
        ...prevState,
        [key]: patient[key as keyof typeof patient],
      }));
    });
  }, [patient]);

  const { updatePatient } = usePatientUpdateMutations();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const submitForm: SubmitHandler<FieldValues> = async (data) => {
    updatePatient({
      id: patient.id,
      userId,
      phone: data.phone,
      pesel: data.pesel,
      name: data.name,
      email: data.email,
      surname: data.surname,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay />
      <ModalContent p="32px" fontSize="18px" boxShadow="xl">
        <ModalCloseButton _hover={{ bg: "none" }} m="20px" />
        <ModalHeader textAlign="center">Edytuj dane</ModalHeader>
        <ModalBody px="0">
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
            <Flex w="100%" gap="4">
              <FormField
                value={inputs.name}
                name="name"
                label="Imię"
                error={errors.name?.message}
                register={register}
                onChange={handleChange}
              />
              <FormField
                value={inputs.surname}
                name="surname"
                label="Nazwisko"
                error={errors.surname?.message}
                register={register}
                onChange={handleChange}
              />
            </Flex>
            <Flex w="100%" gap="4">
              <FormField
                value={inputs.email}
                name="email"
                label="Email"
                error={errors.email?.message}
                register={register}
                onChange={handleChange}
              />

              <FormField
                value={inputs.pesel}
                name="pesel"
                label="Pesel"
                error={errors.pesel?.message}
                register={register}
                onChange={handleChange}
              />
            </Flex>
            <Flex w="50%" alignSelf="flex-start" gap="4" mb="32px">
              <FormField
                value={inputs.phone}
                name="phone"
                label="Telefon"
                error={errors.phone?.message}
                register={register}
                onChange={handleChange}
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
