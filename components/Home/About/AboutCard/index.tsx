import { useEffect } from 'react'; 
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import AOS from 'aos';
import "aos/dist/aos.css";
import { STRING_KEVIN_KUSUMA, LINK_FACEBOOK, LINK_LINKEDIN, LINK_GITHUB, LINK_INSTAGRAM, LINK_EMAIL } from '../../../../locale';
import styles from './about_card.module.css';

const socialMediaList: Array<{
    id: number,
    name: string,
    link: string,
    icon: React.ReactNode
}> = [
    {
        id: 1,
        name: "Facebook",
        link: LINK_FACEBOOK,
        icon: <FaFacebook />
    },
    {
        id: 2,
        name: "LinkedIn",
        link: LINK_LINKEDIN,
        icon: <FaLinkedin />
    },
    {
        id: 3,
        name: "Github",
        link: LINK_GITHUB,
        icon: <FaGithub />
    },
    {
        id: 4,
        name: "Instagram",
        link: LINK_INSTAGRAM,
        icon: <FaInstagram />
    },
    {
        id: 5,
        name: "Email",
        link: LINK_EMAIL,
        icon: <GrMail />
    },
];

export default function AboutCard() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
        AOS.refresh();
    }, []);

    return (
        <div className={styles.shadow}>
            <div
                className="flex flex-row flex-wrap lg:flex-nowrap justify-start lg:space-x-5 bg-blue-sapphire p-6 rounded-t-lg relative"
                data-aos="fade-up"
            >
                <div className="w-full lg:w-1/6 px-4 mr-2">
                    <img
                        src="/images/kevin_kusuma.jpg"
                        alt="Picture of kevin kusuma (me)"
                        className={styles.profilePicture}
                    />
                </div>
                <div className="flex flex-col mt-24 lg:mt-0 p-4 space-y-2 text-white">
                    <span className="text-3xl md:text-4xl">{STRING_KEVIN_KUSUMA}</span>
                    <hr className="border-1 w-1/12 border-white" />
                    <p className="text-md md:text-lg font-light">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                </div>
                <div
                    className="flex flex-row w-full space-x-6 md:space-x-5 lg:px-20 md:justify-around absolute -bottom-3 md:left-0"
                    data-aos="zoom-in"
                    data-aos-duration="300"
                >
                    {socialMediaList.map(socialMedia => {
                        return (
                            <a
                                key={socialMedia.id}
                                className="p-1 bg-gray-800 bg-opacity-80 text-pale-cyan text-2xl lg:text-3xl rounded-full hover:bg-pale-cyan hover:text-gray-800"
                                href={socialMedia.link}
                                target="blank"
                            >
                                {socialMedia.icon}
                            </a>
                        );
                    })}
                </div>
            </div>
            <hr />
            <div className="py-3 bg-light-blue-sapphire rounded-b-lg" />
        </div>
    );
}