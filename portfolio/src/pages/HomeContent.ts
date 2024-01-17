export interface Tab {
    title: string,
    content: Card[],
}

export interface Card {
    name: string,
    imageUrl: string,
    description: string,
    tags: string[],
    languages: string[],
    links: string[],
}

export const professional_projects: Card[] = [
    { name:"Bonjour", imageUrl:"test/png", description:"blablabla", tags:["test"], languages:["test"], links:["test"]} 
]

export const educational_projects: Card[] = [
    { name:"Bonjour", imageUrl:"test/png", description:"blablabla", tags:["test"], languages:["test"], links:["test"]} 
]

export const personal_projects: Card[] = [
    { name:"riot-api-manipulation", imageUrl:"test/png", description:"Python library designed to help data scientists to manipulate Riot Games' APIs", tags:["languages", "python"], languages:["languages"], links:["languages"]},
    { name:"Personal configs", imageUrl:"test/png", description:"Python library designed to help data scientists to manipulate Riot Games' APIs", tags:["languages"], languages:["languages"], links:["languages"]}
]

export const projects: Tab[] = [
    { title:"Professionnels", content: professional_projects },
    { title:"Personnels", content: personal_projects },
    { title:"Cours", content: educational_projects },
]

