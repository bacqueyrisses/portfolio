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
        <meta name="theme-color" content="#e0e5df" />
      </Head>

      <Header />
      <main className={""}>
        <section className={"mt-16 text-[1.31rem] sm:text-4xl"}>
          <div className={"max-w-[86%] font-semibold sm:max-w-[84%]"}>
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

          <div className={"mt-5 max-w-[84%] text-sm"}>
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
              JavaScript ecosystem.
            </span>
          </div>
          <div
            className={
              "mt-5 flex max-w-[90%] flex-wrap justify-start gap-3 text-sm font-medium"
            }
          >
            <a
              href={"htpps://www.google.com"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "w-28 rounded-xl border border-black px-4 py-1 text-center hover:bg-black hover:italic hover:text-[#e1e6de]"
              }
            >
              Express.JS
            </a>
            <a
              href={"htpps://www.google.com"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "w-28 rounded-xl border border-black py-1 px-4 text-center hover:bg-black hover:italic hover:text-[#e1e6de]"
              }
            >
              Next.JS
            </a>
            <a
              href={"htpps://www.google.com"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "w-28 rounded-xl border border-black px-4 py-1 text-center hover:bg-black hover:italic hover:text-[#e1e6de]"
              }
            >
              React.JS
            </a>
            <a
              href={"htpps://www.google.com"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "w-28 whitespace-nowrap  rounded-xl border border-black px-4 py-1 text-center hover:bg-black hover:italic hover:text-[#e1e6de]"
              }
            >
              Tailwind CSS
            </a>
          </div>
          <Image
            className={"absolute top-8 -right-[9.3rem] sm:-right-[7.9rem]"}
            src={"/images/logo.png"}
            alt={"logo enzo bacqueyrisses"}
            width={"330"}
            height={"320"}
          />
        </section>

        <hr className={"mt-10 border-black"} />

        <section className={"mt-10"}>
          <div className={"mt-5 flex max-w-[70%] flex-wrap gap-3 text-sm"}>
            <div
              className={
                "w-28 rounded-xl border bg-black px-4 py-1 text-center text-[#e1e6de]"
              }
            >
              Projects
            </div>
          </div>
          <div className={"mt-5 text-xl font-semibold"}>
            <span className={gooperFont.className}>Click</span> to get more more
            details
          </div>
          <div className={"text-sm"}>
            I make apps for fun, always working on the best{" "}
            <span className={"italic"}>code architecture</span> possible.
          </div>
          <div className={"mt-10 flex gap-5"}>
            <div className={"basis-1/3 text-center text-4xl"}>🌶️</div>
            <div className={"basis-1/3 text-center text-4xl"}>🌿</div>
            <div className={"basis-1/3 text-center text-4xl"}>📔</div>
          </div>
        </section>
      </main>
    </>
  );
}
