import Image from 'next/image';
import styles from "./home.module.css";
import Navbar from '../Navbar';
import LandingPage from './Landing';
import HomeLayout from './Layout';
import About from './About';
import Contact from './Contact';
import NewProjects from './Projects';
import { useTheme } from "next-themes";

const HOME_BACKGROUND_SRC_PREFIX = "/images/Landing/home_background";
const PROJECTS_BACKGROUND_SRC = "/images/Projects_BG.svg";
const PROJECTS_BACKGROUND_DARK_SRC = "/images/Projects_BG_Dark.svg";
const CONTACT_BACKGROUND_SRC = "/images/Wave_BG_Contact.svg";
const CONTACT_BACKGROUND_DARK_SRC = "/images/Wave_BG_Contact_Dark.svg";


export default function Home() {
    const { systemTheme, theme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <>
            <div className={styles.outerContainer}>
                <picture>
                    <source 
                        srcSet={`${HOME_BACKGROUND_SRC_PREFIX}/home_profile_sm.webp`}
                        media="(max-width: 400px)"
                        className={styles.background}
                    />
                    <source 
                        srcSet={`${HOME_BACKGROUND_SRC_PREFIX}/home_profile_md.webp`}
                        media="(max-width: 900px)"
                        className={styles.background}
                    />
                    <Image
                        src={`${HOME_BACKGROUND_SRC_PREFIX}/home_profile.webp`}
                        alt="Background image of Kevin Kusuma"
                        priority
                        quality={100}
                        fill
                        style={{
                            objectFit: 'cover',
                            zIndex: -1,
                            filter: currentTheme === 'dark' ? 'brightness(50%)' : 'brightness(75%)',
                        }}
                    />
                </picture>
                <Navbar/>
                <HomeLayout>
                        <LandingPage />
                </HomeLayout>
            </div>
            <div className={styles.outerContainer}>
                <Image
                    src={ currentTheme === 'light' ? PROJECTS_BACKGROUND_SRC : PROJECTS_BACKGROUND_DARK_SRC } 
                    alt="Wave background"
                    quality={55}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                />
                <HomeLayout>
                    <NewProjects />
                </HomeLayout>
            </div>
            <div className={styles.outerContainer}>
                <HomeLayout>
                    <About />
                </HomeLayout>
            </div>
            <div className={styles.outerContainer}>
                <Image
                    src={ currentTheme === 'light' ? CONTACT_BACKGROUND_SRC : CONTACT_BACKGROUND_DARK_SRC } 
                    alt="Wave background"
                    quality={55}
                    sizes="100vw"
                    fill
                    style={{
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                />
                <HomeLayout>
                    <Contact />
                </HomeLayout>
            </div>
        </>
    );
}
