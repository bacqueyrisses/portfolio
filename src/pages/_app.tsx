import type { AppProps } from "next/app";
import "@/styles/globals.css";

import localFont from "@next/font/local";
const satoshiFont = localFont({
  src: "./../../public/fonts/satoshi.ttf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${satoshiFont.className}
        relative h-screen overflow-x-hidden bg-[#e1e6de] p-7`}
    >
      <Component {...pageProps} />
    </main>
  );
}
