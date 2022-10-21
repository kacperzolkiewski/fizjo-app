import { Box } from "@chakra-ui/react";
import { motion, useCycle } from "framer-motion";
import Head from "next/head";
import type { PropsWithChildren } from "react";
import { NavigationBar } from "./NavigationBar";
import React from "react";

const AnimatedBox = motion(Box);

export const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  const [isNavbarExpanded, cycleNavbarExpanded] = useCycle(true, false);

  return (
    <>
      <Head>
        <title>Znany Fizjo</title>
      </Head>
      <AnimatedBox
        animate={{ paddingLeft: isNavbarExpanded ? "266px" : "120px" }}
        layout="position"
        bg="#F5F5F5"
      >
        <NavigationBar
          isExpanded={isNavbarExpanded}
          toggleExpanded={cycleNavbarExpanded}
        />
        {children}
      </AnimatedBox>
    </>
  );
};
