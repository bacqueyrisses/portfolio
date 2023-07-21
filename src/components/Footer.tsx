import CopyToClipboard from "@/components/CopyToClipboard";
import ScrollableLogo from "@/components/ScrollableLogo";
import nextMonth from "@/utils/date";

export default function Footer() {
  return (
    <footer className={"mt-6"} id={"contact"}>
      <div className={"flex justify-center"}>
        <ScrollableLogo />
      </div>
      <div className={"flex flex-col items-center justify-center"}>
        <div className={"text-lg font-medium md:text-xl"}>
          Let's work together
        </div>
        <div className={"mb-7 text-[0.95rem] leading-6 sm:mb-8 md:text-lg"}>
          I'm available from {nextMonth()} 2023 for a full time job.
        </div>
      </div>
      <div className={"flex justify-center gap-5 text-xs md:text-sm"}>
        <CopyToClipboard contentToCopy={"bacqueyrisses@proton.me"} />

        <a
          href={"mailto:bacqueyrisses@proton.me"}
          className={
            "group inline-flex items-center rounded-lg bg-black px-4 py-1.5 text-[0.77rem] font-medium leading-5 text-secondary transition dark:bg-secondary dark:text-black md:text-base"
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
