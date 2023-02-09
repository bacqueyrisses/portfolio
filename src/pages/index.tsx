import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";

import localFont from "@next/font/local";
const gooperFont = localFont({ src: "./../../public/fonts/gooper.ttf" });
const gooperLightFont = localFont({
  src: "./../../public/fonts/gooperlight.ttf",
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Enzo Bacqueyrisses / JavaScript Developer</title>
        <meta
          name="description"
          content="Full Stack JavaScript Developer living in Bordeaux / Node.JS & React."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className={"mt-16 text-3xl sm:text-4xl"}>
          <div className={"max-w-[86%] font-medium sm:max-w-[84%]"}>
            Hi, I’m Enzo! <br />A{" "}
            <span className={gooperFont.className}>Web Developer</span>
            <br /> living in{" "}
            <span className={gooperFont.className}>Bordeaux</span> with
            <br />
            skills in ✦ <span className={gooperFont.className}>
              JavaScript
            </span>{" "}
            ✦
          </div>

          <div className={"mt-5 max-w-[85%] text-sm"}>
            My goal is to create{" "}
            <span className={"link-underline-black link-underline italic"}>
              optimized
            </span>{" "}
            and{" "}
            <span className={"link-underline-black link-underline italic"}>
              beautiful
            </span>{" "}
            websites using the latest technologies in the{" "}
            <span className={"link-underline-black link-underline italic"}>
              JavaScript ecosystem
            </span>
            .
          </div>
          <div
            className={
              "mt-5 flex max-w-[90%] flex-wrap gap-3 text-sm font-medium"
            }
          >
            <a
              href={"htpps://www.google.com"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "basis-1/3 rounded-xl border border-black py-1 px-2 text-center hover:bg-black hover:italic hover:text-[#e1e6de]"
              }
            >
              Express.JS
            </a>
            <a
              href={"htpps://www.google.com"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "basis-1/3 rounded-xl border border-black py-1 px-2 text-center hover:bg-black hover:italic hover:text-[#e1e6de]"
              }
            >
              Next.JS
            </a>
            <a
              href={"htpps://www.google.com"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "basis-1/3 rounded-xl border border-black py-1 px-2 text-center hover:bg-black hover:italic hover:text-[#e1e6de]"
              }
            >
              React.JS
            </a>
            <a
              href={"htpps://www.google.com"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "basis-1/3 rounded-xl border border-black py-1 px-2 text-center hover:bg-black hover:italic hover:text-[#e1e6de]"
              }
            >
              Tailwind CSS
            </a>
          </div>
          <Image
            className={"absolute top-8 -right-[7.9rem]"}
            src={"/images/logo.png"}
            alt={"logo enzo bacqueyrisses"}
            width={"330"}
            height={"320"}
          />
        </section>

        <hr className={"mt-10 border-black"} />

        <section className={"mt-10"}>
          <div className={"mt-5 flex max-w-[70%] flex-wrap gap-3 text-sm"}>
            <span
              className={
                "basis-1/3 rounded-xl border bg-black py-1 px-2 text-center text-[#e1e6de]"
              }
            >
              Projects
            </span>
          </div>
          <div className={"mt-5 text-xl font-semibold"}>
            <span className={gooperFont.className}>Click</span> to get more more
            details
          </div>
          <div className={"text-sm"}>
            I make apps for fun, always working on the best{" "}
            <span className={"italic"}>code architecture</span> possible.
          </div>
          <div className={"mt-5 flex gap-5"}>
            <a
              href={"https://www.google.fr"}
              className={
                "flex h-[150px] basis-1/3 flex-col items-center justify-center border border-black text-2xl hover:rounded-xl hover:bg-black hover:text-[#e1e6de]"
              }
            >
              <span>Garaikunde</span>
              <span>🌶️</span>
            </a>
            <a
              href={"https://www.google.fr"}
              className={
                "flex h-[150px] basis-1/3 flex-col items-center justify-center border border-black text-2xl hover:rounded-xl hover:bg-black hover:text-[#e1e6de]"
              }
            >
              <span>Herbal</span>
              <span>🌿</span>
            </a>
            <a
              href={"https://www.google.fr"}
              className={
                "flex h-[150px] basis-1/3 flex-col items-center justify-center border border-black text-2xl hover:rounded-xl hover:bg-black hover:text-[#e1e6de]"
              }
            >
              <span>Wordy</span>
              <span>📔</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
