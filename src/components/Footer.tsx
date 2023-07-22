import CopyToClipboard from "@/components/CopyToClipboard";
import ScrollableLogo from "@/components/ScrollableLogo";
import nextMonth from "@/utils/date";
import {technologies} from "@/data/technologies";
import Technology from "@/components/Technology";

export default function Footer() {
  return (
    <footer className={"space-y-5 flex flex-col items-center"} id={"contact"}>

      <div className={"flex flex-col items-center justify-center"}>
        <div className={"text-lg font-medium md:text-xl"}>
          Let's work together
        </div>
        <div className={"text-[0.90rem] leading-6 md:text-lg"}>
          I'm available from {nextMonth()} 2023 for a full time job.
        </div>
      </div>
      <div className={"flex justify-center text-xs md:text-sm"}>
        {/*<CopyToClipboard contentToCopy={"bacqueyrisses@proton.me"} />*/}


        <a
          href={"mailto:bacqueyrisses@proton.me"}
          className={
            "group inline-flex items-center rounded-md bg-black px-4 py-1.5 text-sm font-medium leading-5 text-secondary transition dark:bg-secondary dark:text-black md:text-base"
          }
        >
          Get in touch
          <svg
            className="-mr-1 ml-2 mt-0.5 stroke-secondary stroke-2 dark:stroke-black"
            fill="none"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            aria-hidden="true"
          >
            <path
              className="opacity-0 transition group-hover:opacity-100"
              d="M0 5h7"
            ></path>
            <path
              className="transition group-hover:translate-x-[3px]"
              d="M1 1l4 4-4 4"
            ></path>
          </svg>
        </a>
      </div>
    </footer>
  );
}
