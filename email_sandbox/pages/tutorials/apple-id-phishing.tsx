import Head from "next/head";
import { Layout } from "@/components/Layout";

export default function Puzzle() {
  return (
    <>
      <Head>
        <title>Apple ID Phishing</title>
        <meta name="description" content="Email Sandbox" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout showMessageList={false} defaultMessageId={2} />
    </>
  );
}
