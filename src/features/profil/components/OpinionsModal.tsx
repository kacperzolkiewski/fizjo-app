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
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Opinion } from "../../home/components/Opinion";
import { ProfilPropertyBox } from "../../../components/ProfilPropertyBox";
import { useOpinionsQuery } from "../../../api/graphql";
import { isUndefined, reverse } from "lodash";
import { useState } from "react";

interface OpinionsModalProps {
  physiotherapist_id?: string;
  addOpinion?: (comment: string) => void;
}

export const OpinionsModal = ({
  physiotherapist_id,
  addOpinion,
}: OpinionsModalProps) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [opinion, setOpinion] = useState("");
  const { data, refetch } = useOpinionsQuery({
    variables: { physiotherapist_id: physiotherapist_id },
  });
  const opinions = data?.opinions ?? [];
  const opinionsLength = opinions.length;

  return (
    <Box>
      <ProfilPropertyBox
        label="Opinie"
        propertyValue={`${opinionsLength} opinii`}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
        <ModalOverlay />
        <ModalContent h="100vh" p="32px" m={0} fontSize="18px" boxShadow="xl">
          <ModalCloseButton _hover={{ bg: "none" }} m="20px" />
          <ModalHeader h="10%" fontSize="30px">
            Opinie
          </ModalHeader>
          <ModalBody px="0" h="70%">
            {addOpinion ? (
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
                    refetch();
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
                maxH="600px"
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
