import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


import localFont from "@next/font/local";
import {projects} from "@/data/projects";
import Technology from "@/components/Technology";
import {technologies} from "@/data/technologies";

const gooperFont = localFont({src: "./../../public/fonts/gooper.ttf"});

export default function Home() {
    return (
        <>
            <Head>
                <title>Enzo Bacqueyrisses / TypeScript Developer</title>
                <meta
                    name="description"
                    content="Full Stack JavaScript Developer living in Bordeaux / React & NodeJS"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>

            <main className={"flex flex-col gap-14 sm:gap-16 mt-20"}>
                <section
                    className={
                        "text-[1.69rem] leading-[2.1rem] sm:text-4xl md:text-5xl"
                    }
                >

                    <div className={"sm:text-6xl text-2xl font-medium flex flex-col sm:gap-8 gap-6"}>
                        <div className={"sm:space-y-2"}>
                            <div className={"sm:text-5xl text-2xl"}>Hi, I’m Enzo!</div>
                            <div>
                                <div>
                                    A
                                    <span className={gooperFont.className}> Web Developer </span>
                                </div>
                                <div>
                                    with skills in ✦
                                    <span className={gooperFont.className}> JavaScript</span> ✦
                                </div>
                            </div>
                        </div>

                        <div className={"text-xl leading-6 md:text-4xl sm:w-1/3 w-9/12"}>
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
                        <div className={"flex gap-4"}>

                            <a target={"_blank"} href={"https://www.linkedin.com/in/bacqueyrisses/"}
                               className={"bg-[#0e76a8] inline-flex cursor-pointer items-center rounded-md px-3 sm:px-4 py-1.5 font-medium text-secondary transition dark:bg-secondary dark:text-black text-sm md:text-base"
                               }>Linkedin
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor"
                                     className="ml-2 h- w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </a>
                            <a target={"_blank"} href={"https://github.com/bacqueyrisses"}
                               className={"inline-flex cursor-pointer items-center rounded-md bg-black px-3 sm:px-4  py-1.5 font-medium text-secondary transition dark:bg-secondary dark:text-black md:text-base text-sm"
                               }> Github <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                              stroke-width="1.5" stroke="currentColor"
                                              className="ml-2 h- w-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg></a>
                        </div>
                    </div>

                </section>
                <section className={"space-y-4"}>
                    <div
                        className={"flex flex-col sm:flex-row gap-6 h-[70rem] sm:h-[26rem]"}
                        id={"projects"}
                    >
                        {projects.map(project => {
                            return (
                                <a key={project.id} href={project.link} target={"_blank"}
                                   className={`font-medium cursor-pointer hover:opacity-95 px-4 py-2 basis-full sm:basis-1/3 rounded-lg bg-cover flex flex-col justify-between ${project.image}`}>
                                    <div className={"w-full flex justify-between "}>
                                        <div>{project.name}</div>
                                        <div>({project.date})</div>
                                    </div>
                                    <div className={"font-medium"}>{project.description}
                                    </div>

                                </a>
                            )
                        })}
                    </div>
                    <div
                        className={
                            "flex gap-2 sm:gap-3 text-sm font-medium md:text-base items-center justify-center"
                        }
                    >
                        {technologies.map((technology) => (
                            <Technology technology={technology} key={technology.id}/>
                        ))}
                    </div>
                </section>
                <Footer/>
            </main>
        </>
    );
}
