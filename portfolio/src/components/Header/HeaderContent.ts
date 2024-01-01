import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import GithubIcon from "../Icons/GithubIcon.tsx";
import LinkedInIcon from "../Icons/LinkedInIcon.tsx";
import {personal_infos} from "../../resources/personal_infos.ts";
import {URLS} from "../../resources/urls.ts";

export const headerRefs = [
    { name: 'Analytics', href: URLS.HOME },
    { name: 'Test', href: URLS.HOME },
    { name: 'Test', href: URLS.HOME },
]

export const contact_section = [
    // { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icons: ChartPieIcon },
    // { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icons: CursorArrowRaysIcon },
    // { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icons: FingerPrintIcon },
    // { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icons: SquaresPlusIcon },
    // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icons: ArrowPathIcon },
    { name: 'Github', description: 'Where my code is stored', href: personal_infos.github, icon: GithubIcon },
    { name: 'LinkedIn', description: 'for non cool stuff', href: personal_infos.linkedin, icon: LinkedInIcon },
]
export const callsToAction = [
    { name: 'Mail me', href: `mailto:${personal_infos.email}`, icon: EnvelopeIcon },
    { name: 'Phone me', href: `tel:${personal_infos.phone}`, icon: PhoneIcon },
]

