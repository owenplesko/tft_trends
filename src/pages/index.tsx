import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import AugmentTable from "~/components/augmentTable";
import { getAugmentStats } from "~/database/augmentStats";
import { type AugmentStats } from "~/types/augmentStats";

export const getServerSideProps = (async () => {
  const augmentStats = await getAugmentStats();
  return {
    props: {
      augmentStats,
    },
  };
}) satisfies GetServerSideProps<{ augmentStats: AugmentStats[] }>;

export default function Home({
  augmentStats,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>TFT Trends</title>
        <meta name="description" content="TFT Stats" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-col items-center bg-neutral-900">
        <div className="flex w-[1200px] flex-col items-stretch p-32">
          <AugmentTable data={augmentStats} />
        </div>
      </main>
    </>
  );
}
