import { AiOutlineArrowRight } from 'react-icons/ai';
import "aos/dist/aos.css";
import { RESUME_S3_URL } from '../../../../locale';
import styles from './about_card.module.css';
import Skills from './Skills';

export default function AboutSection() {

    return (
        <div className="flex flex-col text-blue-sapphire dark:text-white">
            <div className="flex flex-row flex-wrap lg:flex-nowrap py-10 md:py-20 space-x-6" data-aos="zoom-out-down">
                <div className={styles.grid__image}>
                        <picture>
                            <img
                                sizes="(max-width: 1290px) 100vw, 1290px"
                                srcSet="
                                    /images/about/about_kevin_srcset/About_Kevin_c_scale,w_190.webp 190w,
                                    /images/about/about_kevin_srcset/About_Kevin_c_scale,w_643.webp 643w,
                                    /images/about/about_kevin_srcset/About_Kevin_c_scale,w_906.webp 906w,
                                    /images/about/about_kevin_srcset/About_Kevin_c_scale,w_1149.webp 1149w,
                                    /images/about/about_kevin_srcset/About_Kevin_c_scale,w_1290.webp 1290w"
                                src="/images/about/about_kevin_srcset/About_Kevin_c_scale,w_1290.webp"
                                alt="Picture of Kevin Kusuma standing" 
                                className={styles.img__kevin}
                            />
                        </picture>
                        <div className={styles.img__background_overlay}></div>
                </div>
                <div className="w-full lg:w-2/3 lg:px-10">
                    <div className="flex flex-col h-full justify-center space-y-6">
                        <span className="text-xl md:text-2xl font-semibold">
                            Name’s Kevin, nice to meet you! 👋
                        </span>
                        <p className="text-md md:text-lg">
                            I am a <strong>child of God ✝️</strong> who happens to be a <strong>software engineer 💻</strong>  who was born and raised in Jakarta, Indonesia and currently residing in Atlanta, GA. I use this space to somewhat express myself and my interests.
                            I love gaming 🎮 and sports ⚽ among other things but I can also <strong>take your organization to the next level 🚀</strong> and if you want to know more about my professional journey, please <i>view my résumé</i> below this paragraph.
                            Other than that, I like dabbling with websites, apps and anything tech so feel free to hit me up on my socials to see more of my passion projects. In the meantime, please enjoy this page-long journey of exploring about myself!
                        </p>
                        <a
                            href={RESUME_S3_URL}
                            target="_blank"
                            className="text-lg md:text-xl font-semibold border border-whte bg-blue-sapphire  text-white p-2 md:p-3 hover:bg-white hover:text-blue-sapphire hover:border-blue-sapphire w-full md:w-1/2 lg:w-1/3"
                        >
                            <span className="flex flex-row items-center justify-around">View my Résumé here <AiOutlineArrowRight /></span>
                        </a>
                    </div>   
                </div>
            </div>
            <Skills />
        </div>  
    );
}