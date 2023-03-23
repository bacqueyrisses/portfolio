import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className={"scroll-smooth bg-secondary dark:bg-primary"}>
      <Head />
      <body
        className={
          "bg-secondary text-black dark:bg-primary dark:text-secondary"
        }
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
