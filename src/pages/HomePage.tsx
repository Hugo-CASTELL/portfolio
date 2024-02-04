import Title from "../components/Home/Title.tsx";
import BackgroundPicture from "../components/BackgroundPicture.tsx";
import CardComponent from "../components/Card/Card.tsx";
import { Card, Tab, Tech, projects, resumeTimeLine, techs } from "./HomeContent.ts";
import { useState } from "react";
import GithubIcon from "../components/Icons/GithubIcon.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { personal_infos } from "../resources/personal_infos.ts";
import TimeLine from "../components/TimeLine/TimeLine.tsx";

export default function HomePage() {
    const [isTitleHovered, setIsTitleHovered] = useState(false);
    const [selectedTab, setSelectedTab] = useState<Tab>(projects[0]);

    const blog_like: string = "relative mx-auto grid w-full max-w-full px-16 sm:px-18 lg:flex lg:px-36 overflow-visible ";
    const title_1: string = "text-3xl sm:text-4xl text-primary font-extrabold tracking-tight ";

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

            {/* Second screen : Profile */}
            <div id={"second"} className={"mt-80 lg:mt-96 w-full relative overflow-visible "}>
                <BackgroundPicture
                    className={"absolute z-0 top-14 inset-x-0 " +
                               "flex justify-center " +
                               "bg-grid bg-repeat bg-top mask-fade"}
                    title={"beams"}
                    alt={"Background beams"}
                    source={"assets/img/beams2"}
                />
                <div id="profile" className={blog_like + "flex-col z-10"}>
                    <h1 className={title_1 + " mt-24"}>Profil</h1>
                    <div id="margin" className="mt-40">
                    </div>
                    <div id="profile-container" className={"absolute top-0 inset-x-0 grid grid-rows-[auto, auto]"
                        + "w-full max-w-full px-16 sm:px-18 lg:px-36"
                    } >
                        <div className="flex space-x-4">
                            <div className="mt-48 bg-white rounded-3xl shadow-lg h-[300px]">
                                o
                            </div>
                            <div className="rounded-3xl bg-white shadow-lg h-[500px]">
                                <TimeLine events={resumeTimeLine} />
                            </div>
                        </div>
                        <div className="row-start-2 col-start-1 bg-white rounded-3xl shadow-lg w-full flex flex-row justify-space-between ">
                            {techs && techs.map((tech: Tech) => {
                                return (
                                    <img src={tech.imageUrl} alt={tech.alt} width="40px" height="40px" />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Third screen : Projects */}
            <div id={"third"} className={"mt-80 lg:mt-96 w-full relative overflow-visible "}>
                <BackgroundPicture
                    className={"absolute z-0 top-0 inset-x-0 " +
                               "flex justify-center " +
                               "bg-grid bg-repeat bg-top mask-fade"}
                    title={"beams"}
                    alt={"Background beams"}
                    source={"assets/img/beams3"}
                />
                <div id="projects" className={blog_like + "flex-col z-10"}>
                    <h1 className={title_1 + " my-8"}>Projets</h1>
                    <div id="projects-container" className="bg-white rounded-3xl shadow-lg h-[560px] flex flex-row px-8">
                        <nav className="grid place-items-center">
                            <ul className="space-y-6">
                                {projects && projects.map((project: Tab) => {
                                    return (
                                        <li key={project.title}
                                            className={"hover:cursor-pointer " + (project === selectedTab ? "selected" : "")}
                                            onClick={() => setSelectedTab(project)}>
                                            {project.title}
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                        <div id="projects" key={"projects"} className="flex-grow overflow-auto flex flex-col py-4">
                                {selectedTab && selectedTab.content.map((project: Card) => {
                                    return (
                                        <div className="px-24 w-full m-auto" key={project.name}>
                                            <AnimatePresence mode="wait" key={"animation"}>
                                                <motion.div key={project.name}
                                                    initial={{ y: 10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -10, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}>
                                                    <CardComponent className="text-justify overflow-auto"
                                                                   key={project.name}
                                                                   bg={"bg-slate-50"}
                                                                   card={project} />
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Fourth screen : Status and footer infos */}
            <div id={"fourth"} className={"mt-80 lg:mt-96 w-full relative overflow-visible "}>
                <BackgroundPicture
                    className={"absolute z-0 top-0 inset-x-0 " +
                               "flex justify-center " +
                               "bg-grid bg-repeat bg-top mask-fade"}
                    title={"beams"}
                    alt={"Background beams"}
                    source={"assets/img/beams4"}
                />
                <div id="status" className={blog_like + "flex-col z-10"}>
                    <h1 className={title_1 + " my-8"}>Statut</h1>
                    <div id="status-container" className="bg-white rounded-3xl shadow-lg flex flex-row px-8">
                    </div>
                </div>
            </div>

        </div>
    )
}
