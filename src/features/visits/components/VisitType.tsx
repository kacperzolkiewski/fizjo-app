import { VisitTypesDocument } from "@/features/physiotherapist/api/graphql";
import { usePhysiotherapistUpdateMutations } from "@/utilities/usePhysiotherapistUpdateMutations";
import { DeleteIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface VisitTypeProps {
  id: string;
  name: string;
  price: string;
  deleteIcon: boolean;
}

export const VisitType = ({
  name,
  price,
  deleteIcon,
  id,
}: VisitTypeProps): JSX.Element => {
  const { onDeleteVisitType } = usePhysiotherapistUpdateMutations();

  return (
    <Flex
      h="40px"
      w="100%"
      borderBottom="1px solid lightgray"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex>
        <Text>{` ${name}`}</Text>
        <Text ml="10px">{`- ${price}zł`}</Text>
      </Flex>
      {deleteIcon && (
        <DeleteIcon
          cursor="pointer"
          onClick={() => {
            void onDeleteVisitType({
              refetchQueries: [VisitTypesDocument],
              variables: { id },
            });
          }}
        />
      )}
    </Flex>
  );
};
