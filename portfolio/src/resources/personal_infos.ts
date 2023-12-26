interface PersonalInfos {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    city: string;
    country: string;
    website: string;
    github: string;
    linkedin: string;

    full_name(): string;
}
export const personal_infos: PersonalInfos = {
    first_name: 'Hugo',
    last_name: 'CASTELL',
    email: 'hugo.castell@outlook.fr',
    phone: '0780368786',
    city: 'Blagnac',
    country: 'France',
    website: 'https://hcastell.fr',
    github: 'https://github.com/Hugo-CASTELL/',
    linkedin: 'https://linkedin.com/in/hugo-castell',

    full_name: function() {
        return `${this.first_name} ${this.last_name}`;
    }
}
