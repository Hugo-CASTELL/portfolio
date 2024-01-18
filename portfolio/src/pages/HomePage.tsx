import Title from "../components/Home/Title.tsx";
import BackgroundPicture from "../components/BackgroundPicture.tsx";
import CardComponent from "../components/Card/Card.tsx";
import { Card, Tab, projects } from "./HomeContent.ts";
import { useState } from "react";
import GithubIcon from "../components/Icons/GithubIcon.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { personal_infos } from "../resources/personal_infos.ts";

export default function HomePage() {
    const [isTitleHovered, setIsTitleHovered] = useState(false);
    const [selectedTab, setSelectedTab] = useState<Tab>(projects[0]);

    const blog_like: string = "relative mx-auto grid w-full max-w-full px-16 sm:px-18 lg:flex lg:px-36 overflow-visible ";
    const title_1: string = "mt-4 text-3xl sm:text-4xl text-primary font-extrabold tracking-tight ";

    return (
        <div className={"grid grid-cols-1 overflow-visible"}>

            {/* First screen : Main view */}
            <div id={"first"} className={blog_like}>
                <motion.div id={"title-animation"}
                            animate={{ scale: isTitleHovered ? 1.03 : 1 }}>
                    <a target="_blank" href={personal_infos.github}>
                    <Title className={"mt-32 sm:mt-40 xl:mt-52 "} 
                           onMouseEnter={() => setIsTitleHovered(true)} 
                           onMouseLeave={() => setIsTitleHovered(false)} />
                    </a>
                </motion.div>
                <div className="flex justify-items-center items-center mt-28">
                    <motion.div id={"title-github-animation"} 
                                animate={{ x: isTitleHovered ? 100 : 400, opacity: isTitleHovered ? 1 : -1 }}>
                        <GithubIcon className={"hidden xl:block h-96 w-96 fill-secondary "} />
                    </motion.div>
                </div>
            </div>

            {/* Second screen : Projects */}
            <div id={"second"} className={"border-t mt-80 lg:mt-96 w-full relative overflow-visible "}>
                <BackgroundPicture
                    className={"absolute z-0 top-0 inset-x-0 " +
                               "flex justify-center " +
                               "bg-grid bg-repeat bg-top mask-fade"}
                    title={"beams"}
                    alt={"Background beams"}
                    source={"assets/img/beams2"}
                />
                <div id="projects" className={blog_like + "flex-col z-10"}>
                    <h1 className={title_1}>Projets</h1>
                    <div id="projects-container" className="bg-white rounded-lg shadow-2xl p-5">
                        <nav>
                            <ul>
                                {projects && projects.map((project: Tab) => {
                                    return (
                                        <li key={project.title}
                                            className={project === selectedTab ? "selected" : ""}
                                            onClick={() => setSelectedTab(project)}>
                                            {project.title}
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                        <div id="projects" key={"projects"}>
                            {selectedTab && selectedTab.content.map((project: Card) => {
                                return (
                                    <AnimatePresence mode="wait" key={"animation"}>
                                        <motion.div key={project.name}
                                                    initial={{ y: 10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -10, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}>
                                            <CardComponent className='relative' divKey={project.name}  card={project} />
                                        </motion.div>
                                    </AnimatePresence>
                                )
                            })}
                        </div>
                    </div>
                </div>
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
