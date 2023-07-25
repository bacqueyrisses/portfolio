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
                    content="Full Stack TypeScript Developer / React & NodeJS"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>

            <main className={"flex flex-col gap-14 sm:gap-24 sm:mt-24 mt-20"}>
                <section
                    className={
                        "text-[1.69rem] leading-[2.1rem] sm:text-4xl md:text-5xl"
                    }
                >

                    <div className={"sm:text-6xl text-2xl font-medium flex flex-col sm:gap-10 gap-6"}>
                        <div className={"sm:space-y-2"}>
                            <div className={"sm:text-4xl text-xl"}>Hi, I’m Enzo!</div>
                            <div>
                                <div>
                                    A
                                    <span className={gooperFont.className}> Web Developer </span>
                                </div>
                                <div className={"whitespace-nowrap"}>
                                    with skills in ✦
                                    <span className={gooperFont.className}> JavaScript</span> ✦
                                </div>
                            </div>
                        </div>
                        <div className={"space-y-2"}>
                            <div className={"sm:text-2xl font-medium sm:font-normal text-lg w-10/12 sm:w-2/4"}>
                               <span className={"hidden sm:inline"}>I'm passionate about <span className={""}>open source projects </span>and have
                                specialized in TypeScript. </span>
                                My goal is to create{" "}
                                <span className={"font-medium"}>optimized</span> and <span
                                className={"font-medium"}>beautiful</span> websites
                                using the latest technologies<span className={"sm:hidden"}>.</span> <span
                                className={"hidden sm:inline"}>in the <span
                                className={" sm:font-medium"}> full-stack JavaScript ecosystem.</span></span>
                            </div>
                            <div
                                className={
                                    "flex gap-2 underline font-normal sm:font-medium sm:gap-6 text-sm md:text-lg items-center justify-start"
                                }
                            >
                                {technologies.map((technology) => (
                                    <Technology technology={technology} key={technology.id}/>
                                ))}
                            </div>
                        </div>
                        <div className={"flex gap-4"}>

                            <a target={"_blank"} href={"https://www.linkedin.com/in/bacqueyrisses/"}
                               className={"bg-[#0e76a8] hover:bg-opacity-90 inline-flex cursor-pointer items-center rounded-md px-3 sm:px-4 py-1.5 font-medium text-secondary dark:bg-secondary dark:text-black text-sm md:text-base"
                               }>Linkedin


                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="ml-2 h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                                </svg>


                            </a>
                            <a target={"_blank"} href={"https://www.github.com/bacqueyrisses"}
                               className={"bg-black hover:bg-opacity-90 inline-flex cursor-pointer items-center rounded-md px-3 sm:px-4 py-1.5 font-medium text-secondary dark:bg-secondary dark:text-black text-sm md:text-base"
                               }>Github


                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" className="ml-2 h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
                                </svg>


                            </a>

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
                                   className={`group relative flex flex-col items-center justify-between overflow-hidden rounded-xl group font-medium sm:font-normal text-sm sm:text-base cursor-pointer text-black transition ease-out px-4 py-3 basis-full sm:basis-1/3`}>
                                    <div
                                        className={`absolute w-full h-full transition-all duration-500 ease-in-out rounded-xl transform bg-center bg-cover scale-110 sm:group-hover:scale-125 ${project.image}`}>
                                    </div>

                                    <div
                                        className="z-0 rounded-xl absolute inset-0 w-full h-full bg-white opacity-20 sm:group-hover:opacity-25"></div>
                                    <div className={"z-10 w-full flex justify-between items-baseline"}>
                                        <div className={"transition duration-300 sm:text-2xl text-lg"}>{project.name}
                                            <span
                                                className="sm:block hidden max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.01rem] bg-primary opacity-90"></span>
                                        </div>

                                        <div className={"sm:text-xl"}>({project.date})</div>
                                    </div>
                                    <div className={"z-10 font-medium"}>{project.description}
                                    </div>

                                </a>
                            )
                        })}

                    </div>
                </section>
                <Footer/>
            </main>
        </>
    );
}
