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
import AAWeddingAnimation from '../../../public/lottie/AAWedding.json';
import MonggoIOAnimation from '../../../public/lottie/Monggoio.json';
import KaryaAsihAnimation from '../../../public/lottie/KaryaAsih.json';
import { Project } from './types';

export const ProjectsList: Array<Project> = [
    {
        id: 0,
        title: STRING_PROJECTS_AA_WEDDING,
        animationSrc: AAWeddingAnimation,
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
        description: "This project is a collaboration between me & my gf (UX Design) to build a wedding invitation website for Andrew & Agnes. The project is based in NextJS, Typescript and connects to Google Sheets API for the form backend."
    },
    {
        id: 1,
        title: STRING_PROJECTS_MONGGO_IO,
        animationSrc: MonggoIOAnimation,
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
        description: "Monggo.io is a project that aims to tackle hotel room service management with the help of a centralized platform. The project is based in Gatsby, React and Vue with JavaScript and Firebase on the backend."
    },
    {
        id: 2,
        title: STRING_PROJECTS_KARYA_ASIH,
        animationSrc: KaryaAsihAnimation, 
        github: "https://github.com/kkusuma3/Karya-Asih-Svelte",
        link: "https://karya-asih-svelte.kevindwiputrak.vercel.app/",
        languages: [
            {
                id: 1,
                name: 'Svelte',
                icon: <SiSvelte />
            }
        ],
        description: "This project is a redesign of the existing Karya Asih Indonesia's website which outlines the company's strength, vision, mission and ways to reach them. The project is based in Svelte and JavaScript."
    }
]