import {TechnologyProps} from "@/types";

export default function Technology({technology}: TechnologyProps) {
    return (
        <a href={technology.link} target={"_blank"} rel="noreferrer"
           className="group transition duration-300">
            {technology.name}
        </a>
    );
}
