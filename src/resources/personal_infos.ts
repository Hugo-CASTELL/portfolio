interface PersonalInfos {
    first_name: string;
    last_name: string;
    job: string;
    email: string;
    phone: string;
    city: string;
    country: string;
    website: string;
    github: string;
    linkedin: string;
    cv_link: string;
    face_link: string;
    searching_job: boolean;

    full_name(): string;
}
export const personal_infos: PersonalInfos = {
    first_name: 'Hugo',
    last_name: 'CASTELL',
    job: 'Développeur informatique',
    email: 'hugo.castell@outlook.fr',
    phone: '0780368786',
    city: 'Blagnac',
    country: 'France',
    website: 'https://hcastell.fr',
    github: 'https://github.com/Hugo-CASTELL/',
    linkedin: 'https://linkedin.com/in/hugo-castell',
    cv_link: 'https://drive.google.com/file/d/1KHBOcgwqIP5c98FuxUlXT8K2MI-Jk3yy/view?usp=sharing',
    face_link: 'assets/images/face.jpeg',
    searching_job: true,

    full_name: function() {
        return `${this.first_name} ${this.last_name}`;
    }
}
