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
}: {
  className?: string;
  title?: string | React.ReactNode;
  link: string;
  description?: string | React.ReactNode;
  type: ProjectType;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={`group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-zinc-100 bg-white p-4 transition duration-200 hover:border-transparent hover:shadow-xl dark:border-zinc-700/40 dark:bg-black dark:shadow-none ${className}`}
    >
      {header}

      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <Link
          target={"_blank"}
          className={
            "mb-2 mt-2 flex w-fit items-center gap-2 font-sans font-semibold text-neutral-600 transition duration-200 ease-in-out hover:text-neutral-900 dark:text-neutral-200 hover:dark:text-neutral-50"
          }
          href={link}
        >
          {icon}
          {title}
        </Link>
        <FollowerPointerCard
          variant={type}
          title={<TitleComponent variant={type} />}
        >
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>
        </FollowerPointerCard>
      </div>
    </div>
  );
};
