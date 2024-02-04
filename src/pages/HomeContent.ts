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
        important: true,
    },
    { 
        date: "2023",
        name:"CaptElec | Visualisation de flux MQTT",
        description:"Projet consistant à produire un site web réactif permettant de visualiser les informations de flux MQTT sur un SVG représentant un bâtiment. Déplacement entre les étages possibles.",
        tags:["IoT", "React", "Tailwind", "NodeJS", "MySQL"],
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
    { title:"Cours", content: educational_projects },
]

/*
 * Profil
 */
export interface TimeLineEvent {
    title: string,
    content: string,
    date: string,
}

export const resumeTimeLine: TimeLineEvent[] = [
    { date:"2022-2024", title:"INEO SCLE Ferroviaire | Alternance", content:"" },
    { date:"2021-2024", title:"BUT Informatique | IUT Blagnac", content:"" },
    { date:"2021", title:"Baccalauréat Général", content:"Spécialités Mathématiques et Numérique et Sciences de l'Informatique" },
]

export interface Tech {
    imageUrl: string,
    alt: string,
}

export const techs: Tech[] = [
    { alt: "DotNet", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" },
    { alt: "C Sharp", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" },
    { alt: "Microsoft SQL Server", imageUrl: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
]

/*
 * Statut
 */
export interface Status {
    searchingJob: boolean,
}

