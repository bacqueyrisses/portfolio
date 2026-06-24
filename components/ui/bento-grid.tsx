import Link from "next/link";
import {
  FollowerPointerCard,
  ProjectType,
  TitleComponent,
} from "@/components/ui/following-pointer";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ${className}`}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  link,
  description,
  type,
  header,
  icon,
  offline,
}: {
  className?: string;
  title?: string | React.ReactNode;
  link: string;
  description?: string | React.ReactNode;
  type: ProjectType;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  offline?: boolean;
}) => {
  const titleContent = (
    <div className={"flex items-center justify-between gap-2"}>
      {icon}
      {title}
      {offline ? (
        <span className="rounded-full border border-yellow-500/40 bg-yellow-100 px-1.5 py-1 text-[0.65rem] font-medium leading-none text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400">
          offline
        </span>
      ) : null}
    </div>
  );

  return (
    <div
      className={`group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-zinc-100 bg-white p-4 transition duration-200 hover:border-transparent hover:shadow-xl dark:border-zinc-700/40 dark:bg-black dark:shadow-none ${className}`}
    >
      {header}

      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {offline ? (
          <div className="mb-2 mt-2 flex w-fit items-center gap-0.5 font-sans font-semibold text-neutral-700 transition duration-200 ease-in-out hover:text-neutral-900 dark:text-neutral-200 hover:dark:text-neutral-50">
            {titleContent}
          </div>
        ) : (
          <Link
            target={"_blank"}
            className={
              "group mb-2 mt-2 flex w-fit items-center gap-0.5 font-sans font-semibold text-neutral-700 transition duration-200 ease-in-out hover:text-neutral-900 dark:text-neutral-200 hover:dark:text-neutral-50"
            }
            href={link}
          >
            {titleContent}
          </Link>
        )}
        <FollowerPointerCard
          variant={type}
          title={<TitleComponent variant={type} />}
        >
          <div className="font-sans text-xs font-normal text-neutral-700 dark:text-neutral-200">
            {description}
          </div>
        </FollowerPointerCard>
      </div>
    </div>
  );
};
