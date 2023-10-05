import Lottie from 'react-lottie';
import { Project } from '../types';
import React, { useState } from 'react';
import styles from "./projectcard.module.css";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

interface ProjectProps {
    project: Project
}

const ProjectCard: React.FC<ProjectProps> = ( { project }: ProjectProps) => {
    const [ isCardHovered, setIsCardHovered ] = useState(false);
    const { width } = useWindowDimensions();
    const isTabletOrMobile = width < 780;


    const defaultOptions = {
        loop: true,
        autoplay: isTabletOrMobile ? true : isCardHovered,
        animationData: project.animationSrc,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div 
            className="w-full relative border-2 rounded-lg cursor-pointer"
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
        >
            <Lottie 
                options={defaultOptions}
                height={isTabletOrMobile? "50vh" : "40vh"}
                isPaused={isTabletOrMobile ? false : !isCardHovered}
            />
            <div className={isCardHovered ? styles.card__overlay_hovered : styles.card__overlay}>
                <div className="flex flex-col p-2 md:p-4">
                    <div className="flex flex-row justify-between w-full pb-1 lg:pb-2">
                        <span className="text-lg md:text-2xl font-semibold">{project.title}</span>
                        <div className="flex flex-row space-x-3 md:space-x-6">
                            <a className="p-1 bg-white rounded-full hover:shadow-xl hover:bg-gray-800 hover:text-white" href={project.github} target="blank">
                                <FaGithub className="text-2xl"/>
                            </a>
                            <a className="p-1 bg-white rounded-full hover:shadow-xl hover:bg-gray-800 hover:text-white" href={project.link} target="blank">
                                <FaExternalLinkAlt className="text-2xl"/>
                            </a>
                        </div>
                    </div>
                    <span className='text-sm md:text-lg'>{project.description}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;