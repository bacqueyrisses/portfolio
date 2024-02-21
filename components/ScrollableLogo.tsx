import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import avatarImage from "@/public/images/logos/logo.webp";
import avatarDarkImage from "@/public/images/logos/logo-dark.webp";

export default function ScrollableLogo({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  large?: boolean;
}) {
  const [scrollPosition, setScrollPosition] = useState<number>(1);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <div
        style={{
          transition: `transform 0ms ease`,
          transform: `rotate(${scrollPosition}deg)`,
        }}
      >
        <Image
          src={avatarImage}
          alt={"logo enzo bacqueyrisses"}
          width={60}
          height={60}
          sizes={large ? "4rem" : "2.25rem"}
          className={clsx(
            "rounded-full bg-zinc-100 object-cover dark:hidden dark:bg-zinc-800",
            large ? "h-16 w-16" : "h-9 w-9",
          )}
          priority
        />

        <Image
          src={avatarDarkImage}
          alt={"logo enzo bacqueyrisses"}
          width={60}
          height={60}
          sizes={large ? "4rem" : "2.25rem"}
          className={clsx(
            "hidden rounded-full bg-zinc-100 object-cover dark:inline dark:bg-zinc-800",
            large ? "h-16 w-16" : "h-9 w-9",
          )}
          priority
        />
      </div>
    </Link>
  );
}
