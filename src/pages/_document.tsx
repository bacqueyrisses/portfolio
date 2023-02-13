import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className={"scroll-smooth bg-secondary dark:bg-[#28282b]"}>
      <Head />
      <body
        className={
          "bg-secondary text-black dark:bg-[#28282b] dark:text-secondary"
        }
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
