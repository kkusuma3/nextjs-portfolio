import { GrGatsbyjs, GrNext } from 'react-icons/gr';
import { SiSvelte } from 'react-icons/si';
import {
    FaReact
} from 'react-icons/fa';
import {
    STRING_PROJECTS_AA_WEDDING,
    STRING_PROJECTS_KARYA_ASIH,
    STRING_PROJECTS_MONGGO_IO,
} from "../../../locale";
import { Project } from './types';

export const ProjectsList: Array<Project> = [
    {
        id: 0,
        title: STRING_PROJECTS_AA_WEDDING,
        img: {
            src: "/images/Projects/AA_Wedding.png",
            alt: "Project 1 AA Wedding"
        }, 
        github: "https://github.com/kkusuma3/AA-Wedding",
        link: "https://aa-wedding.vercel.app/",
        languages: [
            {
                id: 1,
                name: 'React',
                icon: <FaReact />,
            },
            {
                id: 2,
                name: 'NextJS',
                icon: <GrNext />,
            }
        ],
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        id: 1,
        title: STRING_PROJECTS_MONGGO_IO,
        img: {
            src: "/images/Project_monggo.png",
            alt: "Project 1 Monggo IO"
        }, 
        github: "https://github.com/kkusuma3/monggo-io-landing",
        link: "https://ini.monggo.io/",
        languages: [
            {
                id: 1,
                name: 'React',
                icon: <FaReact />,
            },
            {
                id: 2,
                name: 'Gatsby',
                icon: <GrGatsbyjs />,
            }
        ],
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        id: 2,
        title: STRING_PROJECTS_MONGGO_IO,
        img: {
            src: "/images/Project_monggo.png",
            alt: "Project 1 Monggo IO"
        }, 
        github: "https://github.com/kkusuma3/monggo-io-landing",
        link: "https://ini.monggo.io/",
        languages: [
            {
                id: 1,
                name: 'React',
                icon: <FaReact />,
            },
            {
                id: 2,
                name: 'Gatsby',
                icon: <GrGatsbyjs />,
            }
        ],
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    },
    {
        id: 3,
        title: STRING_PROJECTS_KARYA_ASIH,
        img: {
            src: "/images/Project_monggo.png",
            alt: "Project 2 Karya Asih"
        }, 
        github: "https://github.com/kkusuma3/Karya-Asih-Svelte",
        link: "https://karya-asih-svelte.kevindwiputrak.vercel.app/",
        languages: [
            {
                id: 1,
                name: 'Svelte',
                icon: <SiSvelte />
            }
        ],
        description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
    }
]