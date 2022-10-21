import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  IconButton,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useSignOut } from "@nhost/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { SignOutModal } from "@/features/navigation/components/SignOutModal";

const AnimatedFlex = motion(Flex);
const AnimatedStack = motion(Stack);

export const NavigationBar = ({
  isExpanded,
  toggleExpanded,
}: {
  isExpanded: boolean;
  toggleExpanded: () => void;
}): JSX.Element => {
  const { signOut } = useSignOut();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { push } = useRouter();

  const iconViewboxWidth = "56px";
  const navWidth = "256px";

  const navVariants = {
    expanded: { width: navWidth },
    shrinked: { width: "104px" },
  };
  const stackVariants = {
    expanded: { width: "156px" },
    shrinked: { width: iconViewboxWidth },
  };
  const currentVariant = isExpanded ? "expanded" : "shrinked";

  return (
    <AnimatedFlex
      as="nav"
      position="fixed"
      left={0}
      top={0}
      flexDir="column"
      justifyContent="space-between"
      h="100vh"
      p="24px"
      backgroundColor="purple.500"
      initial={{ width: navWidth }}
      variants={navVariants}
      animate={currentVariant}
    >
      <IconButton
        aria-label={
          isExpanded ? "Zwiń menu nawigacji" : "Rozwiń menu nawigacji"
        }
        icon={<HamburgerIcon />}
        alignSelf="flex-end"
        w={iconViewboxWidth}
        onClick={toggleExpanded}
      />
      <AnimatedStack
        spacing="12px"
        mt="27px"
        flexGrow={1}
        variants={stackVariants}
        animate={currentVariant}
      >
        <Button
          onClick={() => {
            void push("/");
          }}
        >
          Strona główna
        </Button>
        <Button
          onClick={() => {
            void push("/visits");
          }}
        >
          Wizyty
        </Button>
        <Button
          onClick={() => {
            void push("/profil");
          }}
        >
          Profil
        </Button>
        <Button
          onClick={() => {
            void push("/messenger");
          }}
        >
          Wiadomości
        </Button>
      </AnimatedStack>
      <AnimatedStack
        spacing="8px"
        variants={stackVariants}
        animate={currentVariant}
      >
        <Button onClick={onOpen}>Wyloguj</Button>
        <SignOutModal
          isOpen={isOpen}
          onClose={onClose}
          onSignOut={() => {
            void signOut();
          }}
        />
      </AnimatedStack>
    </AnimatedFlex>
  );
};
