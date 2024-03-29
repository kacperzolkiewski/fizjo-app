import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ProfilPropertyBox } from "@/components/ProfilPropertyBox";
import * as yup from "yup";
import { FormField } from "@/components/FormField";
import React, { useEffect, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CustomEditModalProps {
  property: string;
  propertyValue?: string;
  label: string;
  schema: yup.AnyObjectSchema;
  onEdit: (value: string) => void;
  icon: IconProp;
}

export const CustomEditModal = ({
  property,
  propertyValue,
  label,
  schema,
  onEdit,
  icon,
}: CustomEditModalProps): JSX.Element => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [inputValue, setValue] = useState(propertyValue);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm: SubmitHandler<FieldValues> = async (data) => {
    onEdit(data[property]);
  };

  useEffect(() => {
    setValue(propertyValue);
  }, [propertyValue]);

  return (
    <Box>
      <ProfilPropertyBox
        label={label}
        propertyValue={propertyValue}
        onClick={onOpen}
        icon={icon}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent p="32px" m={0} fontSize="18px" boxShadow="xl">
          <ModalCloseButton _hover={{ bg: "none" }} m="20px" />
          <ModalHeader textAlign="center">Edytuj</ModalHeader>
          <ModalBody px="0" h="70%">
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
              <FormField
                name={property}
                value={inputValue}
                label={label}
                error={errors[property]?.message}
                register={register}
                onChange={(e) => {
                  setValue(e.currentTarget.value);
                }}
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

          <ModalFooter alignItems="flex-end" px={0}>
            <Button w="100%" onClick={onClose}>
              Wróć
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
