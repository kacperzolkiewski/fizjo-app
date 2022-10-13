import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ProfilPropertyBox } from "../../../components/ProfilPropertyBox";
import { FormField } from "../../../components/FormField";
import { USER_SCHEMAS } from "../utilities/schemas";
import { VisitType } from "../../visits/components/VisitType";
import { useVisitTypesQuery } from "../../physiotherapist/api/graphql";

interface VisitTypesModalProps {
  onCreateVisitType: (name: string, price: string) => void;
  physiotherapist_id?: string;
}

export const VisitTypesModal = ({
  onCreateVisitType,
  physiotherapist_id,
}: VisitTypesModalProps) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { data } = useVisitTypesQuery({
    variables: {
      physiotherapist_id: physiotherapist_id,
    },
  });
  const visitTypes = data?.visit_types;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(USER_SCHEMAS["visitTypesSchema"]),
  });

  const submitForm: SubmitHandler<FieldValues> = async (data) => {
    onCreateVisitType(data.name, data.price);
  };

  return (
    <Box>
      <ProfilPropertyBox
        label="Typy wizyt"
        propertyValue="Fizjoterapia 150zł"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent p="32px" m={0} fontSize="18px" boxShadow="xl">
          <ModalCloseButton _hover={{ bg: "none" }} m="20px" />
          <ModalHeader textAlign="center">Dodaj</ModalHeader>
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
              <Flex
                w="100%"
                gap={4}
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <FormField
                  name="name"
                  label={"Typ wizyty"}
                  error={errors["name"]?.message}
                  register={register}
                  w="65%"
                />
                <FormField
                  w="30%"
                  name="price"
                  label={"Cena"}
                  error={errors["price"]?.message}
                  register={register}
                />
                <Button
                  colorScheme="purple"
                  isLoading={isSubmitting}
                  type="submit"
                  w="100%"
                >
                  Dodaj
                </Button>
              </Flex>
            </form>
            <VStack mt="20px" px="20px">
              {visitTypes?.map((visitType) => (
                <VisitType
                  key={visitType.id}
                  id={visitType.id}
                  name={visitType.name}
                  price={visitType.price}
                />
              ))}
            </VStack>
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
