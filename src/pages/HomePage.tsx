import Title from "../components/Home/Title.tsx";
import BackgroundPicture from "../components/BackgroundPicture.tsx";
import CardComponent from "../components/Card/Card.tsx";
import { Card, Hobby, Skill, SkillContainer, Tab, Tech, hobbies, projects, resumeTimeLinePro, resumeTimeLineSchool, skills, techs } from "./HomeContent.ts";
import { useState } from "react";
import GithubIcon from "../components/Icons/GithubIcon.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { personal_infos } from "../resources/personal_infos.ts";
import TimeLine from "../components/TimeLine/TimeLine.tsx";
import RadarCircle from "../components/RadarCircle/RadarCircle.tsx";
import PopoverContact from "../components/Header/PopoverContact.tsx";

export default function HomePage() {
    const [isTitleHovered, setIsTitleHovered] = useState(false);
    const [selectedTab, setSelectedTab] = useState<Tab>(projects[0]);

    const blog_like: string = "relative mx-auto grid w-full max-w-full px-16 sm:px-18 lg:flex lg:px-36 overflow-visible ";
    const title_1: string = "text-3xl sm:text-4xl text-primary font-extrabold tracking-tight ";
    const box_ring: string = "ring-1 ring-slate-200 ";
    const box_ring_secondary: string = "ring-1 ring-secondary ";

    return (
        <div className={"grid grid-cols-1 overflow-visible"}>

            {/* First screen : Main view */}
            <div id={"first"} className={blog_like + "mb-24 w-full"}>
                <motion.div id={"title-animation"}
                            animate={{ scale: isTitleHovered ? 1.03 : 1 }}>
                    <a target="_blank" href={personal_infos.github}>
                    <Title className={"mt-32 sm:mt-40 xl:mt-52 "} 
                           onMouseEnter={() => setIsTitleHovered(true)} 
                           onMouseLeave={() => setIsTitleHovered(false)} />
                    </a>
                </motion.div>
                <div className="flex justify-items-center items-center mt-28 w-full">
                    <motion.img className="absolute z-10 right-40 h-96 w-96 hidden xl:block border-8 border-solid border-secondary p-3 rounded-full" src="assets/img/face.jpeg" alt="Arrow down"
                                animate={{ opacity: 1, filter: isTitleHovered ? "blur(5px)" : "blur(0px)", transition: { ease: "easeInOut", duration: 0.22 } }} />
                    <motion.div id={"title-github-animation"} 
                                className="absolute right-36 top-48 z-20"
                                animate={{ opacity: isTitleHovered ? 1 : -1 }}>
                        <GithubIcon className={"z-20 hidden xl:block h-[410px] w-auto fill-secondary "} />
                        <p className="hidden xl:block text-center text-active text-xs">Direction mon Github</p>
                    </motion.div>
                </div>
            </div>

            {/* Second screen : Profile */}
            <div id={"second"} className={"w-full relative overflow-visible mb-24"}>
                <div className="mt-20">
                    <BackgroundPicture
                        className={"absolute z-0 top-36 inset-x-0 " +
                            "flex justify-center " +
                            "bg-grid bg-repeat bg-top mask-fade "}
                        title={"beams"}
                        alt={"Background beams"}
                        source={"assets/img/beams2"}
                    />
                    <div id="profile" className={blog_like + "flex-col z-10"}>
                        <h1 className={title_1 + " mt-24"}>Profil</h1>
                        <div id="margin" className="mt-56">
                        </div>
                        <div id="profile-container" className={"absolute top-0 inset-x-0 grid grid-rows-[auto, auto, auto] space-y-24"
                            + " w-full max-w-full px-16 sm:px-18 lg:px-36 "
                        } >
                            <div className="row-start-1 grid grid-cols-[auto, 1fr] space-x-4">
                                <div className="col-start-1 mt-40 max-h-[250px] overflow-auto">
                                    <p className="text-justify leading-relaxed break-words">
                                        Bonjour 👋 <br/> <br/>

                                        Je suis Hugo Castell, je suis un développeur enthousiaste et passionné par les défis techniques en tout genre basé à Toulouse, Occitanie, France. <br/><br/>
                                        Etudiant en informatique de 21 ans, je travaille en alternance au sein de l'entreprise d'INEO SCLE Ferroviaire en tant que développeur d'applications en C#. <br/> <br/>

                                        Bienvenue sur mon site personnel et bonne visite !
                                    </p>
                                </div>
                                <div className={box_ring + "col-start-2 rounded-3xl bg-white shadow-lg p-4 h-[400px] w-[580px] flex flex-col items-start space-y-6"}>
                                    <div>
                                        <h1 className="font-semibold text-primary-light text-xl mb-2">Expériences professionnelles</h1>
                                        <TimeLine className="ml-2" events={resumeTimeLinePro} />
                                    </div>
                                    <div>
                                        <h1 className="font-semibold text-primary-light text-xl mb-2">Parcours de formation</h1>
                                        <TimeLine className="ml-2" events={resumeTimeLineSchool} />
                                    </div>
                                </div>
                            </div>
                            <div className="row-rtart-2 w-full flex flex-row py-4 px-20">
                                <div className="w-full">
                                    <h1 className="text-center font-bold text-primary mb-2">Ma stack quotidienne</h1>
                                    <div className="flex flex-row justify-around">
                                        {techs && techs.map((tech: Tech) => {
                                            return (
                                                <div>
                                                    <img className="m-auto" src={tech.imageUrl} alt={tech.alt} width="45px" height="45px" />
                                                    <p className="text-center text-xs text-active">{tech.alt}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="w-full">
                                    <h1 className="text-center font-bold text-primary mb-2">Mes hobbies</h1>
                                    <div className="w-full flex flex-row justify-around">
                                        {hobbies && hobbies.map((hobby: Hobby) => {
                                            return (
                                                <div>
                                                    <img className="m-auto" src={hobby.imageUrl} alt={hobby.alt} width="45px" height="45px" />
                                                    <p className="text-center text-xs text-active">{hobby.alt}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="row-start-3 flex flex-row place-content-around w-full">
                                {skills && skills.map((skillcontainer: SkillContainer) => {
                                    return (
                                        <div>
                                            <h1 className="font-bold text-secondary text-center mb-2">{skillcontainer.title}</h1>
                                            <div className="grid place-content-center">
                                                <div className="flex flex-col">
                                                    {skillcontainer.content.map((skill: Skill) => {
                                                        return (
                                                            <div className="flex flex-row mb-2">
                                                                {skill.imageUrl && <img src={skill.imageUrl} className="mr-1" width="20px" height="auto" />}
                                                                <p className={skill.important ? "font-semibold" : "text-primary"}>{skill.name}</p>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third screen : Projects */}
            <div id={"third"} className={"mt-[480px] w-full relative overflow-visible "}>
                <div className="mt-20">
                    <BackgroundPicture
                        className={"absolute z-0 top-20 inset-x-0 " +
                            "flex justify-center " +
                            "bg-grid bg-repeat bg-top mask-fade"}
                        title={"beams"}
                        alt={"Background beams"}
                        source={"assets/img/beams3"}
                    />
                    <div id="projects" className={blog_like + "flex-col z-10"}>
                        <h1 className={title_1 + " my-8"}>Projets</h1>
                        <div id="projects-container" className={box_ring + "bg-white rounded-3xl shadow-lg h-[560px] flex flex-row px-8"}>
                            <nav className="grid place-items-center">
                                <ul className="space-y-6">
                                    {projects && projects.map((project: Tab) => {
                                        if(project.title != selectedTab?.title) {
                                            return (
                                                <li key={project.title}
                                                    className={"hover:cursor-pointer link link-underline link-underline-black text-black"}
                                                    onClick={() => setSelectedTab(project)}>
                                                    {project.title}
                                                </li>
                                            )
                                        }
                                        else{
                                            return (
                                                <li key={project.title}
                                                    className={"hover:cursor-pointer text-secondary font-semibold link link-underline link-underline-black text-black"}
                                                    onClick={() => setSelectedTab(project)}>
                                                    {project.title}
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            </nav>
                            <div id="projects" key={"projects"} className="flex-grow overflow-auto flex flex-col py-4">
                                {selectedTab && selectedTab.content.map((project: Card) => {
                                    return (
                                        <div className="px-20 w-full m-auto" key={project.name}>
                                            <AnimatePresence mode="wait" key={"animation"}>
                                                <motion.div key={project.name}
                                                    initial={{ y: 10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -10, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}>
                                                    <CardComponent className="text-justify overflow-auto"
                                                        key={project.name}
                                                        bg={"bg-secondary/2"}
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
            </div>

            {/* Fourth screen : Status and footer infos */}
            <div id={"fourth"} className={"mb-20 lg:mt-40 w-full relative overflow-visible "}>
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
                    <div id="status-container" className="flex flex-row justify-between">
                        <div className={box_ring + "rounded-3xl bg-white shadow-lg p-6 w-64"}>
                            <RadarCircle className="absolute" on={personal_infos.searching_job} />
                            <div className="w-full h-full flex place-content-center">
                                <div className="m-auto text-active text-justify text-sm">
                                    {personal_infos.searching_job ?
                                        <p>
                                            Actuellement en recherche d'une alternance à partir de septembre 2024.
                                        </p>
                                        :
                                        <p>
                                            test
                                        </p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={box_ring + "overflow-hidden rounded-3xl bg-white shadow-lg"}>
                            <PopoverContact />
                        </div>
                        <motion.div className={box_ring_secondary + "rounded-3xl bg-gradient-to-br from-secondary to-white shadow-lg p-6 w-64 flex items-center justify-center " +
                                               "hover:cursor-pointer"}
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => window.open(personal_infos.cv_link, "_blank")}>
                            <div>
                            <motion.p className="h-full w-full text-center text-white font-extrabold">
                                Télécharger mon CV
                            </motion.p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
    )
}
