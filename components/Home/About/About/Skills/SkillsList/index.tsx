import { useEffect, useState } from "react";
import { nonProfSkills, professionalSkills } from "./data";
import styles from './skills.module.css';

interface skillsListProps {
    isProfessional: boolean;
} 

const SkillsListSection: React.FC<skillsListProps> = ({ isProfessional }: skillsListProps) => {
    const [ currentSkills, setCurrentSkills ] = useState(isProfessional ? professionalSkills : nonProfSkills);

    useEffect(() => {
        if (isProfessional) {
            setCurrentSkills(professionalSkills)
        } else {
            setCurrentSkills(nonProfSkills);
        }
    }, [isProfessional])

    return (
        <>
            {
                currentSkills.map((skill) => (
                    <div className="flex flex-col md:flex-row md:h-28 items-center">
                        <div className="w-full md:w-1/4">
                            <span className="text-2xl lg:text-3xl font-bebas">{skill.title}</span>
                        </div>
                        <div className={styles.vertical_line} />
                        <div className="w-full flex flex-row flex-wrap">
                            {
                                skill.skillsList.map((skill) => (
                                    <div
                                        className="flex flex-row border border-white bg-blue-sapphire rounded-md text-white justify-around items-center
                                        text-lg lg:text-xl font-catamaran m-1 md:m-2 hover:text-blue-sapphire hover:bg-white hover:border-blue-sapphire"
                                        data-aos="flip-left"
                                    >
                                        <span className="px-2">{skill.name}</span>
                                        <span className="px-2">{skill.icon}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default SkillsListSection;