import { Box, Button, Text } from "@chakra-ui/react";
import AvatarImage from "@/assets/awatar.png";
import Image from "next/image";
import React from "react";

interface UserProps {
  name?: string;
  surname?: string;
  w: string;
  image?: string;
  onClick?: () => void;
  isNotification?: boolean;
}

export const User = ({
  name,
  surname,
  w,
  onClick,
  isNotification,
}: UserProps): JSX.Element => {
  return (
    <Button
      bg="white"
      pl="20px"
      alignItems="center"
      w={w}
      minH="65px"
      variant="outline"
      justifyContent="flex-start"
      onClick={() => {
        onClick?.();
      }}
    >
      <Image src={AvatarImage} width="50px" height="50px" />
      <Text fontSize="20px" pl="20px">
        {name} {surname}
      </Text>
      {isNotification === true ? (
        <Box
          w={3}
          h={3}
          bg="purple.500"
          borderRadius="50%"
          position="absolute"
          right={5}
        />
      ) : null}
    </Button>
  );
};
