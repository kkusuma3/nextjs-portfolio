import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-scroll';
import { STRING_BACK_TO_TOP, STRING_COPYRIGHT } from "../../locale";
import styles from '../Home/Layout/layout.module.css';

export default function Footer () {
    return (
        <div className="grid py-5 place-items-center">
            <div className={styles.mainContainer}>
                <footer className="flex flex-row flex-wrap items-end justify-between lg:py-2 px-4 space-y-6 lg:space-y-0 text-blue-sapphire dark:text-white">
                    <div className="w-full lg:w-3/4">
                        <span className="font-extralight text-md md:text-lg">
                            {STRING_COPYRIGHT}
                        </span>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <Link
                            activeClass="active"
                            to={"home"}
                            spy
                            smooth
                            offset={-500}
                            duration={1200}
                            className="flex flex-row items-center space-x-2 font-extralight text-lg cursor-pointer hover:underline"
                        >
                            <FaArrowUp />
                            <span>{STRING_BACK_TO_TOP}</span>
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}