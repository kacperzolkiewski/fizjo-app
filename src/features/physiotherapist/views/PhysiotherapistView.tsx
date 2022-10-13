import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { PhysiotherapistProfile } from "../components/PhysiotherapistProfile";

export const PhysiotherapistView = () => {
  const router = useRouter();
  const { id } = router.query;

  return <PhysiotherapistProfile />;
};
