import { Link } from "react-scroll";
import Marquee from "react-fast-marquee";
import { getNextMonth, getYearTwoDigits } from "@/utils/date";
import ScrollableLogo from "@/components/ScrollableLogo";

export default function Header() {
  const nextMonth = getNextMonth();
  const yearLastTwoDigits = getYearTwoDigits();
  const popper =
    "https://em-content.zobj.net/source/apple/354/party-popper_1f389.png";

  return (
    <div
      className={
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-secondary py-1 pl-3 pr-6 text-sm font-medium shadow-sm dark:bg-primary sm:py-2 sm:pl-32 sm:pr-36 sm:text-base md:text-base"
      }
    >
      <div className={"flex items-baseline gap-5 font-medium"}>
        <ScrollableLogo />
      </div>

      <span className={`ml-auto mr-10 hidden lg:flex`}>
        <div className={`lg:w-96`}>
          <Marquee
            speed={55}
            className="bg-secondary dark:bg-primary"
            gradient={false}
          >
            <img
              src={popper}
              alt="popper"
              className={"mx-1"}
              height={19}
              width={19}
            />
            <span>
              Full-stack developer available {nextMonth} ’{yearLastTwoDigits}{" "}
              &nbsp;—&nbsp;
            </span>
          </Marquee>
        </div>
      </span>

      <Link
        to="contact"
        smooth={true}
        duration={0}
        className={
          "group inline-flex cursor-pointer items-center rounded-md bg-black px-4 py-1.5 font-medium text-secondary transition dark:bg-secondary dark:text-black sm:hover:hover:bg-neutral-800 md:text-base"
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
