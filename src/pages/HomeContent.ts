export interface Tab {
    title: string,
    content: Card[],
}

export interface Card {
    date: string,
    name: string,
    description: string,
    tags: string[],
    important: boolean,

    competencesBUT?: string[],

    link?: string[],
    imageUrl?: string,
}

/*
 * Projects
 */
export const educational_projects: Card[] = [
    { 
        date: "2023",
        name:"CiReact",
        description:"",
        tags:["IoT", "React", "Tailwind", "NodeJS", "MySQL"],
        competencesBUT:["Optimiser", "Réaliser", "Collaborer", "Administrer", "Gérer", "Conduire"],
        important: true,
    },
    { 
        date: "2023",
        name:"CaptElec | Visualisation de flux MQTT",
        description:"Projet consistant à produire un site web réactif permettant de visualiser les informations de flux MQTT sur un SVG représentant un bâtiment. Déplacement entre les étages possibles.",
        tags:["IoT", "React", "Tailwind", "NodeJS", "MySQL"],
        competencesBUT:["Optimiser", "Réaliser", "Collaborer"],
        important: true,
    },
]

export const personal_projects: Card[] = [
    { 
        date: "2024",
        name:"Site web portfolio",
        description:"Création de ce site web from scratch.",
        tags:["React", "Tailwind"],
        important: true,
    },
    { 
        date: "2024",
        name:"Personal configs",
        description:"Playbook ansible permettant d'installer ma configuration personnelle automatiquement: logiciels, paramètres, clés d'accès cryptées...",
        tags:["Ansible", "Shell"],
        important: true,
    },
    { 
        date: "2023",
        name:"riot-api-manipulation",
        description:"Package python permettant d'aider les data analysts à manipuler les APIs de Riot Games",
        tags:["python"],
        important: true,
    },
    { 
        date: "2023",
        name:"Nuit de l'info 2023",
        imageUrl:"test/png",
        description:"Participation à la nuit de l'informatique édition 2023",
        tags:["React", "ASP.NET"],
        important: false,
    },
]

// Order cards by date and importance
function sort_by_date_and_importance(tab: Card[]) {
    tab.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;
        return a.important && !b.important ? -1 : 1;
    })
}

sort_by_date_and_importance(personal_projects);
sort_by_date_and_importance(educational_projects);

export const projects: Tab[] = [
    { title:"Personnels", content: personal_projects },
    { title:"Universitaires", content: educational_projects },
]

/*
 * Profil
 */
export interface TimeLineEvent {
    title: string,
    content: string,
    date: string,
}

export const resumeTimeLinePro: TimeLineEvent[] = [
    { date:"2022-2024", title:"INEO SCLE Ferroviaire | Alternance", content:"Développement d'applications de calculs et de génération 3D" },
]

export const resumeTimeLineSchool: TimeLineEvent[] = [
    { date:"2021-2024", title:"BUT Informatique | IUT Blagnac", content:"Parcours Développement d'Applications" },
    { date:"2021", title:"Baccalauréat Général", content:"Spécialités Mathématiques et Numérique, Sciences de l'Informatique" },
]

export interface Tech {
    imageUrl: string,
    alt: string,
}

export const techs: Tech[] = [
    { alt: ".NET", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" },
    { alt: "C#", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
    { alt: "MS SQL", imageUrl: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
]

export interface Hobby {
    imageUrl: string,
    alt: string,
}

export const hobbies: Hobby[] = [
    { alt: "Musculation", imageUrl: "assets/img/gym.png" },
    { alt: "Programmation", imageUrl: "assets/img/coding.png" },
    { alt: "Cuisine", imageUrl: "assets/img/cooking.png" },
]

export interface Skill {
    name: string,
    imageUrl: string | null,
    important: boolean,
}

export interface SkillContainer {
    title: string,
    content: Skill[],
}

export const skills: SkillContainer[] = [
    { title: "Développement web", content: [
        { name: "React"  , important: true,  imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "Angular", important: false, imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" },
        { name: "Symfony", important: false, imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/symfony/symfony-original.svg" },
        { name: "ASP.NET", important: false, imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg" },
    ]},
    { title: "Développement logiciel", content: [
        { name: "C#",     important: true,  imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
        { name: "Java",   important: false, imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
        { name: "Python", important: true,  imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "WPF .NET", important: false, imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg" },
    ]},
    { title: "Administration système", content: [
        { name: "Git", important: true, imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
        { name: "Ansible", important: true, imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original.svg" },
        { name: "Azure DevOps", important: false, imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
    ]},
    { title: "Soft skills", content: [
        { name: "Adaptabilité", important: false, imageUrl: null },
        { name: "Auto-formation", important: true, imageUrl: null },
        { name: "Communication", important: false, imageUrl: null },
        { name: "Force de proposition", important: true, imageUrl: null },
    ]},
    { title: "Langues", content: [
        { name: "Anglais B2 - TOEIC 925", important: true, imageUrl: null },
    ]},
]

/*
 * Statut
 */
export interface Status {
    searchingJob: boolean,
}

