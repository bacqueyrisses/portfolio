import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import localFont from "@next/font/local";
import { projects } from "@/data/projects";
import Technology from "@/components/Technology";
import { technologies } from "@/data/technologies";

const gooperFont = localFont({ src: "./../../public/fonts/gooper.ttf" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Enzo Bacqueyrisses / TypeScript Developer</title>
        <meta
          name="description"
          content="Full Stack TypeScript Developer / React & NodeJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={"mt-20 flex flex-col gap-14 sm:mt-24 sm:gap-24"}>
        <section
          className={"text-[1.69rem] leading-[2.1rem] sm:text-4xl md:text-5xl"}
        >
          <div
            className={
              "flex flex-col gap-6 text-2xl font-medium sm:gap-10 sm:text-6xl"
            }
          >
            <div className={"sm:space-y-2"}>
              <div className={"text-xl sm:text-4xl"}>Hi, I’m Enzo!</div>
              <div>
                <div>
                  A<span className={gooperFont.className}> Web Developer </span>
                </div>
                <div className={"whitespace-nowrap"}>
                  with skills in ✦
                  <span className={gooperFont.className}> JavaScript</span> ✦
                </div>
              </div>
            </div>
            <div className={"space-y-2"}>
              <div
                className={
                  "w-10/12 text-lg font-medium sm:w-2/4 sm:text-2xl sm:font-normal"
                }
              >
                <span className={"hidden sm:inline"}>
                  I'm passionate about{" "}
                  <span className={""}>open source projects </span>and have
                  specialized in TypeScript.{" "}
                </span>
                My goal is to create{" "}
                <span className={"font-medium"}>optimized</span> and{" "}
                <span className={"font-medium"}>beautiful</span> websites using
                the latest technologies<span className={"sm:hidden"}>.</span>{" "}
                <span className={"hidden sm:inline"}>
                  in the{" "}
                  <span className={" sm:font-medium"}>
                    {" "}
                    full-stack JavaScript ecosystem.
                  </span>
                </span>
              </div>
              <div
                className={
                  "flex items-center justify-start gap-2 text-sm font-normal underline sm:gap-6 sm:font-medium md:text-lg"
                }
              >
                {technologies.map((technology) => (
                  <Technology technology={technology} key={technology.id} />
                ))}
              </div>
            </div>
            <div className={"flex gap-4"}>
              <a
                target={"_blank"}
                href={"https://www.linkedin.com/in/bacqueyrisses/"}
                className={
                  "inline-flex cursor-pointer items-center rounded-md bg-[#0e76a8] px-3 py-1.5 text-sm font-medium text-secondary hover:bg-opacity-90 dark:bg-secondary dark:text-black sm:px-4 md:text-base"
                }
              >
                Linkedin
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ml-2 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
              <a
                target={"_blank"}
                href={"https://www.github.com/bacqueyrisses"}
                className={
                  "inline-flex cursor-pointer items-center rounded-md bg-black px-3 py-1.5 text-sm font-medium text-secondary hover:bg-neutral-800 dark:bg-secondary dark:text-black sm:px-4 md:text-base"
                }
              >
                Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ml-2 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <section className={"space-y-4"}>
          <div
            className={"flex h-[70rem] flex-col gap-6 sm:h-[26rem] sm:flex-row"}
            id={"projects"}
          >
            {projects.map((project) => {
              return (
                <a
                  key={project.id}
                  href={project.link}
                  target={"_blank"}
                  className={`group group relative flex basis-full cursor-pointer flex-col items-center justify-between overflow-hidden rounded-xl px-4 py-3 text-sm font-medium text-black transition ease-out sm:basis-1/3 sm:text-base sm:font-normal`}
                >
                  <div
                    className={`absolute h-full w-full scale-110 transform rounded-xl bg-cover bg-center transition-all duration-500 ease-in-out sm:group-hover:scale-125 ${project.image}`}
                  ></div>

                  <div className="absolute inset-0 z-0 h-full w-full rounded-xl bg-white opacity-20 sm:group-hover:opacity-25"></div>
                  <div
                    className={
                      "z-10 flex w-full items-baseline justify-between"
                    }
                  >
                    <div
                      className={"text-lg transition duration-300 sm:text-2xl"}
                    >
                      {project.name}
                      <span className="hidden h-[0.01rem] max-w-0 bg-primary opacity-90 transition-all duration-500 group-hover:max-w-full sm:block"></span>
                    </div>

                    <div className={"sm:text-xl"}>({project.date})</div>
                  </div>
                  <div className={"z-10 flex flex-col gap-3 font-medium"}>
                    {project.live && (
                      <div
                        className={
                          "focus:ring-ring inline-flex flex-grow-0 items-center space-x-1 self-start rounded-full border border-transparent bg-secondary px-2.5 py-0.5 transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        }
                      >
                        <span
                          className={"h-2 w-2 rounded-full bg-green-700"}
                        ></span>
                        <span
                          className={
                            "text-xs font-normal sm:text-sm sm:font-medium "
                          }
                        >
                          Live
                        </span>
                      </div>
                    )}
                    {project.description}
                  </div>
                </a>
              );
            })}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
