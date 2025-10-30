import {type ImageProps} from "next/image";

import mesoigner from "@/public/images/logos/mesoigner.webp";
import buildspace from "@/public/images/logos/buildspace.webp";
import darkBuildspace from "@/public/images/logos/buildspace-dark.webp";
import indexpresse from "@/public/images/logos/indexpresse.webp";

export type Experience = {
  company: string;
  title: string;
  logo: ImageProps["src"];
  darkLogo?: ImageProps["src"];
  start: string;
  end: string;
};

export const experience: Array<Experience> = [
  {
    company: "IndexPresse",
    title: "Full-stack Developer",
    logo: indexpresse,
    darkLogo: indexpresse,
    start: "2023",
    end: "Present",
  },
  {
    company: "Buildspace",
    title: "Full-stack Developer",
    logo: buildspace,
    darkLogo: darkBuildspace,
    start: "2023",
    end: "2023",
  },
  {
    company: "MeSoigner",
    title: "SEO Developer",
    logo: mesoigner,
    start: "2021",
    end: "2022",
  },
];
