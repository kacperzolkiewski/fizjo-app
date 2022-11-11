import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { VisitDeleteModal } from "@/features/visits/components/DeleteVisitModal";
import React from "react";
import {
  PatientVisitsDocument,
  PhysiotherapistVisitsDocument,
  useCancelVisitMutation,
} from "@/features/visits/api/graphql";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const VisitMenu = ({ visitId }: { visitId?: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showToast = useToast();
  const [cancelVisit] = useCancelVisitMutation({
    onCompleted() {
      showToast({
        status: "success",
        title: "Pomyślnie odwołano wizytę",
      });
    },

    onError(error) {
      console.log(error);
      showToast({
        status: "error",
        title: "Odwołanie wizyty nie powiodło się, spróbuj ponownie",
      });
    },
  });

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon height="24px" w="24px" />}
        variant="ghost"
        border="none"
        _hover={{ bg: "none" }}
        _active={{ bg: "none" }}
        aria-label="Więcej działań"
        size="xs"
      />
      <MenuList>
        <MenuItem onClick={onOpen}>
          odwołaj wizytę
          <VisitDeleteModal
            isOpen={isOpen}
            onClose={onClose}
            onDeleteVisit={() => {
              void cancelVisit({
                refetchQueries: [
                  PatientVisitsDocument,
                  PhysiotherapistVisitsDocument,
                ],
                variables: { id: visitId },
              });
            }}
          />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
