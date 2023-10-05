import { useEffect } from 'react'; 
import { AiOutlineArrowRight } from 'react-icons/ai';
import AOS from 'aos';
import "aos/dist/aos.css";
import { RESUME_S3_URL } from '../../../../locale';
import styles from './about_card.module.css';
import Image from 'next/image';
import Skills from './Skills';

export default function AboutSection() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
        AOS.refresh();
    }, []);

    return (
        <div className="flex flex-col text-blue-sapphire">
            <div className="flex flex-row flex-wrap lg:flex-nowrap py-10 md:py-20 space-x-6">
                <div className={styles.grid__image}>
                        <Image
                            src="/images/About_Kevin.jpg"
                            alt="Picture of Kevin Kusuma standing"
                            width={400}
                            height={1000}
                            quality={80}
                            className={styles.img__kevin}
                        />
                        <div className={styles.img__background_overlay}></div>
                </div>
                <div className="w-full lg:w-2/3 lg:px-10">
                    <div className="flex flex-col h-full justify-center space-y-6">
                        <span className="text-xl md:text-2xl font-semibold">
                            Name’s Kevin, nice to meet you! 👋
                        </span>
                        <p className="text-md md:text-lg">
                            I am a <strong>child of God ✝️</strong> who happens to be a <strong>software engineer 💻</strong>  who was born and raised in Jakarta, Indonesia and currently residing in Atlanta, GA.
                            I love gaming 🎮 and sports ⚽ among other things but I can also <strong>take your organization to the next level 🚀</strong> and if you want to know more about my professional journey, please <i>view my resume</i> below this paragraph.
                            Other than that, I like dabbling with websites, apps and anything tech so feel free to hit me up on my socials to see more of my passion projects. In the meantime, please enjoy this page-long journey of exploring about myself!
                        </p>
                        <a
                            href={RESUME_S3_URL}
                            target="_blank"
                            className="text-lg md:text-xl font-semibold border border-whte bg-blue-sapphire text-white p-2 md:p-3 hover:bg-white hover:text-blue-sapphire hover:border-blue-sapphire w-full md:w-1/2 lg:w-1/3"
                        >
                            <span className="flex flex-row items-center justify-around">View my Resume here <AiOutlineArrowRight /></span>
                        </a>
                    </div>   
                </div>
            </div>
            <Skills />
        </div>  
    );
}