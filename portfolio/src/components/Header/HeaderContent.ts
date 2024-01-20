import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import GithubIcon from "../Icons/GithubIcon.tsx";
import LinkedInIcon from "../Icons/LinkedInIcon.tsx";
import {personal_infos} from "../../resources/personal_infos.ts";

export const headerRefs = [
    { name: 'Projets', href: "#second" },
]

export const contact_section = [
    { name: 'Github', description: 'Voir mes projets open-source', href: personal_infos.github, icon: GithubIcon },
    { name: 'LinkedIn', description: 'Accéder à mon profil', href: personal_infos.linkedin, icon: LinkedInIcon },
]
export const callsToAction = [
    { name: 'Par mail', href: `mailto:${personal_infos.email}`, icon: EnvelopeIcon },
    { name: 'Par téléphone', href: `tel:${personal_infos.phone}`, icon: PhoneIcon },
]

