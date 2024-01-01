import {personal_infos} from "../resources/personal_infos.ts";

export default function HomePage() {
    const blog_like: string = "relative mx-auto grid w-full max-w-full px-16 sm:px-18 lg:flex lg:px-36";

    return (
        <div className={"grid grid-cols-1"}>

            {/* First screen */}
            <div className={blog_like}>

                <div id={"first-screen"} className={"mt-32 sm:mt-40 xl:mt-52"}>
                    <div id={"title"}
                         className={"text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl"}>
                        <h1 className={"text-slate-600"}>{personal_infos.first_name.toUpperCase()}</h1>
                        <h1 className={"text-slate-600"}>{personal_infos.last_name.toUpperCase()}</h1>
                        {personal_infos.job.split(" ").map((word, index) => {
                            return <h1 key={index} className={"text-slate-900"}>{word.toUpperCase()}</h1>
                        })}
                    </div>
                </div>
            </div>

            {/* Second screen */}
            <div id={"second-screen"} className={"mt-80 lg:mt-96 bg-sky-400 w-full"}>
                <div className={"relative bg-grain bg-repeat inset-0 mix-blend-overlay opacity-20 w-full"}>
                    <p>
                        test
                    </p>
                </div>
            </div>

        </div>
    )
}