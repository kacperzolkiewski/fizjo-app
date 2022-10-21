import { VStack } from "@chakra-ui/react";
import React from "react";
import { User } from "./User";

interface UsersListProps {
  users?: Array<{ name: string; surname: string }>;
}

export const UsersList = ({ users }: UsersListProps): JSX.Element => {
  return (
    <VStack mt="10px">
      {users?.map((user, index) => (
        <User key={index} w="330px" name={user.name} surname={user.surname} />
      ))}
    </VStack>
  );
};
