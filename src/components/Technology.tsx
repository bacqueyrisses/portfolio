import { TechnologyProps } from "@/types";

export default function Technology({ technology }: TechnologyProps) {
  return (
    <a
      href={technology.link}
      target={"_blank"}
      rel="noreferrer"
      className={
        "w-[7.5rem] rounded-xl border-2 border-black px-4 py-1.5 text-center transition hover:-skew-x-6 hover:bg-black hover:text-secondary dark:border-secondary dark:hover:bg-secondary dark:hover:text-black md:w-36"
      }
    >
      {technology.name}
    </a>
  );
}
