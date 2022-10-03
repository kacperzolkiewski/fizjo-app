import { EditIcon } from "@chakra-ui/icons";
import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { EditPatientModal } from "../features/profil/components/EditPatientModal";

interface GridTextProps {
  label: string;
  value: string;
}

export const GridText = ({ label, value }: GridTextProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex width="70%" borderBottom="1px solid lightgray" alignItems="center">
      <Text fontSize="20px" w="100%" padding="5px">
        <strong style={{ marginRight: "10px" }}>{label}:</strong> {value}
      </Text>
      <EditIcon w="30px" h="30px" onClick={onOpen} cursor="pointer" />
      <EditPatientModal
        editValue={label}
        isOpen={isOpen}
        onClose={onClose}
        onEditUser={() => {}}
      />
    </Flex>
  );
};
