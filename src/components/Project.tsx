// Font
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Project({ project, index }: any) {
  const [borderOpacity, setBorderOpacity] = useState(0);
  const [scroll, setScroll] = useState<number[]>([]);
  useEffect(() => {
    if (window.screen.width < 900)
      setScroll([100, 400].map((e) => e * (index + 1)));
    if (window.screen.width >= 900)
      setScroll([0, 100].map((e) => e * (index + 1)));
  }, [borderOpacity]);
  const handleScroll = () => {
    const position = window.scrollY;
    const positionCorrected = position - scroll[0];
    const scrollMaxStartingAtZero = scroll[1] - scroll[0];

    let opacity = positionCorrected / scrollMaxStartingAtZero;

    if (opacity >= 1) return setBorderOpacity(1);
    if (opacity >= 0) return setBorderOpacity(round(opacity, 2));

    return setBorderOpacity(0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="https://github.com/bacqueyrisses/garaikunde"
      style={{ border: `2px solid rgba(0, 0, 0, ${borderOpacity})` }}
      className={`group flex flex-col justify-center rounded-3xl px-4 py-5 transition hover:rounded-3xl dark:border-secondary md:hover:border-2 md:hover:border-opacity-100 md:dark:hover:border-secondary`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-2.5 font-semibold ${inter.className}`}>
        {project.name}
        <span
          className={`inline-block transform font-semibold transition sm:group-hover:translate-x-1 ${inter.className}`}
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

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}
