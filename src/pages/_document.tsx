import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className={"scroll-smooth bg-secondary dark:bg-primary"}>
      <Head>
        <meta name="theme-color" content="#E1E6DE" />
      </Head>
      <body
        className={`bg-secondary px-6 text-black dark:bg-primary dark:text-secondary lg:px-36`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
