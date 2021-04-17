import { useEffect } from 'react';
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import AOS from 'aos';
import "aos/dist/aos.css";
import {
    LINK_EMAIL,
    LINK_FACEBOOK,
    LINK_GITHUB,
    LINK_INSTAGRAM,
    LINK_LINKEDIN,
    STRING_BUTTON_RESUME,
    STRING_HELLO_WORLD,
    STRING_ISSA_ME,
    STRING_KEVIN_KUSUMA
} from "../../../locale";

const homeIcons: Array<{
    id: number,
    icon: React.ReactNode;
    link: string;
}> = [
    {
        id: 1,
        icon: <FaFacebook />,
        link: LINK_FACEBOOK
    },
    {
        id: 2,
        icon: <FaLinkedin />,
        link: LINK_LINKEDIN
    },
    {
        id: 3,
        icon: <FaGithub />,
        link: LINK_GITHUB
    },
    {
        id: 4,
        icon: <FaInstagram />,
        link: LINK_INSTAGRAM
    },
    {
        id: 5,
        icon: <GrMail />,
        link: LINK_EMAIL
    }
];


export default function LandingPage(){

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <div className="flex flex-col justify-center py-28 text-pale-cyan" data-aos="fade-up">
            <div className="flex flex-col my-10 lg:my-8 space-y-5">
                <span className="text-5xl lg:text-8xl text-center lg:text-left">{STRING_HELLO_WORLD}</span>
                <div className="flex flex-row text-2xl md:text-3xl space-x-3 justify-center lg:justify-start">
                    <span className="font-light">{STRING_ISSA_ME}</span>
                    <span className="font-medium">{STRING_KEVIN_KUSUMA}</span>
                </div>
                <a href="#resume">
                    <button className="border border-white bg-maroon p-4 lg:py-4 lg:px-10 rounded-3xl w-full lg:w-1/4 text-md md:text-lg lg:text-xl">
                        {STRING_BUTTON_RESUME}
                    </button>
                </a>
                <div className="flex flex-row flex-wrap w-full lg:w-1/3 lg:space-x-10 justify-between lg:justify-start">
                    {
                        homeIcons.map(({id, link, icon}) => (
                            <a
                                key={id}
                                className="p-1 my-2 lg:mx-4 bg-gray-800 bg-opacity-70 text-pale-cyan text-3xl rounded-full  hover:bg-pale-cyan hover:text-gray-800"
                                href={link}
                                target="blank"
                            >
                                {icon}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};