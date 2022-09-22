import { Flex, Heading, VStack } from "@chakra-ui/react";
import { useUserData } from "@nhost/react";
import React from "react";
import { Profile } from "../components/Profile";
import { ProfileInfo } from "../components/ProfileInfo";

export const ProfileView = () => {
  const user = useUserData();
  console.log(user);
  return (
    <>
      <Flex>
        <Profile
          name={user?.metadata.name as string}
          surname={user?.metadata.surname as string}
          email={user?.email as string}
        />
        <VStack>
          <Heading>Informacje</Heading>
          <ProfileInfo />
        </VStack>
      </Flex>
    </>
  );
};
