import { NhostReactProvider } from "@nhost/react";
import { NhostApolloProvider } from "@nhost/react-apollo";
import type { PropsWithChildren } from "react";
import React from "react";

import { nhost } from "../utilities/nhost";

export const BackendProvider = ({
  children,
}: PropsWithChildren): JSX.Element => (
  <NhostReactProvider nhost={nhost}>
    <NhostApolloProvider nhost={nhost}>{children}</NhostApolloProvider>
  </NhostReactProvider>
);
