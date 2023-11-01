import { useState } from "react";
import SkillsListSection from "./SkillsList";
import Toggle from 'react-toggle';
import "react-toggle/style.css";

export default function Skills() {
    const [ isToggled, setIsToggled ] = useState(false);

    return (
        <div className="flex flex-col flex-wrap py-5 md:py-10">
            <div className="flex flex-row flex-wrap w-full md:justify-between">
                <span className="text-2xl md:text-4xl py-5 md:py-10 w-full md:w-auto">
                    {isToggled ? "Some other things I enjoy doing ⚽" : "Some of the things I’ve been paid to do 🤓"}
                </span>
                <label className="flex items-center pb-5 md:pb-0">
                    <span className="p-1 md:p-2 text-2xl">💻</span>
                    <Toggle
                        defaultChecked={isToggled}
                        icons={false}
                        onChange={() => setIsToggled(!isToggled)} />
                    <span className="p-1 md:p-2 text-2xl">🎉</span>
                </label>
            </div>
            <SkillsListSection isProfessional={!isToggled} />
        </div>
    );
}