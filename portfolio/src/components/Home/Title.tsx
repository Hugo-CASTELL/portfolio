import {personal_infos} from "../../resources/personal_infos.ts";

interface HeaderProps {
    className?: string;
}

export default function Title({ className }: HeaderProps) {
    return (
        <div id={"title"} className={className}>
            <div className={"text-7xl font-extrabold tracking-tight sm:text-7xl md:text-8xl"}>
                <h1 className={"text-white text-outline"}>{personal_infos.first_name.toUpperCase()}</h1>
                <h1 className={"text-white text-outline"}>{personal_infos.last_name.toUpperCase()}</h1>
                {personal_infos.job.split(" ").map((word, index) => {
                    return <h1 key={index} className={"text-secondary"}>{word.toUpperCase()}</h1>
                })}
                <h1 className={"text-primary-light"}>{"PORTFOLIO"}</h1>
            </div>
        </div>
    )
}
