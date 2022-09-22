import type { AppProps } from "next/app";
import { AuthenticationGuard } from "../features/login/components/AuthenticationGuard";
import { Layout } from "../features/navigation/components/Layout";
import { CombinedProvider } from "../providers/wrapper";

function MyApp({ Component }: AppProps) {
  return (
    <CombinedProvider>
      <AuthenticationGuard>
        <Layout>
          <Component />
        </Layout>
      </AuthenticationGuard>
    </CombinedProvider>
  );
}

export default MyApp;
