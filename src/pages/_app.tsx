import "~/styles/globals.css";
import { type AppType } from "next/dist/shared/lib/utils";
import { Roboto } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
};

export default MyApp;
