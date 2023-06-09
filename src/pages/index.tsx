// Next
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// React libraries
import { Link } from "react-scroll";

// Font
import localFont from "@next/font/local";
import Project from "@/components/Project";
import { technologies } from "@/data/technologies";
import { projects } from "@/data/projects";
import Technology from "@/components/Technology";
const gooperFont = localFont({ src: "./../../public/fonts/gooper.ttf" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Enzo Bacqueyrisses / JavaScript Developer</title>
        <meta
          name="description"
          content="Full Stack JavaScript Developer living in Bordeaux / Node.JS & React.JS"
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
            Hi, I’m Enzo! <br />A
            <span className={gooperFont.className}>Web Developer</span>
            <br /> living in
            <span className={gooperFont.className}>Bordeaux</span> with skills
            in ✦ <span className={gooperFont.className}>JavaScript</span> ✦
          </div>
          <div className={"hidden text-6xl font-medium sm:block"}>
            Hi, I’m Enzo! <br />A
            <span className={gooperFont.className}>Web Developer </span>
            <br />
            living in <span className={gooperFont.className}>Bordeaux</span>
            <br />
            with skills in ✦
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
            {technologies.map((technology) => (
              <Technology technology={technology} key={technology.id} />
            ))}
          </div>
        </section>
        <hr className={"mt-10 border-black dark:border-secondary"} />
        <section className={"mt-10"}>
          <div className={"mt-5 gap-3 text-sm"}>
            <Link
              to="projects"
              smooth={true}
              duration={0}
              className={
                "group inline-flex cursor-pointer items-center rounded-xl bg-black px-4 py-1.5 font-medium text-secondary transition dark:bg-secondary dark:text-black md:text-base"
              }
            >
              Projects
              <svg
                className="-mr-1 ml-2 mt-1.5 stroke-secondary stroke-2 dark:stroke-black md:mt-[0.45rem]"
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
          <div className={"mt-5 text-lg font-medium"}>
            Click to get more details.
          </div>
          <div className={"text-[0.95rem] leading-6 md:text-lg"}>
            I make apps for fun, always working on the best{" "}
            <span className={"italic"}>code architecture</span> possible.
          </div>

          <div
            className={"mb-12 mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"}
            id={"projects"}
          >
            {projects.map((project, index) => (
              <Project project={project} key={index} />
            ))}
          </div>
        </section>
        <hr className={"mt-10 border-black dark:border-secondary"} />
        <Footer />
      </main>
    </>
  );
}
