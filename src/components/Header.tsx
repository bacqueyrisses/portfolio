import { Link } from "react-scroll";
import Marquee from "react-fast-marquee";
import Switcher from "@/components/Switcher";

export default function Header() {
  return (
    <div
      className={
        "flex items-baseline justify-between text-[0.92rem] font-medium sm:text-base md:text-base"
      }
    >
      <div className={"flex items-baseline gap-5 font-medium"}>
        <Switcher />
        <ul className={"flex md:gap-5"}>
          <li>
            <a
              href={"https://github.com/bacqueyrisses"}
              target={"_blank"}
              className={
                "link-underline-black link-underline rounded-xl px-4 py-2 transition-colors hover:bg-black hover:text-secondary"
              }
            >
              Github
            </a>
          </li>
          <li>
            <a
              href={"https://www.linkedin.com/in/bacqueyrisses/"}
              rel="noreferrer"
              target={"_blank"}
              className={
                "link-underline-black link-underline rounded-xl px-4 py-2 transition-colors hover:bg-black hover:text-secondary"
              }
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>

      <span className={`ml-auto mr-10 hidden lg:flex`}>
        <div className={`lg:w-72`}>
          <Marquee
            speed={50}
            className="bg-secondary dark:bg-primary"
            gradient={false}
          >
            Full Stack Developer &nbsp;—&nbsp; Available May ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available May ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available May ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available May ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available May ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available May ’22 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available May ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available May ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available May ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available May ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available May ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available May ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available May ’23 &nbsp;—&nbsp;
            Full Stack Developer &nbsp;—&nbsp; Available May ’23 &nbsp;—&nbsp;
          </Marquee>
        </div>
      </span>

      <Link
        to="contact"
        smooth={true}
        duration={0}
        className={
          "cursor-pointer rounded-xl bg-black px-4 py-1.5 text-[0.92rem] font-medium text-secondary transition dark:bg-secondary dark:text-black dark:hover:text-secondary md:text-base md:hover:bg-[#232b2b] dark:md:hover:bg-black"
        }
      >
        Contact
      </Link>
    </div>
  );
}
