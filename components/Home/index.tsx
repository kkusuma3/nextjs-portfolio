import Image from 'next/image';
import styles from "./home.module.css";
import Projects from './Projects';
import Navbar from '../Navbar';
import LandingPage from './Landing';
import HomeLayout from './Layout';
import About from './About';
import Contact from './Contact';
import NewProjects from './Projects';

const HOME_BACKGROUND_SRC_PREFIX = "/images/Landing/home_background"

export default function Home() {
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
                    src="/images/Wave_BG.svg"
                    alt="Wave background"
                    quality={50}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        zIndex: -1,
                    }}
                />
                <hr className="border border-blue-sapphire my-2 lg:my-6"/>
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
                    src="/images/Wave_BG_Contact.svg"
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
