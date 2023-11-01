import { useEffect, useState } from "react";
import { useSpring, animated } from '@react-spring/web';
import styles from './loading.module.css';

const LOADING_BACKGROUND_SRC="/images/Loading"

export default function Loading () {
    const [ imgProps ] = useSpring(
        () => ({
          from: { opacity: 0 , scale: 0.9, y: '100%'},
          to: { opacity: 1 , scale: 1.05 , y: '-10'},
        }),
        []
    );
    const [ bgProps ] = useSpring(
        () => ({
          from: { opacity: 0 },
          to: { opacity: 1 },
        }),
        []
    );
    
    const [ loadingDots, setLoadingDots ] = useState('.');

    const handleLoadingDots = () => {
        if (loadingDots.length === 4) {
            setLoadingDots('.');
        } else {
            setLoadingDots(loadingDots + '.');
        }
    }

    useEffect(() => {
        const dotInterval = setInterval(handleLoadingDots, 600);
        return () => {
            clearInterval(dotInterval);
        }
    })

    return (
        <div
            className="flex flex-col h-screen items-center justify-center space-y-2"
        >
            <animated.div style={bgProps}>
                <picture>
                    <source 
                        srcSet={`${LOADING_BACKGROUND_SRC}/Loading_background_sm.webp`}
                        media="(max-width: 400px)"
                        className={styles.img__background}
                    />
                    <img
                        sizes="(max-width: 1400px) 100vw, 1400px"
                        srcSet={`
                            ${LOADING_BACKGROUND_SRC}/Loading_background_gey6b6_c_scale,w_200.webp 200w,
                            ${LOADING_BACKGROUND_SRC}/Loading_background_gey6b6_c_scale,w_776.webp 776w,
                            ${LOADING_BACKGROUND_SRC}/Loading_background_gey6b6_c_scale,w_1197.webp 1197w,
                            ${LOADING_BACKGROUND_SRC}/Loading_background_gey6b6_c_scale,w_1398.webp 1398w,
                            ${LOADING_BACKGROUND_SRC}/Loading_background_gey6b6_c_scale,w_1400.webp 1400w
                        `}
                        src="Loading_background_gey6b6_c_scale,w_1400.webp"
                        alt="Background image of an old house"
                        className={styles.img__background}
                    />
                </picture>
            </animated.div>
            <animated.div style={imgProps}>
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
                        className={styles.img__loading}
                    />
                </picture>
            </animated.div>
            <h1 className="text-5xl font-bold text-light-blue-sapphire">Loading{loadingDots}</h1>
        </div>
    )
}