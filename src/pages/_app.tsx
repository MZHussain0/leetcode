import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LeetCode</title>t
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="Web applications that contains leetcode problems and solutions"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
