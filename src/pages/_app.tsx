import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { satoshiFont } from "@/styles/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${satoshiFont.className} relative`}>
      <Component {...pageProps} />
    </main>
  );
}
