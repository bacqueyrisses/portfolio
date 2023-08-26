import { Html, Head, Main, NextScript } from "next/document";
import { satoshiFont } from "@/styles/fonts";

export default function Document() {
  return (
    <Html lang="en" className={"scroll-smooth bg-secondary dark:bg-primary"}>
      <Head />
      <body
        className={`bg-secondary px-6 text-black dark:bg-primary dark:text-secondary lg:px-36`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
