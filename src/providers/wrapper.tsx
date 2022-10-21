import React, { PropsWithChildren } from "react";
import { BackendProvider } from "@/providers/backend";
import { UIProvider } from "@/providers/ui/wrapper";

export const CombinedProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return (
    <BackendProvider>
      <UIProvider>{children}</UIProvider>
    </BackendProvider>
  );
};
