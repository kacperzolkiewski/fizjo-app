import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Opinion } from "../../home/components/Opinion";
import { ProfilPropertyBox } from "./ProfilPropertyBox";

export const OpinionsModal = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Box>
      <ProfilPropertyBox
        property="Opinie"
        propertyValue="34 opinii"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent h="100vh" p="32px" m={0} fontSize="18px" boxShadow="xl">
          <ModalCloseButton _hover={{ bg: "none" }} m="20px" />
          <ModalHeader h="10%" fontSize="30px">
            Twoje Opinie
          </ModalHeader>
          <ModalBody px="0" h="70%">
            <VStack spacing={4} maxH="100%" overflow="scroll">
              <Opinion
                name="Kacper"
                surname="Żółkiewski"
                opinion="Wizyta przebiegła w bardzo pozytywnej atmosferze. Daniel jest
              profesjonalistą w swoim fachu. Polecam!!! ssssssssssssss zsdasdas
              asdasdasd"
                date="22.07.2022"
              />
              <Opinion
                name="Kacper"
                surname="Żółkiewski"
                opinion="Wizyta przebiegła w bardzo pozytywnej atmosferze. Daniel jest
              profesjonalistą w swoim fachu. Polecam!!! ssssssssssssss zsdasdas
              asdasdasd"
                date="22.07.2022"
              />
              <Opinion
                name="Kacper"
                surname="Żółkiewski"
                opinion="Wizyta przebiegła w bardzo pozytywnej atmosferze. Daniel jest
              profesjonalistą w swoim fachu. Polecam!!! ssssssssssssss zsdasdas
              asdasdasd"
                date="22.07.2022"
              />
              <Opinion
                name="Kacper"
                surname="Żółkiewski"
                opinion="Wizyta przebiegła w bardzo pozytywnej atmosferze. Daniel jest
              profesjonalistą w swoim fachu. Polecam!!! ssssssssssssss zsdasdas
              asdasdasd"
                date="22.07.2022"
              />
              <Opinion
                name="Kacper"
                surname="Żółkiewski"
                opinion="Wizyta przebiegła w bardzo pozytywnej atmosferze. Daniel jest
              profesjonalistą w swoim fachu. Polecam!!! ssssssssssssss zsdasdas
              asdasdasd"
                date="22.07.2022"
              />
              <Opinion
                name="Kacper"
                surname="Żółkiewski"
                opinion="Wizyta przebiegła w bardzo pozytywnej atmosferze. Daniel jest
              profesjonalistą w swoim fachu. Polecam!!! ssssssssssssss zsdasdas
              asdasdasd"
                date="22.07.2022"
              />
            </VStack>
          </ModalBody>

          <ModalFooter h="10%" alignItems="flex-end" px={0}>
            <Button w="100%" onClick={onClose} colorScheme="purple">
              Wróć
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
