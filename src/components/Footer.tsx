import Image from "next/image";
import localFont from "@next/font/local";
import CopyToClipboard from "@/components/copyToClipboard";
import ScrollableLogo from "@/components/ScrollableLogo";
const gooperFont = localFont({ src: "./../../public/fonts/gooper.ttf" });

export default function Footer() {
  return (
    <footer className={"mt-6"} id={"contact"}>
      <div className={"flex justify-center"}>
        <ScrollableLogo />
      </div>
      <div className={"flex flex-col items-center justify-center"}>
        <div className={"mb-3 text-lg font-medium md:text-xl"}>
          Let's work together
        </div>
        <div className={"mb-8 text-[0.95rem] leading-6 md:text-lg"}>
          I'm available from <span className={""}>April 2023</span> for a full
          time job.
        </div>
      </div>
      <div className={"flex justify-center gap-5 text-xs md:text-sm"}>
        <CopyToClipboard contentToCopy={"bacqueyrisses@proton.me"} />

        <a
          href={"mailto:bacqueyrisses@proton.me"}
          className="group inline-flex items-center rounded-xl bg-black py-1.5 px-4 font-medium text-secondary transition hover:bg-[#232b2b]"
        >
          Get in touch
          <svg
            className="mt-0.5 ml-2 -mr-1 stroke-[#e1e6de] stroke-2"
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
