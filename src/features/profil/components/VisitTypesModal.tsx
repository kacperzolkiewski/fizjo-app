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
import { USER_SCHEMAS } from "../utilities/schemas";
import { ProfilPropertyBox } from "./ProfilPropertyBox";
import * as yup from "yup";
import { FormField } from "../../../components/FormField";
import { useState } from "react";

interface CustomEditModalProps {
  property: string;
  propertyValue: string;
  schema: yup.AnyObjectSchema;
}

export const VisitTypesModal = ({
  property,
  propertyValue,
  schema,
}: CustomEditModalProps) => {
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
    console.log(data);
  };

  return (
    <Box>
      <ProfilPropertyBox
        property={property}
        propertyValue={propertyValue}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent p="32px" m={0} fontSize="18px" boxShadow="xl">
          <ModalCloseButton _hover={{ bg: "none" }} m="20px" />
          <ModalHeader textAlign="center">Edytuj</ModalHeader>
          <ModalBody px="0" h="70%">
            <form
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
                label={property}
                error={errors.adress?.message}
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
