import { VStack } from "@chakra-ui/react";
import React from "react";
import { User } from "./User";

interface UsersListProps {
  users?: Array<{ name: string; surname: string }>;
}

export const UsersList = ({ users }: UsersListProps) => {
  //   return users.map((user) => <User name={user.name} surname={user.surname} />);
  return (
    <VStack mt="10px">
      {/* <User name="kacper" surname="zolkiewski" />
      <User name="kacper" surname="zolkiewski" />
      <User name="kacper" surname="zolkiewski" /> */}
    </VStack>
  );
};
