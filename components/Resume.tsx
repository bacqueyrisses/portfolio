import Image from "next/image";
import { experience, Experience } from "@/data/experience";

import { Button } from "./Button";
import { ArrowDownIcon, ComputerIcon } from "./icons/CustomIcons";

export default function Resume() {
  function Experience({ experience }: { experience: Experience }) {
    return (
      <li className="flex gap-4">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={experience.logo}
            alt={`logo de ${experience.company}`}
            className={`${
              experience.darkLogo ? "inline dark:hidden" : "dark:inline"
            } h-7 w-7`}
            unoptimized
          />
          {experience.darkLogo && (
            <Image
              src={experience.darkLogo}
              alt={`logo de ${experience.company}`}
              className="hidden h-7 w-7 dark:inline"
              unoptimized
            />
          )}
        </div>
        <div className="flex flex-auto flex-wrap gap-x-2">
          <span className="sr-only">Company</span>
          <span className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {experience.company}
          </span>
          <span className="sr-only">Role</span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {experience.title}
          </span>
          <span className="sr-only">Date</span>
          <span
            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
            aria-label={`${experience.start} until ${experience.end}`}
          >
            <span>{experience.start}</span> <span aria-hidden="true">—</span>{" "}
            <span>{experience.end}</span>
          </span>
        </div>
      </li>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 dark:bg-black md:col-span-2">
      <h2 className="flex items-center gap-2 font-sans text-base font-semibold text-neutral-600 dark:text-neutral-200">
        <ComputerIcon className="size-4" />
        <span>Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {experience.map((experience, experienceIndex) => (
          <Experience key={experienceIndex} experience={experience} />
        ))}
      </ol>

      <Button
        download="Enzo Bacqueyrisses CV"
        href="/resume.pdf"
        target={"_blank"}
        rel="noopener noreferrer"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}
