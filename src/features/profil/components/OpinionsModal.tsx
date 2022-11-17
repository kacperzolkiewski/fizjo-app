import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Opinion } from "@/features/home/components/Opinion";
import { ProfilPropertyBox } from "@/components/ProfilPropertyBox";
import { useOpinionsQuery } from "@/api/graphql";
import { isUndefined } from "lodash";
import React, { useState } from "react";
import { faComments } from "@fortawesome/free-regular-svg-icons";

interface OpinionsModalProps {
  physiotherapistId?: string;
  addOpinion?: (comment: string) => void;
}

export const OpinionsModal = ({
  physiotherapistId,
  addOpinion,
}: OpinionsModalProps): JSX.Element => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [opinion, setOpinion] = useState("");
  const { data } = useOpinionsQuery({
    variables: { physiotherapist_id: physiotherapistId },
  });
  const opinions = data?.opinions ?? [];
  const opinionsLength = opinions.length;

  return (
    <Box>
      <ProfilPropertyBox
        label="Opinie"
        propertyValue={`${opinionsLength} opinii`}
        onClick={onOpen}
        icon={faComments}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent h="100vh" p="32px" m={0} fontSize="18px" boxShadow="xl">
          <ModalCloseButton _hover={{ bg: "none" }} m="20px" />
          <ModalHeader h="10%" fontSize="30px">
            Opinie
          </ModalHeader>
          <ModalBody px="0" h="70%">
            {addOpinion != null ? (
              <Flex flexDir="column">
                <Textarea
                  value={opinion}
                  onChange={(e) => setOpinion(e.target.value)}
                  placeholder="Bardzo dobry fizjoterapeuta polecam..."
                />
                <Button
                  my="10px"
                  onClick={() => {
                    addOpinion(opinion);
                    setOpinion("");
                  }}
                >
                  Dodaj Opinię
                </Button>
              </Flex>
            ) : null}
            {!isUndefined(opinionsLength) && opinionsLength > 0 ? (
              <VStack
                flexDir="column"
                spacing={4}
                maxH="500px"
                overflow="scroll"
              >
                {opinions.map((opinion) => (
                  <Opinion key={opinion.id} opinion={opinion} />
                ))}
              </VStack>
            ) : (
              <Center mt={40}>
                <Heading>Brak opinii</Heading>
              </Center>
            )}
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
