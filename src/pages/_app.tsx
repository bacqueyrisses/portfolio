import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

import localFont from "@next/font/local";
const satoshiFont = localFont({
  src: "./../../public/fonts/satoshi.ttf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} defaultTheme={"light"} attribute={"class"}>
      <main
        className={`${satoshiFont.className}
        relative p-6 pt-6 pb-14 md:px-40`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
