import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollableLogo() {
  const [scrollPosition, setScrollPosition] = useState(1);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const css = { transform: "rotate(" + scrollPosition / 2 + "deg)" };
  return (
    <Image
      style={css}
      src={"/images/logo.webp"}
      alt={"logo enzo bacqueyrisses"}
      width={110}
      height={110}
    />
  );
}
