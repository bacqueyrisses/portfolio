import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { satoshiFont } from "@/styles/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      enableSystem={false}
      defaultTheme={"light"}
      attribute={"class"}
    >
      <main
        className={`${satoshiFont.className}
        relative p-6 pb-14 pt-6 md:px-28 lg:px-36`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
