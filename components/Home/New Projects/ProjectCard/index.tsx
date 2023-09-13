import Image from 'next/image';
import { Project } from '../types';
import React, { useState } from 'react';
import styles from "./projectcard.module.css";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectProps {
    project: Project
}

const ProjectCard: React.FC<ProjectProps> = ( { project }: ProjectProps) => {
    const [ isCardHovered, setIsCardHovered ] = useState(false);
    return (
        <div 
            className="w-full relative border-2 rounded-lg cursor-pointer"
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
        >
            <Image
                src={project.img.src}
                alt={project.img.alt}
                width={500}
                height={400}
                quality={100}
                className={styles.card__background}
            />
            <div className={isCardHovered ? styles.card__overlay_hovered : styles.card__overlay}>
                <div className="flex flex-col p-2 md:p-4">
                    <div className="flex flex-row justify-between w-full">
                        <span className="text-xl md:text-2xl font-semibold">{project.title}</span>
                        <div className="flex flex-row space-x-3 md:space-x-6">
                            <a className="p-1 bg-white rounded-full hover:shadow-xl hover:bg-gray-800 hover:text-white" href={project.github} target="blank">
                                <FaGithub className="text-2xl"/>
                            </a>
                            <a className="p-1 bg-white rounded-full hover:shadow-xl hover:bg-gray-800 hover:text-white" href={project.link} target="blank">
                                <FaExternalLinkAlt className="text-2xl"/>
                            </a>
                        </div>
                    </div>
                    <span>{project.title}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;