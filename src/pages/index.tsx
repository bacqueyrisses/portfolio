// Next
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// React libraries
import { Link, animateScroll } from "react-scroll";
import styles from "@/styles/Home.module.css";

// Fonts
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
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
      </Head>

      <Header />
      <main className={""}>
        <section
          className={
            "mt-14 text-[1.69rem] leading-[2.1rem] sm:text-4xl md:text-5xl"
          }
        >
          <div className={"font-medium sm:hidden"}>
            Hi, I’m Enzo! <br />A{" "}
            <span className={gooperFont.className}>Web Developer</span>
            <br /> living in{" "}
            <span className={gooperFont.className}>Bordeaux</span> with skills
            in ✦ <span className={gooperFont.className}>JavaScript</span> ✦
          </div>
          <div className={"hidden text-6xl font-medium sm:block"}>
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

          <div className={"mt-5 text-[0.95rem] leading-6 md:text-lg"}>
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
              "mt-5 flex flex-wrap justify-start gap-3 text-sm font-medium md:text-base"
            }
          >
            <a
              href={"https://expressjs.com/fr/"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "w-28 rounded-xl border-2 border-black px-4 py-1.5 text-center transition hover:-skew-x-6 hover:bg-black hover:text-secondary dark:border-secondary dark:hover:bg-secondary dark:hover:text-black md:w-32"
              }
            >
              Express.JS
            </a>
            <a
              href={"https://nextjs.org"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "w-28 rounded-xl border-2 border-black py-1.5 px-4 text-center transition hover:-skew-x-6 hover:bg-black hover:text-secondary dark:border-secondary dark:hover:bg-secondary dark:hover:text-black md:w-32"
              }
            >
              Next.JS
            </a>
            <a
              href={"https://fr.reactjs.org"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "w-28 rounded-xl border-2 border-black px-4 py-1.5 text-center transition hover:-skew-x-6 hover:bg-black hover:text-secondary dark:border-secondary dark:hover:bg-secondary dark:hover:text-black md:w-32"
              }
            >
              React.JS
            </a>
            <a
              href={"https://www.tailwindcss.com"}
              target={"_blank"}
              rel="noreferrer"
              className={
                "w-28 whitespace-nowrap rounded-xl border-2 border-black px-4 py-1.5 text-center transition hover:-skew-x-6 hover:bg-black hover:text-secondary dark:border-secondary dark:hover:bg-secondary dark:hover:text-black md:w-32"
              }
            >
              Tailwind CSS
            </a>
          </div>
        </section>
        <hr className={"mt-10 border-black dark:border-secondary"} />
        <section className={"mt-10"}>
          <div className={"mt-5 gap-3 text-sm"}>
            <Link
              to="projects"
              className={
                "group inline-flex cursor-pointer items-center rounded-xl bg-black py-1.5 px-4 font-medium text-secondary transition dark:bg-secondary dark:text-black md:text-base md:hover:bg-[#232b2b] dark:md:hover:bg-secondary"
              }
            >
              Projects
              <svg
                className="mt-1.5 ml-2 -mr-1 stroke-secondary stroke-2 dark:stroke-black md:mt-[0.45rem]"
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
            Click to get more details
          </div>
          <div className={"text-[0.95rem] leading-6 md:text-lg"}>
            I make apps for fun, always working on the best{" "}
            <span className={"italic"}>code architecture</span> possible.
          </div>

          <div className={"mt-12 mb-12 grid grid-cols-1 gap-5 md:grid-cols-3"}>
            <a
              href="https://github.com/bacqueyrisses/garaikunde"
              className={
                "group flex flex-col justify-center rounded-3xl border-2 border-black px-4 py-5 transition hover:rounded-3xl md:border-transparent md:hover:border-2 md:hover:border-black md:dark:hover:border-secondary"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-2.5 font-semibold ${inter.className}`}>
                Garaikunde{" "}
                <span
                  className={`inline-block transform font-semibold transition group-hover:translate-x-1 ${inter.className}`}
                >
                  -&gt;
                </span>
              </h2>
              <p className={"mb-2.5 text-sm opacity-70"}>
                An e-commerce website for spices and natural plants to designed
                to give more flexibility to customers flexibility to customers.
              </p>
              <p
                className={
                  "text-sm opacity-70 transition group-hover:opacity-100"
                }
              >
                Next.JS + React.JS + Tailwind CSS
              </p>
            </a>

            <a
              href="https://github.com/bacqueyrisses/"
              className={
                "group flex flex-col justify-center rounded-3xl border-2 border-black px-4 py-5 transition hover:rounded-3xl md:border-transparent md:hover:border-2 md:hover:border-black md:dark:hover:border-secondary"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-2.5 font-semibold ${inter.className}`}>
                Devzone{" "}
                <span
                  className={`inline-block transform font-semibold transition group-hover:translate-x-1 ${inter.className}`}
                >
                  -&gt;
                </span>
              </h2>
              <p className={"mb-2.5 text-sm opacity-70"}>
                Get a custom dashboard with all the information you need on a
                daily basis as a developer basis as a developer.
              </p>
              <p
                className={
                  "text-sm opacity-70 transition group-hover:opacity-100"
                }
              >
                Express.JS API
              </p>
            </a>

            <a
              href="https://github.com/bacqueyrisses/"
              className={
                "group flex flex-col justify-center rounded-3xl border-2 border-black px-4 py-5 transition hover:rounded-3xl md:border-transparent md:hover:border-2 md:hover:border-black md:dark:hover:border-secondary"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-2.5 font-semibold ${inter.className}`}>
                Wordhand{" "}
                <span
                  className={`inline-block transform font-semibold transition group-hover:translate-x-1 ${inter.className}`}
                >
                  -&gt;
                </span>
              </h2>
              <p className={"mb-2.5 text-sm opacity-70"}>
                Expand your vocabulary, discover new words and get acceess to
                your favorites ones easily, all in one place all in one place.
              </p>
              <p
                className={
                  "text-sm opacity-70 transition group-hover:opacity-100"
                }
              >
                Next.JS + React.JS + Tailwind CSS
              </p>
            </a>
          </div>
        </section>
        <hr className={"mt-10 border-black dark:border-secondary"} />
        <Footer />
      </main>
    </>
  );
}
