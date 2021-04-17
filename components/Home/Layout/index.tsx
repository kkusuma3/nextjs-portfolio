import styles from './layout.module.css';

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
    <div className={styles.parentContainer}>
        <div className={styles.mainContainer}>
            {children}
        </div>
    </div>
)};