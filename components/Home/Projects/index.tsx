import { useEffect } from 'react'; 
import Image from 'next/image';
import {
    FaGithub,
    FaExternalLinkAlt,
    FaReact
} from 'react-icons/fa';
import { GrGatsbyjs } from 'react-icons/gr';
import { SiSvelte } from 'react-icons/si';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    STRING_ON,
    STRING_PROJECTS_KARYA_ASIH,
    STRING_PROJECTS_MONGGO_IO,
    STRING_STUFF,
    STRING_WORKED
} from "../../../locale";

const ProjectsList: Array<{
    id: number,
    title: string,
    img: {
        src: string,
        alt: string
    },
    github: string,
    link: string,
    languages: Array<{
        id: number,
        name: string,
        icon: React.ReactNode
    }>,
    description: string
}> = [
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

export default function Projects() {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease-in-out',
            once: true
        });
        AOS.refresh();
    }, []);

    return (
        <div
            id="projects"
            className="flex flex-col space-y-12 text-blue-sapphire"
        >
            <div className="flex flex-row space-x-2 text-4xl lg:text-5xl">
                <span className="font-light">{STRING_STUFF}</span>
                <span className="font-medium">{STRING_WORKED}</span>
                <span className="font-light">{STRING_ON}</span>
            </div>
            {
                ProjectsList.map(project => (
                    <div className="flex flex-row flex-wrap lg:flex-nowrap space-x-5" key={project.id}>
                        {
                            // Odd numbered projects means pic on the left and vice versa
                            (isTabletOrMobile || project.id % 2 !== 0) && 
                            <div className="w-full md:w-1/2" data-aos="zoom-in-right">
                                <Image
                                    src={project.img.src}
                                    alt={project.img.src}
                                    width={500}
                                    height={400}
                                    quality={100}
                                />
                            </div>
                        }
                        <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="400">
                            <div className="flex flex-col space-y-5">
                                <div className="flex flex-row items-center space-x-3">
                                    <a className="text-3xl lg:text-4xl underline hover:text-opacity-80" href={project.link} target="blank">
                                        {project.title}
                                    </a>
                                    <a className="p-1 bg-white rounded-full hover:shadow-xl" href={project.github} target="blank">
                                        <FaGithub className="text-2xl"/>
                                    </a>
                                    <a className="p-1 bg-white rounded-full hover:shadow-xl" href={project.link} target="blank">
                                        <FaExternalLinkAlt className="text-2xl"/>
                                    </a>
                                </div>
                                <div className="flex flex-row items-center space-x-3 text-white">
                                    {
                                        project.languages.map(lang => {
                                            return (
                                                <div key={lang.id} className="flex flex-row items-center justify-between bg-blue-sapphire px-4 py-2 rounded-full space-x-2 tex-md lg:text-lg">
                                                    <span>{lang.name}</span>
                                                    {lang.icon}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <p className="text-md">
                                    {project.description}    
                                </p>
                            </div>
                        </div>
                        {
                            // Odd numbered projects means pic on the left and vice versa
                            (!isTabletOrMobile && project.id % 2 === 0) && 
                            <div className="w-full md:w-1/2" data-aos="zoom-in-left">
                                <Image
                                    src={project.img.src}
                                    alt={project.img.src}
                                    width={500}
                                    height={400}
                                    quality={100}
                                />
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    );
}
