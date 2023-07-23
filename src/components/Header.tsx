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

      <span className={`ml-auto mr-10 hidden lg:flex`}>
        <div className={`lg:w-72`}>
          <Marquee
            speed={50}
            className="bg-secondary dark:bg-primary"
            gradient={false}
          >
            Full Stack Developer &nbsp;—&nbsp; Available {nextMonth()} ’23
            &nbsp;—&nbsp; Full Stack Developer &nbsp;—&nbsp; Available{" "}
            {nextMonth()} ’23 &nbsp;—&nbsp; Full Stack Developer &nbsp;—&nbsp;
            Available {nextMonth()} ’23 &nbsp;—&nbsp; Full Stack Developer
            &nbsp;—&nbsp; Available {nextMonth()} ’23 &nbsp;—&nbsp; Full Stack
            Developer &nbsp;—&nbsp; Available {nextMonth()} ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available {nextMonth()} ’23
            &nbsp;—&nbsp; Full Stack Developer &nbsp;—&nbsp; Available{" "}
            {nextMonth()} ’23 &nbsp;—&nbsp; Full Stack Developer &nbsp;—&nbsp;
            Available {nextMonth()} ’23 &nbsp;—&nbsp; Full Stack Developer
            &nbsp;—&nbsp; Available {nextMonth()} ’23 &nbsp;—&nbsp; Full Stack
            Developer &nbsp;—&nbsp; Available {nextMonth()} ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available {nextMonth()} ’23
            &nbsp;—&nbsp; Full Stack Developer &nbsp;—&nbsp; Available{" "}
            {nextMonth()} ’23 &nbsp;—&nbsp; Full Stack Developer &nbsp;—&nbsp;
            Available {nextMonth()} ’23 &nbsp;—&nbsp; Full Stack Developer
            &nbsp;—&nbsp; Available {nextMonth()} ’23 &nbsp;—&nbsp; Full Stack
            Developer &nbsp;—&nbsp; Available {nextMonth()} ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available {nextMonth()} ’23
            &nbsp;—&nbsp; Full Stack Developer &nbsp;—&nbsp; Available{" "}
            {nextMonth()} ’23 &nbsp;—&nbsp; Full Stack Developer &nbsp;—&nbsp;
            Available {nextMonth()} ’23 &nbsp;—&nbsp; Full Stack Developer
            &nbsp;—&nbsp; Available {nextMonth()} ’23 &nbsp;—&nbsp;
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
