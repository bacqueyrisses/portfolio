import {TechnologyProps} from "@/types";

export default function Technology({technology}: TechnologyProps) {
    return (
        <a href={technology.link} target={"_blank"} rel="noreferrer"
        >
            {technology.name}
        </a>
    );
}
