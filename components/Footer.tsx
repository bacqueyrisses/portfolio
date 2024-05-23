import Link from "next/link";

import { ContainerInner, ContainerOuter } from "./Container";
import Image from "next/image";
import whiteCoffee from "@/public/images/logos/white-button.png";
import darkCoffee from "@/public/images/logos/black-button.png";
import avatarImage from "@/public/images/logos/logo.webp";
import avatarDarkImage from "@/public/images/logos/logo-dark.webp";

export function Footer() {
  return (
    <footer className="mt-12 flex-none lg:mt-16">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-10 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Enzo Bacqueyrisses
              </p>
              <Link
                href={"https://www.buymeacoffee.com/bacqueyrisses"}
                target={"_blank"}
                className={"cursor-pointer"}
              >
                <Image
                  src={avatarImage}
                  width={40}
                  height={40}
                  alt={"Enzo Bacqueyrisses logo"}
                  className={"block dark:hidden"}
                />
                <Image
                  src={avatarDarkImage}
                  width={40}
                  height={40}
                  alt={"Enzo Bacqueyrisses logo dark mode"}
                  className={"hidden dark:block"}
                />
              </Link>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
