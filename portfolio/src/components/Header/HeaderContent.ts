import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import GithubIcon from "../Icons/GithubIcon.tsx";
import LinkedInIcon from "../Icons/LinkedInIcon.tsx";

export const headerRefs = [
    { name: 'Analytics', href: '#' },
    { name: 'Test', href: '#' },
    { name: 'Test', href: '#' },
]

export const contact_section = [
    // { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    // { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    // { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    // { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
    { name: 'Github', description: 'Where my code is stored', href: 'https://github.com/Hugo-CASTELL/', icon: GithubIcon },
    { name: 'LinkedIn', description: 'for non cool stuff', href: 'https://linkedin.com/in/hugo-castell', icon: LinkedInIcon },
]
export const callsToAction = [
    { name: 'Mail me', href: 'mailto:hugo.castell@outlook.fr', icon: EnvelopeIcon },
    { name: 'Phone me', href: 'tel:0780368786', icon: PhoneIcon },
]

