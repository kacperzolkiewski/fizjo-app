import { NhostClient } from "@nhost/react";

export const NHOST_CONFIG = {
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN ?? "localhost",
  region: process.env.REACT_APP_NHOST_REGION,
};

export const nhost = new NhostClient({
  ...NHOST_CONFIG,
});
