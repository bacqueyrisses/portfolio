import { useState } from "react";

export default function CopyToClipboard({
  contentToCopy,
}: {
  contentToCopy: string;
}) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  async function handleClick() {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1700);
    await navigator.clipboard.writeText(contentToCopy);
  }

  return (
    <div className={"group relative inline-flex items-center"}>
      <button
        type="button"
        className={`inline-flex items-center rounded-xl border border-black px-4 py-1.5 text-[0.77rem] font-medium leading-5 transition dark:border-2 dark:border-secondary md:text-base md:hover:-skew-x-6 ${
          isCopied
            ? "-skew-x-6 bg-black text-secondary dark:bg-secondary dark:text-black"
            : ""
        }`}
        onClick={handleClick}
      >
        bacqueyrisses@proton.me
      </button>
      {
        <div className="absolute bottom-[1.30rem] left-1/2 mb-3.5 -translate-x-1/2 translate-y-0 scale-100 pb-1 opacity-100 dark:bottom-[1.40rem] md:bottom-[1.55rem] dark:md:bottom-[1.65rem]">
          <div
            className={`relative -skew-x-6 rounded-lg bg-black px-1.5 text-[0.625rem] font-medium leading-6 text-white dark:bg-secondary dark:text-black md:text-[0.72rem]  ${
              isCopied ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
            }`}
            data-reach-alert="true"
          >
            {isCopied ? "Copied" : "Click to copy"}
            <svg
              aria-hidden="true"
              width="16"
              height="6"
              viewBox="0 0 16 6"
              className="absolute left-1/2 top-full -ml-2 -mt-px text-black"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                className={"dark:fill-secondary"}
                d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      }
    </div>
  );
}
