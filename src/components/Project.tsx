import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { isMobile } from "react-device-detect";
import round from "@/utils/round";
import { ProjectProps } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export default function Project({ project }: ProjectProps) {
  const { theme } = useTheme();
  const [borderOpacity, setBorderOpacity] = useState<number>(0.05);
  const [borderHovering, setborderHovering] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function handleScroll() {
    let scroll;
    isMobile
      ? (scroll = [0, 500].map((e) => e * (project.id + 1)))
      : (scroll = [0, 600]);

    const position = window.scrollY;
    const positionCorrected = position - scroll[0];
    const scrollMaxStartingAtZero = scroll[1] - scroll[0];

    let opacity = positionCorrected / scrollMaxStartingAtZero;

    if (opacity >= 1) return setBorderOpacity(1);
    if (opacity > 0) return setBorderOpacity(round(opacity, 2));

    return setBorderOpacity(0.05);
  }

  return (
    <a
      onMouseEnter={() => setborderHovering(!isMobile)}
      onMouseLeave={() => setborderHovering(isMobile)}
      href={project.link}
      style={{
        border: `2px solid rgba(${
          theme === "light" ? "0, 0, 0" : "225, 230, 222"
        }, ${!isMobile ? "0" : borderHovering ? "1" : borderOpacity})`,
      }}
      className={`group flex flex-col justify-center rounded-3xl px-4 py-5 transition dark:border-secondary`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-2.5 font-semibold ${inter.className}`}>
        {project.name}
        <span
          className={`inline-block transform pl-1 font-semibold transition sm:group-hover:translate-x-1 md:pl-2 ${inter.className}`}
        >
          -&gt;
        </span>
      </h2>
      <p className={"mb-2.5 text-sm opacity-70"}>{project.description}</p>
      <p className={"text-sm opacity-70 transition group-hover:opacity-100"}>
        {project.stack}
      </p>
    </a>
  );
}
