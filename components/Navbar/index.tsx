import { useState, useEffect } from 'react';
import Image from 'next/image';
import Headroom from 'react-headroom';
import { Link } from 'react-scroll';
import {
    STRING_CONTACT,
} from '../../locale';
import { headerLinks } from './data';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useTheme } from "next-themes";
import styles from "./navbar.module.css";

const HOME_BACKGROUND_SRC = "/images/Landing/home_logo_light.png";
const HOME_BACKGROUND_DARK_SRC = "/images/Landing/home_logo_transparent.png";

const navClassName = (scrolled: boolean, clicked: boolean, isDarkMode: boolean, className: string): string => {
    if (scrolled || clicked) {
        if (!isDarkMode)
            return "bg-white " + className;
        else
            return "bg-gray-800 " + className;
    }
    return className;
}

const darkModeIconsClassName = (scrolled: boolean, isDarkMode: boolean): string => {
    if (scrolled) {
        if (!isDarkMode)
            return "text-black"
        else
            return "text-light-blue-sapphire"
    } else {
        if (isDarkMode)
            return "text-light-blue-sapphire"
        else
            return "text-black"
    }
}

export default function Nav() {
    const [ isScrolled, setIsScrolled ] = useState(false);
    const [ isMenuClicked, setIsMenuClicked ] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 0 ? setIsMenuClicked(false) : null;
            window.scrollY > window.innerHeight ? setIsScrolled(true) : setIsScrolled(false);
        }
        window.addEventListener('scroll', handleScroll);
        return() => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <Headroom>
            <header>
                <nav
                    id="nav"
                    className={navClassName(isScrolled, isMenuClicked, currentTheme !== "light", "transition duration-500 bg-transparent mb-5 md:mb-10 mx-auto px-6 lg:px-48 relative")}
                >
                    <ul className="flex flex-wrap w-full justify-between items-center px-4 md:px-8 md:mb-4">
                        <li>
                            <Link
                                activeClass="active"
                                to="home"
                                className="cursor-pointer"
                                spy
                                smooth
                                offset={-500}
                                duration={500}
                            >
                                <Image
                                    src={currentTheme === "light" ? HOME_BACKGROUND_SRC : HOME_BACKGROUND_DARK_SRC}
                                    alt="Picture of Kevin Kusuma Logo"
                                    sizes="(max-width: 768px) 70px, 1110px"
                                    width={90}
                                    height={90}
                                    quality={80}
                                    priority
                                />
                            </Link>
                        </li>
                        <li className="flex justify-between items-center space-x-10">
                            <ul className="hidden md:flex space-x-10">
                                {headerLinks.map(({ label, link, isMobile }) => {
                                    if (!isMobile) {
                                        return (
                                            <li key={label}>
                                                <Link
                                                    activeClass="active"
                                                    to={link}
                                                    className={currentTheme === 'light' ? styles.navbar__heading : styles.navbar__heading_dark}
                                                    spy
                                                    smooth
                                                    duration={500}
                                                >
                                                    {label}
                                                </Link>
                                            </li>
                                        )
                                    }
                                })}
                            </ul>
                            <Link
                                activeClass="active"
                                to="contact"
                                className="hidden md:flex"
                                spy
                                smooth
                                duration={750}
                            >
                                <button className={currentTheme === 'light' ? styles.navbar__btn_contact : styles.navbar__btn_contact_dark}>
                                    {STRING_CONTACT}
                                </button>
                            </Link>
                            <div className={darkModeIconsClassName(isScrolled, currentTheme !== "light") + " flex flex-row text-xl lg:text-3xl space-x-2"}>
                                <MdLightMode />
                                { 
                                    currentTheme === "light" ? 
                                    <BsToggleOff className='cursor-pointer' onClick={() => setTheme('dark')} /> :
                                    <BsToggleOn className='cursor-pointer' onClick={() => setTheme('light')} />
                                }
                                <MdDarkMode />
                            </div>
                        </li>
                        <div className="-mr-2 flex md:hidden">
                            <span
                                className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-black dark:text-light-blue-sapphire focus:outline-none"
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            >
                                <GiHamburgerMenu />
                            </span>
                        </div>
                    </ul>
                    <div className={isMenuClicked ? "w-full absolute left-0 md:hidden" : "w-full hidden"}>
                        <ul className={isMenuClicked ? "bg-white dark:bg-gray-800 flex flex-col px-4 py-2 space-y-1 sm:px-3 transition duration-500 w-full" : "flex flex-col px-4 py-2 space-y-1 sm:px-3"}>
                            {headerLinks.map(({ label, link }) => (
                                <li key={label}>
                                    <Link
                                        activeClass="active"
                                        to={link}
                                        className="text-blue-sapphire dark:text-light-blue-sapphire hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                        spy
                                        smooth
                                        duration={700}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
        </Headroom>
    );
}
