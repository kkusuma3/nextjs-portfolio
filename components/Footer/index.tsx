import { FaArrowUp } from "react-icons/fa";
import { STRING_BACK_TO_TOP, STRING_COPYRIGHT } from "../../locale";
import styles from '../Home/Layout/layout.module.css';

export default function Footer () {
    return (
        <div className="grid py-5 place-items-center">
            <div className={styles.mainContainer}>
                <footer className="flex flex-row flex-wrap items-end justify-between lg:py-2 px-4 space-y-6 lg:space-y-0 text-blue-sapphire">
                    <div className="w-full lg:w-3/4">
                        <span className="font-extralight text-lg">
                            {STRING_COPYRIGHT}
                        </span>
                    </div>
                    <div className="w-full lg:w-1/4">
                        <a
                            href="#nav"
                            className="flex flex-row items-center space-x-2 font-extralight text-lg">
                            <FaArrowUp />
                            <span>{STRING_BACK_TO_TOP}</span>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    )
}