import { useState } from "react";

export default function CopyToClipboard({
  contentToCopy,
}: {
  contentToCopy: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = async () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1700);
    await navigator.clipboard.writeText(contentToCopy);
  };

  return (
    <div className={"relative inline-flex items-center"}>
      <button
        type="button"
        className={`inline-flex items-center rounded-xl border border-black py-1.5 px-4 text-[0.77rem] font-medium leading-5 transition dark:border-2 dark:border-secondary md:text-base md:hover:-skew-x-6 ${
          isCopied
            ? "-skew-x-6 bg-black text-secondary dark:bg-secondary dark:text-black"
            : ""
        }`}
        onClick={handleClick}
      >
        bacqueyrisses@proton.me
      </button>
      {isCopied && (
        <div className="absolute bottom-[1.30rem] left-1/2 mb-3.5 -translate-x-1/2 translate-y-0 scale-100 pb-1 opacity-100 md:bottom-[1.69rem]">
          <div
            className={
              "relative -skew-x-6 rounded-lg bg-black px-1.5 text-[0.625rem] font-medium leading-6 text-white dark:bg-secondary dark:text-black"
            }
            data-reach-alert="true"
          >
            Copied
            <svg
              aria-hidden="true"
              width="16"
              height="6"
              viewBox="0 0 16 6"
              className="absolute top-full left-1/2 -mt-px -ml-2 text-black"
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
      )}
    </div>
  );
}
