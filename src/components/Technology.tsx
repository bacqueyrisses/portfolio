import {TechnologyProps} from "@/types";

export default function Technology({technology}: TechnologyProps) {
    return (
        <a href={technology.link} target={"_blank"} rel="noreferrer"
           className="group transition duration-300">
            {technology.name}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[0.01rem] bg-primary opacity-90"></span>
        </a>
    );
}
