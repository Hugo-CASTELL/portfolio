import Title from "../components/Home/Title.tsx";
import BackgroundPicture from "../components/BackgroundPicture.tsx";
import CardComponent from "../components/Card/Card.tsx";
import { personal_projects } from "./HomeContent.ts";
import { useState } from "react";
import GithubIcon from "../components/Icons/GithubIcon.tsx";

export default function HomePage() {
    const [isTitleHovered, setIsTitleHovered] = useState(false);

    const blog_like: string = "relative mx-auto grid w-full max-w-full px-16 sm:px-18 lg:flex lg:px-36 ";

    return (
        <div className={"grid grid-cols-1"}>

            {/* First screen : Main view */}
            <div id={"first"} className={blog_like}>
                <Title className={"mt-32 sm:mt-40 xl:mt-52 "} 
                       onMouseEnter={() => setIsTitleHovered(true)} 
                       onMouseLeave={() => setIsTitleHovered(false)} />
                {isTitleHovered && <GithubIcon />}
            </div>

            {/* Second screen : Projects */}
            <div id={"second"} className={"border-t mt-80 lg:mt-96 w-full"}>
                <BackgroundPicture
                    className={"relative z-10 top-0 inset-x-0 " +
                               "flex justify-center " +
                               "bg-grid bg-repeat bg-top mask-fade"}
                    title={"beams"}
                    alt={"Background beams"}
                    source={"assets/img/beams2"}
                />
            <CardComponent className='relative' card={personal_projects[0]} />

            </div>

            {/*
            <div id={"second-screen"} className={"mt-80 lg:mt-96 bg-sky-400 w-full"}>
                <div className={"relative bg-grain bg-repeat inset-0 mix-blend-overlay opacity-20 w-full"}>
                    <p>
                        test
                    </p>
                </div>
            </div>
            */}

        </div>
    )
}
