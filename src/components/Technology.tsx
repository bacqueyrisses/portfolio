import {TechnologyProps} from "@/types";

export default function Technology({technology}: TechnologyProps) {
    return (
        <a className={"sm:hover:opacity-95"} href={technology.link} target={"_blank"} rel="noreferrer"
        >
            {technology.name}
        </a>
    );
}
