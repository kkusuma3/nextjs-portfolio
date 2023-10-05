import { useEffect } from 'react'; 
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    STRING_ON,
    STRING_STUFF,
    STRING_WORKED
} from "../../../locale";
import { ProjectsList } from './data';
import ProjectCard from './ProjectCard';

export default function NewProjects() {
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
            <hr className="border-2 rounded-md border-blue-sapphire my-2 md:my-4 w-1/6 md:w-1/12"/>
            <div className="flex flex-row flex-wrap justify-between md:space-x-4">
                {
                    ProjectsList.map(project => (
                        <div className="basis-1/2 py-4 md:py-8">
                            <ProjectCard project={project} />
                        </div>
                    ))
                }
            </div>

        </div>
    );
}
