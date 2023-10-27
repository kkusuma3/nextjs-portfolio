import { FaAws, FaCross, FaGamepad, FaGuitar, FaHtml5, FaReact, FaTableTennis } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import { SiCsswizardry, SiGraphql, SiJavascript, SiNextdotjs, SiPython, SiTerraform, SiTypescript } from "react-icons/si";
import { GiAutogun, GiBasketballBasket, GiMachineGunMagazine, GiPokerHand, GiSoccerBall, GiTennisRacket } from 'react-icons/gi';
import { TbSportBillard } from 'react-icons/tb';
import { IoLogoGameControllerB } from 'react-icons/io';
import { MdPhotoCamera } from 'react-icons/md';
import { BsFillMicFill } from 'react-icons/bs';

export const professionalSkills = [
    {
        title: 'Frontend',
        skillsList: [
            {
                name: 'React',
                icon: <FaReact />
            },
            {
                name: 'GatsbyJS',
                icon: <GrGatsbyjs />
            },
            {
                name: 'NextJS',
                icon: <SiNextdotjs />
            },
            {
                name: 'Typescript',
                icon: <SiTypescript />
            },
            {
                name: 'Javascript',
                icon: <SiJavascript />
            },
            {
                name: 'HTML',
                icon: <FaHtml5 />
            },
            {
                name: 'CSS',
                icon: <SiCsswizardry />
            },
        ]
    },
    {
        title: 'Backend/ Infra',
        skillsList: [
            {
                name: 'Python',
                icon: <SiPython />
            },
            {
                name: 'Express',
                icon: <SiTypescript />
            },
            {
                name: 'GraphQL',
                icon: <SiGraphql />
            },
            {
                name: 'Terraform',
                icon: <SiTerraform />
            },
            {
                name: 'AWS',
                icon: <FaAws />
            },
        ]
    },
    {
        title: 'Certifications',
        skillsList: [
            {
                name: 'AWS Developer Associate',
                icon: <FaAws />
            },
            {
                name: 'AWS Cloud Practicioner',
                icon: <FaAws />
            },
            {
                name: 'Hashicorp Terraform Associate (002)',
                icon: <SiTerraform />
            },
        ]
    }
]

export const nonProfSkills = [
    {
        title: 'Sports',
        skillsList: [
            {
                name: 'Soccer',
                icon: <GiSoccerBall />
            },
            {
                name: 'Tennis',
                icon: <GiTennisRacket />
            },
            {
                name: 'Table Tennis',
                icon: <FaTableTennis />
            },
            {
                name: 'Basketball',
                icon: <GiBasketballBasket />
            },
            {
                name: 'Badminton',
                icon: <GiTennisRacket />
            },
            {
                name: 'Everything else...',
                icon: <TbSportBillard />
            },
        ]
    },
    {
        title: 'Games',
        skillsList: [
            {
                name: 'Valorant',
                icon: <GiAutogun />
            },
            {
                name: 'Counter Strike',
                icon: <GiMachineGunMagazine />
            },
            {
                name: 'Super Smash Bros',
                icon: <FaGamepad />
            },
            {
                name: 'Poker',
                icon: <GiPokerHand />
            },
            {
                name: 'Many others that I cannot list...',
                icon: <IoLogoGameControllerB />
            },
        ]
    },
    {
        title: 'Others',
        skillsList: [
            {
                name: 'Photography',
                icon: <MdPhotoCamera />
            },
            {
                name: 'Guitar',
                icon: <FaGuitar />
            },
            {
                name: 'Singing',
                icon: <BsFillMicFill />
            },
        ]
    }
]