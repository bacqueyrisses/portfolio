import Image from "next/image";
import clsx from "clsx";
import nextai from "@/public/images/websites/nextai.webp";
import postai from "@/public/images/websites/postai.gif";
import ouvrage from "@/public/images/websites/ouvrage.webp";
import { SetStateAction } from "react";

interface IWebsites {
  setFocusedProject: React.Dispatch<SetStateAction<number | null>>;
}
export default function Websites({ setFocusedProject }: IWebsites) {
  const handleClick = (index: number) => {
    const element = document.getElementById("projects-section");
    element && element.scrollIntoView({ behavior: "smooth" });

    setFocusedProject(index + 1);

    setTimeout(() => {
      setFocusedProject(null);
    }, 3000);
  };
  const imageAltTexts = ["NextAI", "postai", "Ouvrage"];
  return (
    <div className="mx-auto mt-16 max-w-7xl px-4 lg:mt-20 lg:px-8">
      <div className="flex flex-col items-center justify-evenly gap-6 overflow-hidden sm:flex-row sm:px-10">
        {[nextai, postai, ouvrage].map((image, imageIndex) => (
          <button
            onClick={() => handleClick(imageIndex)}
            key={image.src}
            className={clsx(
              "relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-800 sm:rounded-2xl lg:basis-1/3",
            )}
          >
            <Image
              src={image}
              unoptimized={true}
              alt={`enzo bacqueyrisses ${imageAltTexts[imageIndex]}`}
              className="h-11/12 absolute inset-0 m-auto w-11/12 rounded-xl object-cover transition duration-500 ease-in-out  hover:scale-105"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
