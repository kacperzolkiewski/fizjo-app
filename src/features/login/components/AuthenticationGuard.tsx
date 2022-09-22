import { useAuthenticationStatus } from "@nhost/react";
import React from "react";
import { StartView } from "../../start";

export const AuthenticationGuard = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();

  return isLoading ? null : isAuthenticated ? children : <StartView />;
};
