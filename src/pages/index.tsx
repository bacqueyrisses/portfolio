import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";

import Link from "next/link";
import Footer from "@/components/Footer";
import localFont from "@next/font/local";
const gooperFont = localFont({ src: "./../../public/fonts/gooper.ttf" });

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
        <section
          className={
            "mt-14 text-[1.69rem] leading-[2.1rem] sm:text-4xl md:text-5xl"
          }
        >
          <div className={"font-medium text-black sm:hidden"}>
            Hi, I’m Enzo! <br />A{" "}
            <span className={gooperFont.className}>Web Developer</span>
            <br /> living in{" "}
            <span className={gooperFont.className}>Bordeaux</span> with skills
            in ✦ <span className={gooperFont.className}>JavaScript</span> ✦
          </div>
          <div className={"hidden text-6xl font-medium text-black sm:block"}>
            Hi, I’m Enzo! <br />A{" "}
            <span className={gooperFont.className}>Web Developer </span>
            <br />
            living in <span className={gooperFont.className}>
              Bordeaux
            </span>{" "}
            <br />
            with skills in ✦{" "}
            <span className={gooperFont.className}>JavaScript</span> ✦
          </div>

          <div className={"mt-5 text-sm md:text-lg"}>
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
              "mt-5 flex max-w-[90%] flex-wrap justify-start gap-3 text-sm font-medium md:text-base"
            }
          >
            <a
              href={"https://expressjs.com/fr/"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "w-28 rounded-xl border border-black px-4 py-1.5 text-center transition hover:bg-black hover:italic hover:text-[#e1e6de] md:w-32"
              }
            >
              Express.JS
            </a>
            <a
              href={"https://nextjs.org"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "w-28 rounded-xl border border-black py-1.5 px-4  text-center transition hover:bg-black hover:italic hover:text-[#e1e6de] md:w-32"
              }
            >
              Next.JS
            </a>
            <a
              href={"https://fr.reactjs.org"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "w-28 rounded-xl border border-black px-4 py-1.5 text-center transition hover:bg-black hover:italic hover:text-[#e1e6de] md:w-32"
              }
            >
              React.JS
            </a>
            <a
              href={"https://www.tailwindcss.com"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "w-28 whitespace-nowrap rounded-xl border border-black px-4 py-1.5 text-center transition hover:bg-black hover:italic hover:text-[#e1e6de] md:w-32"
              }
            >
              Tailwind CSS
            </a>
          </div>
        </section>

        <hr className={"mt-10 border-black"} />

        <section className={"mt-10"}>
          <div className={"mt-5 flex max-w-[70%] flex-wrap gap-3 text-sm"}>
            <Link
              href={"/"}
              className="group inline-flex items-center rounded-xl bg-black py-1.5 px-4 font-medium text-[#e1e6de] transition hover:bg-[#232b2b] md:text-base"
            >
              Projects
              <svg
                className="mt-1.5 ml-2 -mr-1 stroke-[#e1e6de] stroke-2 md:mt-[0.45rem]"
                fill="none"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
              >
                <path
                  className="origin-center rotate-90 opacity-0 transition group-hover:opacity-100"
                  d="M0 5h7"
                ></path>
                <path
                  className="origin-center rotate-90 transition group-hover:translate-y-[3px]"
                  d="M1 1l4 4-4 4"
                ></path>
              </svg>
            </Link>
          </div>
          <div className={"mt-5 text-xl font-medium"}>
            <span className={gooperFont.className}>Click</span> to get more more
            details
          </div>
          <div className={"text-sm md:text-lg"}>
            I make apps for fun, always working on the best{" "}
            <span className={"italic"}>code architecture</span> possible.
          </div>
          <div className={"mt-10 flex gap-5"}>
            <div className={"basis-1/3 text-center text-4xl"}></div>
            <div className={"basis-1/3 text-center text-4xl"}></div>
            <div className={"basis-1/3 text-center text-4xl"}></div>
          </div>
        </section>

        <hr className={"mt-10 border-black"} />

        <Footer />
      </main>
    </>
  );
}
