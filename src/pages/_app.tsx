import "~/styles/globals.css";
import { type AppType } from "next/dist/shared/lib/utils";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
