import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollableLogo() {
  const [scrollPosition, setScrollPosition] = useState<number>(1);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const css = { transform: "rotate(" + scrollPosition + "deg)" };
  return (
    <>
      <Image
        style={css}
        className={"dark:hidden"}
        src={"/images/logo.webp"}
        alt={"logo enzo bacqueyrisses"}
        width={60}
        height={60}
      />
      <Image
        style={css}
        className={"hidden dark:block"}
        src={"/images/whitelogo.webp"}
        alt={"logo enzo bacqueyrisses"}
        width={60}
        height={60}
      />
    </>
  );
}
