import Image from 'next/image';
import styles from "./home.module.css";
import Projects from './Projects';
import Navbar from '../Navbar';
import LandingPage from './Landing';
import HomeLayout from './Layout';
import About from './About';
import Contact from './Contact';

export default function Home() {
    return (
        <>
            <div>
                <div className={styles.background}>
                    <Image
                        src="/images/home_profile.jpg"
                        alt="Wave background"
                        priority
                        objectFit="cover"
                        quality={100}
                        layout="fill"
                    />
                </div>
                <Navbar className="sticky" />
                <HomeLayout>
                        <LandingPage />
                </HomeLayout>
            </div>
            <div className={styles.outerContainer}>
                <div className={styles.background}>
                    <Image
                        src="/images/Wave_BG.svg"
                        alt="Wave background"
                        objectFit="cover"
                        quality={100}
                        layout="fill"
                    />
                </div>
                <hr className="border border-blue-sapphire"/>
                <HomeLayout>
                    <Projects />
                </HomeLayout>
            </div>
            <div className={styles.outerContainer}>
                <HomeLayout>
                    <About />
                </HomeLayout>
            </div>
            <div className={styles.outerContainer}>
                <div className={styles.background}>
                    <Image
                        src="/images/Wave_BG_Contact.svg"
                        alt="Wave background"
                        objectFit="cover"
                        quality={100}
                        layout="fill"
                    />
                </div>
                <HomeLayout>
                    <Contact />
                </HomeLayout>
            </div>
        </>
    );
}
