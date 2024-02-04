import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import LinkedInIcon from "../Icons/LinkedInIcon.tsx";
import {personal_infos} from "../../resources/personal_infos.ts";

export const headerRefs = [
    { name: 'Profil', href: "#second" },
    { name: 'Projets', href: "#third" },
    { name: 'Statut', href: "#fourth" },
]

export const contact_section = [
    { name: 'LinkedIn', description: 'Accéder à mon profil', href: personal_infos.linkedin, icon: LinkedInIcon },
]
export const callsToAction = [
    { name: 'hugo.castell@outlook.fr', href: `mailto:${personal_infos.email}`, icon: EnvelopeIcon },
    { name: '07 80 36 87 86', href: `tel:${personal_infos.phone}`, icon: PhoneIcon },
]

