import type { AppProps } from "next/app";
import { CombinedProvider } from "../providers/wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CombinedProvider>
      <Component {...pageProps} />
    </CombinedProvider>
  );
}

export default MyApp;
