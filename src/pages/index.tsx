import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { projects } from "@/data/projects";
import Technology from "@/components/Technology";
import { technologies } from "@/data/technologies";
import Image from "next/image";
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

      <main
        className={"flex flex-col justify-evenly gap-10 md:h-screen md:gap-0"}
      >
        <section className={"text-[1.69rem] leading-[2.1rem] md:text-5xl"}>
          <div
            className={
              "flex flex-col items-center gap-4 pt-20 text-2xl md:items-start md:gap-4 md:pt-6 md:text-6xl"
            }
          >
            <div className={"text-2xl font-medium md:text-4xl"}>
              Hi I’m Enzo,
            </div>
            <div
              className={
                "flex flex-col items-center space-y-4 md:items-start md:space-x-1"
              }
            >
              <div
                className={
                  "text-center text-base md:w-full md:text-start md:text-2xl"
                }
              >
                My goal is to create optimized and beautiful websites using the{" "}
                <span className={"hidden md:inline"}>
                  <br />
                </span>
                latest technologies in the JavaScript full-stack ecosystem.
              </div>
              <div
                className={
                  "flex items-center justify-start gap-2 text-sm font-medium underline md:gap-6 md:text-lg"
                }
              >
                {technologies.map((technology) => (
                  <Technology technology={technology} key={technology.id} />
                ))}
              </div>
            </div>
            <div className={"flex justify-center gap-4 md:justify-start"}>
              <div className={"flex"}>
                <a
                  target={"_blank"}
                  href={"https://twitter.com/bacqueyrisses"}
                  className={
                    "inline-flex cursor-pointer items-center rounded-md bg-[#1D9BF0] px-3 py-1.5 text-sm font-medium text-secondary hover:bg-opacity-90 dark:bg-secondary dark:text-black md:px-4 md:text-base"
                  }
                >
                  Twitter/X
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="ml-2 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>

              <a
                target={"_blank"}
                href={"https://www.linkedin.com/in/bacqueyrisses/"}
                className={
                  "inline-flex cursor-pointer items-center rounded-md bg-[#0e76a8] px-3 py-1.5 text-sm font-medium text-secondary hover:bg-opacity-90 dark:bg-secondary dark:text-black md:px-4 md:text-base"
                }
              >
                Linkedin
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ml-2 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>

              <a
                target={"_blank"}
                href={"https://www.github.com/bacqueyrisses"}
                className={
                  "inline-flex cursor-pointer items-center rounded-md bg-black px-3 py-1.5 text-sm font-medium text-secondary hover:bg-neutral-800 dark:bg-secondary dark:text-black md:px-4 md:text-base"
                }
              >
                Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ml-2 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
              <a
                href={"https://www.buymeacoffee.com/bacqueyrisses"}
                target={"_blank"}
                className={"hidden items-center md:inline-flex"}
              >
                <Image
                  src={"/images/coffee.png"}
                  width={18}
                  height={18}
                  alt={"Enzo Bacqueyrisses' Buy Me a Coffee logo"}
                />
              </a>
            </div>
          </div>
        </section>
        <section className={"space-y-4"}>
          {/*<div className={"flex flex-col gap-6 md:flex-row"} id={"projects"}>*/}
          <div
            className={
              "flex h-[65rem] flex-col gap-6 md:h-[20rem] md:flex-row lg:h-[21rem]"
            }
            id={"projects"}
          >
            {projects.map((project) => {
              return (
                <a
                  key={project.id}
                  href={project.link}
                  target={"_blank"}
                  className={`group relative flex w-full basis-full cursor-pointer flex-col items-center justify-between overflow-hidden rounded-xl px-4 py-3 text-sm font-medium text-black transition ease-out md:h-[20rem] md:text-base md:font-normal lg:h-[21rem]`}
                >
                  <div
                    className={`absolute h-full w-full scale-110 transform rounded-xl bg-cover bg-center transition-all duration-500 ease-in-out md:group-hover:scale-125 ${project.image}`}
                  ></div>

                  <div className="absolute inset-0 z-0 h-full w-full rounded-xl bg-white opacity-20 md:group-hover:opacity-25"></div>
                  <div
                    className={
                      "z-10 flex w-full items-baseline justify-between"
                    }
                  >
                    <div
                      className={"text-lg transition duration-300 md:text-2xl"}
                    >
                      {project.name}
                      <span className="hidden h-[0.01rem] max-w-0 bg-primary opacity-90 transition-all duration-500 group-hover:max-w-full md:block"></span>
                    </div>

                    <div className={"md:text-xl"}>({project.date})</div>
                  </div>
                  <div className={"z-10 flex flex-col gap-3 font-medium"}>
                    {project.live && (
                      <div
                        className={
                          "inline-flex flex-grow-0 items-center space-x-2 self-start rounded-full border border-transparent bg-secondary px-2.5 py-0.5 transition-colors"
                        }
                      >
                        <span
                          className={"h-2 w-2 rounded-full bg-green-700"}
                        ></span>
                        <span
                          className={
                            "text-xs font-normal md:text-sm md:font-medium"
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
      </main>
      <Footer />
    </>
  );
}
