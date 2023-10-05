import Head from "next/head";
import Nav from "../Navbar";
import Footer from "../Footer";

const name = "[Your Name]";
export const siteTitle = "Dev-k.io - Kevin's Personal Website";

export default function Layout({
    home,
    children,
}: {
    home: boolean;
    children: React.ReactNode;
}) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Catamaran&family=Plus+Jakarta+Sans&display=swap" rel="stylesheet" />
                <meta
                    name="description"
                    content="Kevin Kusuma's personal website"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <div className="font-jakarta-sans">
                { !home && <Nav /> }
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
}
