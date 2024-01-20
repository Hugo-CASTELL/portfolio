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

export const educational_projects: Card[] = [
    { name:"CaptElec | Visualisation de flux MQTT", imageUrl:"test/png", description:"Projet consistant à produire un site web réactif permettant de visualiser les informations de flux MQTT sur un SVG représentant un bâtiment. Déplacement entre les étages possibles.", tags:["IoT", "React", "Tailwind", "NodeJS", "MySQL"], languages:["test"], links:["test"]} ,
    { name:"CaptElec |  MQTT", imageUrl:"test/png", description:"Projet consistant à produire un site web réactif permettant de visualiser les informations de flux MQTT sur un SVG représentant un bâtiment. Déplacement entre les étages possibles.", tags:["IoT", "React", "Tailwind", "NodeJS", "MySQL"], languages:["test"], links:["test"]} 
]

export const personal_projects: Card[] = [
    { name:"Site web portfolio", imageUrl:"test/png", description:"Création de ce site web from scratch.", tags:["React", "Tailwind"], languages:["languages"], links:["languages"]},
    { name:"Personal configs", imageUrl:"test/png", description:"Playbook ansible permettant d'installer ma configuration personnelle automatiquement: logiciels, paramètres, clés d'accès cryptées...", tags:["Ansible", "Shell"], languages:["languages"], links:["languages"]},
    { name:"riot-api-manipulation", imageUrl:"test/png", description:"Package python permettant d'aider les data analysts à manipuler les APIs de Riot Games", tags:["python"], languages:["languages"], links:["languages"]},
    { name:"Nuit de l'info 2023", imageUrl:"test/png", description:"Participation à la nuit de l'informatique édition 2023", tags:["React", "ASP.NET"], languages:["languages"], links:["languages"]}
]

export const projects: Tab[] = [
    { title:"Personnels", content: personal_projects },
    { title:"Cours", content: educational_projects },
]

