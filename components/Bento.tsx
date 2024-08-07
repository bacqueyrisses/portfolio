"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckIcon,
  MapIcon,
  MessageIcon,
  MoneyIcon,
  RocketIcon,
  SendIcon,
} from "@/components/icons/CustomIcons";
import Link from "next/link";
import { ProjectType } from "@/components/ui/following-pointer";
import haveno from "/public/images/logos/haveno.png";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          type={item.type}
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          link={item.link}
          className={`[&>p:text-lg] ${item.className}`}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-2xl border border-transparent bg-neutral-100 bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      y: 10,
      rotate: -3,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      whileTap="animate"
      className="flex h-full min-h-[6rem] w-full flex-1 select-none flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
        variants={variants}
        className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black"
      >
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-green-500" />
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 1.5,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(5).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="hover"
      className="group flex h-full min-h-[6rem] w-full flex-1 select-none flex-col bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <div
        className={
          "flex h-full w-full flex-1 flex-col space-y-2 rounded-2xl border border-neutral-100 bg-white p-2 pr-4 dark:border-white/[0.2] dark:bg-black"
        }
      >
        <div className={"ml-1.5 flex items-center gap-1.5"}>
          <div className="h-4 w-4 flex-shrink-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 group-hover:animate-spin" />
          <p className={"text-xs font-medium text-zinc-600 dark:text-zinc-400"}>
            Transactions
          </p>
        </div>
        {arr.map((_, i) => (
          <motion.div
            key={"skeleton-two" + i}
            variants={variants}
            style={{
              maxWidth: 100 - 40 + 40 + "%",
            }}
            className="flex h-4 w-full flex-row items-center space-x-2 rounded-full border border-neutral-100  bg-neutral-100 p-2 pr-9 text-[0.6rem] italic text-neutral-500 dark:border-white/[0.2] dark:bg-black dark:text-neutral-400"
          >
            <Image src={haveno} className={"size-3"} alt={"haveno-reto logo"} />
            <span>~</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      variants={variants}
      whileHover="animate"
      whileTap="animate"
      className="flex h-full min-h-[6rem] w-full flex-1 select-none flex-col rounded-lg bg-postai bg-cover bg-bottom md:bg-contain"
    ></motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 0,
      rotate: 0,
    },
    hover: {
      x: 20,
      rotate: -5,
    },
  };
  const second = {
    initial: {
      x: 0,
      rotate: 0,
    },
    hover: {
      x: -20,
      rotate: 5,
    },
  };

  const SkeletonInside = () => {
    const variants = {
      initial: {
        backgroundPosition: "0 50%",
      },
      animate: {
        backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
      },
    };
    return (
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="flex h-full w-full flex-1 flex-col space-y-2 rounded-lg bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
        style={{
          background:
            "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
          backgroundSize: "400% 400%",
        }}
      >
        <motion.div className="h-full w-full rounded-lg"></motion.div>
      </motion.div>
    );
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="hover"
      className="flex h-full min-h-[6rem] w-full flex-1 select-none flex-row space-x-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
        variants={first}
        className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
      >
        <Image
          src="/images/logos/next-slower.gif"
          alt="next.js kawai logo"
          height="960"
          width="960"
          className="h-10 w-24 grow"
        />

        <p className="mt-4 text-center text-xs font-medium leading-4 text-neutral-500 dark:text-neutral-400 sm:text-sm md:leading-normal">
          Built with{" "}
          <Link
            target={"_blank"}
            className={"hover:text-neutral-900 hover:dark:text-neutral-300/90"}
            href={"https://nextjs.org/?uwu"}
          >
            Next.js{" "}
          </Link>
          and{" "}
          <Link
            target={"_blank"}
            className={"hover:text-neutral-900 hover:dark:text-neutral-300/90"}
            href={"http://vercel.com"}
          >
            Vercel
          </Link>
        </p>
        <p className="mt-4 rounded-xl border border-blue-500 bg-blue-100 px-2 py-0.5 text-xs text-blue-600 dark:bg-blue-900/20">
          Innovative
        </p>
      </motion.div>
      <motion.div className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black">
        <SkeletonInside />
        <p className="mt-4 hidden text-center text-xs font-medium leading-4 text-neutral-500 dark:text-neutral-400 sm:text-sm md:block md:leading-normal">
          Inventive AI on-demand Mind Maps
        </p>
        <p className="mt-4 block text-center text-xs font-medium leading-4 text-neutral-500 dark:text-neutral-400 sm:text-sm md:hidden md:leading-normal">
          Inventive AI Mind Maps
        </p>
        <p className="mt-4 text-nowrap rounded-xl border border-green-500 bg-green-100 px-2 py-0.5 text-xs text-green-600 dark:bg-green-900/20">
          AI driven
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
      >
        <RocketIcon className={"size-6 grow md:size-[2.15rem]"} />
        <p className="mt-4 text-center text-xs font-medium leading-4 text-neutral-500 dark:text-neutral-400 sm:text-sm md:leading-normal">
          Project backed by{" "}
          <Link
            target={"_blank"}
            className={
              "hover:text-neutral-900 dark:text-neutral-400 hover:dark:text-neutral-300/90"
            }
            href={"https://stationf.co"}
          >
            Station F
          </Link>
        </p>
        <p className="mt-4 rounded-xl border border-orange-500 bg-orange-100 px-2 py-0.5 text-xs text-orange-600 dark:bg-orange-900/20">
          Scalable
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      whileTap="animate"
      className="flex h-full min-h-[6rem] w-full flex-1 select-none flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
        variants={variants}
        className="flex w-fit flex-row items-start space-x-2 rounded-2xl border border-neutral-100 bg-white p-2 pr-4 dark:border-white/[0.2] dark:bg-black"
      >
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          How did the Image component work again?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="ml-auto flex w-fit flex-row items-center justify-end space-x-2 rounded-full border border-neutral-100 bg-white p-2 pl-4 dark:border-white/[0.2] dark:bg-black"
      >
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          I got you bro.
        </p>
        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "NextAI",
    description: (
      <span className="text-sm text-zinc-600 dark:text-zinc-400">
        Effortless Next.JS documentation exploration powered by AI.
      </span>
    ),
    header: <SkeletonFive />,
    link: "https://www.nextai.enzo.codes",
    pointer: "Personal project",
    className: "md:col-span-1",
    icon: <MessageIcon className="size-4" />,
    type: "personal" as ProjectType,
  },
  {
    title: "Haveno-reto",
    description: (
      <span className="text-sm text-zinc-600 dark:text-zinc-400">
        Website redesign to enhance user experience, built with Astro.
      </span>
    ),
    header: <SkeletonTwo />,
    link: "https://haveno-reto.com",
    className: "md:col-span-1",
    icon: <MoneyIcon className="size-4" />,
    type: "open-source" as ProjectType,
  },
  {
    title: "PostAI",
    description: (
      <span className="text-sm text-zinc-600 dark:text-zinc-400">
        Design and send AI-crafted, location-based virtual postcards.
      </span>
    ),
    header: <SkeletonThree />,
    link: "https://www.postai.enzo.codes/",
    className: "md:col-span-1",
    icon: <SendIcon className="size-4" />,
    type: "personal" as ProjectType,
  },
  {
    title: "Mapbrain",
    description: (
      <span className="text-sm text-zinc-600 dark:text-zinc-400">
        Created a comprehensive dashboard for detailed mind maps using advanced
        AI.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    link: "https://www.mapbrain.ai/",
    icon: <MapIcon className="size-4" />,
    type: "work" as ProjectType,
  },
  {
    title: "Consentement",
    description: (
      <span className="text-sm text-zinc-600 dark:text-zinc-400">
        Evaluate and understand your consent with a series of 10 useful
        questions.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    link: "https://www.roueduconsentement.com",
    icon: <CheckIcon className={"size-4"} />,
    type: "work" as ProjectType,
  },
];
