import { useState, useEffect } from 'react';
import Image from 'next/image';
import Headroom from 'react-headroom';
import { Link } from 'react-scroll';
import {
    STRING_CONTACT,
    STRING_ABOUT,
    STRING_BLOG,
    STRING_PROJECTS
} from '../../locale';
import { headerLinks } from './data';

const MobileNav = ( isMenuClicked ) => (
    <div className={isMenuClicked ? "w-full absolute md:hidden" : "w-full hidden md:hidden"}>
        <div className={isMenuClicked ? "bg-white flex flex-col px-4 py-2 space-y-1 sm:px-3 transition duration-500" : "flex flex-col px-4 py-2 space-y-1 sm:px-3"}>
            <a href="#projects" className="text-maroon hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{STRING_PROJECTS}</a>

            <a href="#about" className="text-maroon hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{STRING_ABOUT}</a>

            <a href="#" className="text-maroon hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{STRING_BLOG}</a>

            <a href="#contact" className="text-maroon hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{STRING_CONTACT}</a>

        </div>
    </div>
)

export default function Nav() {
    const [ isScrolled, setIsScrolled ] = useState(false);
    const [ isMenuClicked, setIsMenuClicked ] = useState(false);

    const navClassName = (scrolled: boolean, clicked: boolean, className: string): string => {
        if (scrolled || clicked) {
            return "bg-white " + className;
        }
        return className;
    }

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
                    className={navClassName(isScrolled, isMenuClicked, "transition duration-500 bg-transparent mb-5 md:mb-10 mx-auto px-6 lg:px-48 relative")}
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
                                    src="/images/Landing/home_logo_transparent.png"
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
                                                    className="text-maroon no-underline text-lg cursor-pointer"
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
                                <button className="btn-maroon cursor-pointer">
                                    {STRING_CONTACT}
                                </button>
                            </Link>
                        </li>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                                onClick={() => setIsMenuClicked(!isMenuClicked)}
                            >
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#612C42" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#612C42" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </ul>
                    <div className={isMenuClicked ? "w-full absolute left-0 md:hidden" : "w-full hidden"}>
                        <ul className={isMenuClicked ? "bg-white flex flex-col px-4 py-2 space-y-1 sm:px-3 transition duration-500 w-full" : "flex flex-col px-4 py-2 space-y-1 sm:px-3"}>
                            {headerLinks.map(({ label, link }) => (
                                <li key={label}>
                                    <Link
                                        activeClass="active"
                                        to={link}
                                        className="text-maroon hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
