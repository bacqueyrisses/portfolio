import { Link } from "react-scroll";
import Marquee from "react-fast-marquee";
import Switcher from "@/components/Switcher";
import nextMonth from "@/utils/date";
import ScrollableLogo from "@/components/ScrollableLogo";

export default function Header() {
  return (
    <div
      className={
        "z-50 flex items-center justify-between text-sm font-medium sm:text-base md:text-base pr-6 pl-3 fixed bg-secondary sm:py-2 py-1 top-0 inset-x-0 sm:pr-40 sm:pl-36 dark:bg-primary shadow-sm"
      }
    >
      <div className={"flex items-baseline gap-5 font-medium"}>
        <ScrollableLogo/>
      </div>

      {/*<a className="px-4 py-1.5 ml-auto mr-5 sm:inline-flex items-center rounded-md bg-black text-secondary text-base font-medium hover:opacity-90 hidden"*/}
      {/*   href="/docs/changelog">🎉 <div data-orientation="vertical" role="none"*/}
      {/*                                 className="shrink-0 bg-white w-[1px] mx-2 h-4"></div> <span*/}
      {/*    className="sm:hidden">Style, a new CLI and more.</span><span className="hidden sm:inline">Available from August 2023</span>*/}
      {/*  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"*/}
      {/*       className="ml-1 h-4 w-4">*/}
      {/*    <path*/}
      {/*        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"*/}
      {/*        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>*/}
      {/*  </svg>*/}
      {/*</a>*/}

      <span className={`ml-auto mr-10 hidden lg:flex`}>
        <div className={`lg:w-96`}>
          <Marquee
            speed={60}
            className="bg-secondary dark:bg-primary"
            gradient={false}
          >
            🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp; 🎉 Full-stack developer available {nextMonth()} ’23
            &nbsp;—&nbsp;
          </Marquee>
        </div>
      </span>

        <Link
            to="contact"
            smooth={true}
            duration={0}
            className={
              "sm:hover:bg-opacity-90 group inline-flex cursor-pointer items-center rounded-md bg-black px-4 py-1.5 font-medium text-secondary transition dark:bg-secondary dark:text-black md:text-base"
            }
        >
          Contact
          <svg
              className="-mr-1 ml-2 mt-1.5 stroke-secondary stroke-2 dark:stroke-black md:mt-[0.45rem]"
              fill="none"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              aria-hidden="true"
          >
            <path
                className="origin-center rotate-90 opacity-0 transition group-hover:opacity-100"
                d="M0 5h7"
            ></path>
            <path
                className="origin-center rotate-90 transition group-hover:translate-y-[3px]"
                d="M1 1l4 4-4 4"
            ></path>
          </svg>
        </Link>
    </div>
  );
}
