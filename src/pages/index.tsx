import Head from "next/head";
import AugmentTable from "~/components/augmentTable";

export default function Home() {
  return (
    <>
      <Head>
        <title>TFT Trends</title>
        <meta name="description" content="TFT Stats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full flex-col items-center">
        <div className="flex w-[1200px] flex-col items-stretch gap-2 p-32">
          <AugmentTable />
        </div>
      </main>
    </>
  );
}
