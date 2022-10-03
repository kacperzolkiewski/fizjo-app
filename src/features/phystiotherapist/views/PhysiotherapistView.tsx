import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const PhysiotherapistView = () => {
  const router = useRouter();
  const { id } = router.query;

  return <Flex minH="100vh" pl="20px"></Flex>;
};
