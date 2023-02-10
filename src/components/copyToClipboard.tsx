import { useState } from "react";

export default function CopyToClipboard({
  contentToCopy,
}: {
  contentToCopy: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
    navigator.clipboard.writeText(contentToCopy);
  };

  return (
    <div className={"relative inline-flex items-center"}>
      <button
        type="button"
        className={
          isCopied ? "text-slate-500" : "text-black hover:text-slate-400"
        }
        onClick={handleClick}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-8 w-8"
        >
          <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
          <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
        </svg>
      </button>
      {isCopied && (
        <div className="absolute bottom-6 left-1/2 mb-3.5 -translate-x-1/2 translate-y-0 scale-100 pb-1 opacity-100">
          <div
            className="relative rounded-lg bg-black px-1.5 font-mono text-[0.625rem] font-medium leading-6 text-white"
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
