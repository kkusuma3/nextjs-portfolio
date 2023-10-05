import {
    STRING_ABOUT,
    STRING_BLOG,
    STRING_CONTACT,
    STRING_PROJECTS
} from '../../locale';

export const headerLinks: Array<{
    label: string;
    link: string;
    isMobile?: boolean;
}> = [
    {
        label: STRING_PROJECTS,
        link: "projects"
    },
    {
        label: STRING_ABOUT,
        link: "about"
    },
    {
        label: STRING_BLOG,
        link: "/"
    },
    {
        label: STRING_CONTACT,
        link: "contact",
        isMobile: true
    },
];