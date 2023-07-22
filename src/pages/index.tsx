import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Link } from "react-scroll";


import localFont from "@next/font/local";
import Project from "@/components/Project";
import { technologies } from "@/data/technologies";
import { projects } from "@/data/projects";
import Technology from "@/components/Technology";
import Image from "next/image";

const gooperFont = localFont({ src: "./../../public/fonts/gooper.ttf" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Enzo Bacqueyrisses / TypeScript Developer</title>
        <meta
          name="description"
          content="Full Stack JavaScript Developer living in Bordeaux / React & NodeJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />

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
            <span className={gooperFont.className}>JavaScript</span> ✦
            </div>
            </div>
            </div>

          <div className={"text-2xl leading-6 md:text-4xl sm:w-1/3 w-2/3"}>
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

    <a target={"_blank"} href={"https://www.linkedin.com/in/bacqueyrisses/"} className={"bg-[#0e76a8] inline-flex cursor-pointer items-center rounded-md px-3 sm:px-4 py-1.5 font-medium text-secondary transition dark:bg-secondary dark:text-black text-sm md:text-base"
    }>Linkedin
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              className="ml-2 h- w-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        </a>
  <a target={"_blank"} href={"https://github.com/bacqueyrisses"}  className={"inline-flex cursor-pointer items-center rounded-md bg-black px-3 sm:px-4  py-1.5 font-medium text-secondary transition dark:bg-secondary dark:text-black md:text-base text-sm"
  }>     Github   <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  className="ml-2 h- w-6">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg></a>
</div>
          {/*<div*/}
          {/*  className={*/}
          {/*    "flex flex-wrap justify-start gap-3 text-sm font-medium md:text-base"*/}
          {/*  }*/}
          {/*>*/}
          {/*  {technologies.map((technology) => (*/}
          {/*    <Technology technology={technology} key={technology.id} />*/}
          {/*  ))}*/}
          {/*</div>*/}
          </div>


        </section>
        <section className={"space-y-4"}>


          <div
            className={"flex flex-col sm:flex-row gap-6 h-[70rem] sm:h-[26rem]"}
            id={"projects"}
          >
<a href={"https://github.com/bacqueyrisses/devzone"} target={"_blank"} className={"font-medium cursor-pointer hover:opacity-95 px-4 py-2 basis-full sm:basis-1/3 rounded-lg bg-[url('/images/gradient1.webp')] bg-cover flex flex-col justify-between"}>
    <div className={"w-full flex justify-between "}>
    <div>Devzone</div>
    <div>(2022)</div>
    </div>
    <div className={"font-medium"} >Boost your development productivity with a custom dashboard. Get your information and tools in one place, letting you focus on what matters most.</div>

</a>
              <a href={"https://github.com/bacqueyrisses/"} className={"font-medium cursor-pointer hover:opacity-95 px-4 py-2 basis-full sm:basis-1/3 rounded-lg bg-[url('/images/gradient2.webp')] bg-cover flex flex-col justify-between"}>
                  <div className={"w-full flex justify-between "}>
                      <div>Investy</div>
                      <div>(2023)</div>
                  </div>
                  <div className={"font-medium"} >Easily venture into the world of investing with this intuitive tailored dashboard. The project offers a seamless experience for both users and admins.</div>

              </a>
              <a href={"https://github.com/bacqueyrisses/ouvrage"} target={"_blank"}  className={"font-medium cursor-pointer hover:opacity-95 px-4 py-2 basis-full sm:basis-1/3 rounded-lg bg-[url('/images/gradient3.webp')] bg-cover flex flex-col justify-between"}>
                  <div className={"w-full flex justify-between"}>
                      <div>Ouvrage</div>
                      <div>(2023)</div>
                  </div>
                  <div className={"font-medium"} >Expand your vocabulary, discover new words, bolster your existing writing skills and get access to your favorites ones easily, all in one place.</div>

              </a>
          </div>
            <div
                className={
                    "flex gap-2 sm:gap-3 text-sm font-medium md:text-base items-center justify-center"
                }
            >
                {/*{technologies.map((technology) => (*/}
                {/*    <Technology technology={technology} key={technology.id} />*/}
                {/*))}*/}
                <div>(React)</div>
                <div>(NextJS)</div>
                <div>(Tailwind)</div>
                <div>(ExpressJS)</div>
                <div>(PostgreSQL)</div>

            </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
