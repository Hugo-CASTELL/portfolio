import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import LinkedInIcon from "../Icons/LinkedInIcon.tsx";
import {personal_infos} from "../../resources/personal_infos.ts";

export const headerRefs = [
    { name: 'Profil', href: "#second" },
    { name: 'Projets', href: "#third" },
]

export const contact_section = [
    { name: 'LinkedIn', description: 'Accéder à mon profil', href: personal_infos.linkedin, icon: LinkedInIcon },
]
export const callsToAction = [
    { name: 'Par mail', href: `mailto:${personal_infos.email}`, icon: EnvelopeIcon },
    { name: 'Par téléphone', href: `tel:${personal_infos.phone}`, icon: PhoneIcon },
]

