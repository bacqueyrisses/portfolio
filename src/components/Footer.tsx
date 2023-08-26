import { getNextMonth, getYear, getYearTwoDigits } from "@/utils/date";

export default function Footer() {
  const nextMonth = getNextMonth();
  const yearLastTwoDigits = getYearTwoDigits();
  const year = getYear();
  const animatedPopper =
    "https://em-content.zobj.net/source/telegram/358/party-popper_1f389.webp";

  return (
    <footer
      className={
        "mt-10 flex flex-col items-center space-y-2 pb-16 md:mt-0 md:space-y-4"
      }
      id={"contact"}
    >
      <div
        className={
          "flex flex-col items-center justify-center space-y-0 md:space-y-1"
        }
      >
        <div className={"text-xl font-medium md:text-2xl"}>Let's connect!</div>
        <div className={"hidden text-[0.90rem] leading-6 md:inline md:text-xl"}>
          I'm available from {nextMonth} {year} for a full time job.
        </div>
        <div
          className={
            "inline-flex items-center justify-center gap-1 whitespace-nowrap text-[0.90rem] leading-6 md:hidden md:text-xl"
          }
        >
          <img
            src={animatedPopper}
            alt="telemoji popper"
            height={28}
            width={28}
          />{" "}
          Full-stack developer available from {nextMonth} ’{yearLastTwoDigits}
        </div>
      </div>
      <div className={"flex justify-center text-xs md:text-sm"}>
        <a
          href={"mailto:enzo.bacqueyrisses@gmail.com"}
          className={
            "group inline-flex items-center rounded-md bg-black px-4 py-1.5 text-sm font-medium leading-5 text-secondary transition hover:bg-neutral-800 dark:bg-secondary dark:text-black md:text-base"
          }
        >
          Get in touch
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-2 h-4 w-4 md:mt-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
