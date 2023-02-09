import Head from "next/head";
import { Layout } from "components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Email Sandbox</title>
        <meta name="description" content="Email Sandbox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
}
