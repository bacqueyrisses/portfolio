import CopyToClipboard from "@/components/CopyToClipboard";
import ScrollableLogo from "@/components/ScrollableLogo";
import nextMonth from "@/utils/date";
import {technologies} from "@/data/technologies";
import Technology from "@/components/Technology";

export default function Footer() {
  return (
    <footer className={"sm:space-y-3 space-y-5 flex flex-col items-center"} id={"contact"}>

      <div className={"flex flex-col items-center justify-center"}>
        <div className={"text-lg font-medium md:text-2xl"}>
          Let's work together
        </div>
        <div className={"text-[0.90rem] leading-6 md:text-xl"}>
          I'm available <span className={"sm:hidden inline"}> from {nextMonth()} 2023 </span>for a full time job.
        </div>
      </div>
      <div className={"flex justify-center text-xs md:text-sm"}>
        <a
          href={"mailto:bacqueyrisses@proton.me"}
          className={
            "hover:bg-opacity-90 group inline-flex items-center rounded-md bg-black px-4 py-1.5 text-sm font-medium leading-5 text-secondary transition dark:bg-secondary dark:text-black md:text-base"
          }
        >
          Get in touch
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="ml-2 sm:mt-0.5 w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
            </svg>
        </a>
      </div>
    </footer>
  );
}
