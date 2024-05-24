import { ContainerInner, ContainerOuter } from "./Container";
import Image from "next/image";
import avatarImage from "@/public/images/logos/logo.webp";
import avatarDarkImage from "@/public/images/logos/logo-dark.webp";

export function Footer() {
  return (
    <footer className="mt-12 flex-none lg:mt-16">
      <ContainerOuter>
        <div className="pb-4">
          <ContainerInner>
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} Enzo Bacqueyrisses
              </p>
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
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
