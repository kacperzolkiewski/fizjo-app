import React, { PropsWithChildren } from "react";
import { BackendProvider } from "./backend";
import { UIProvider } from "./ui/wrapper";

export const CombinedProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return (
    <BackendProvider>
      <UIProvider>{children}</UIProvider>
    </BackendProvider>
  );
};
