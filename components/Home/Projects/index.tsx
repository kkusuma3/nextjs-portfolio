import { useEffect } from 'react'; 
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    STRING_STUFF_I_WORKED_ON,
} from "../../../locale";
import { ProjectsList } from './data';
import ProjectCard from './ProjectCard';

export default function NewProjects() {

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
            className="flex flex-col text-blue-sapphire"
        >
            <div className="flex flex-row space-x-2 text-3xl lg:text-5xl">
                <span className="font-light text-white">{STRING_STUFF_I_WORKED_ON}</span>
            </div>
            <hr className="border-2 rounded-md border-white my-2 md:my-4 w-1/6 md:w-1/12"/>
            <div className="flex flex-row flex-wrap justify-between">
                {
                    ProjectsList.map(project => (
                        <div className="py-4 md:py-8" data-aos="fade-right" >
                            <ProjectCard project={project} />
                        </div>
                    ))
                }
            </div>

        </div>
    );
}
