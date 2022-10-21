import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { VisitDeleteModal } from "./DeleteVisitModal";
import React from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const VisitMenu = ({ rowId }: { rowId?: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            onDeleteVisit={() => {}}
          />
        </MenuItem>
        <MenuItem>więcej</MenuItem>
      </MenuList>
    </Menu>
  );
};
