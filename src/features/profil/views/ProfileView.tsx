import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { useUserData } from "@nhost/react";
import React from "react";
import { Profile } from "../components/Profile";

export const ProfileView = () => {
  const user = useUserData();

  return (
    <Flex h="100vh" p="20px" justifyContent="center" alignItems="center">
      <Box
        w="90%"
        h="90%"
        rounded={5}
        boxShadow="3px 1px 25px -12px rgba(66, 68, 90, 1)"
        overflow="hidden"
        padding="20px"
        bg="white"
      >
        <Profile
          name={user?.metadata.name as string}
          surname={user?.metadata.surname as string}
          email={user?.email as string}
        />
      </Box>
    </Flex>
  );
};
