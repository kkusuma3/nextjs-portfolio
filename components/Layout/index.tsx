import Head from "next/head";
import Nav from "../Navbar";
import Footer from "../Footer";

export const siteTitle = "Dev-k.io | Kevin Kusuma's Personal Website";

export default function Layout({
    home,
    isLoading,
    pageTitle,
    children,
}: {
    home?: boolean;
    isLoading?: boolean;
    pageTitle?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon_io/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Catamaran&family=Plus+Jakarta+Sans&display=swap" rel="stylesheet" />
                <meta
                    name="description"
                    content="Dev-k.io - This is Kevin Kusuma's personal website"
                />
                <meta
                    property="og:description"
                    content="Dev-k.io - This is Kevin Kusuma's personal website"
                />
                <meta
                    property="og:url"
                    content="https://dev-k.io"
                />
                <meta
                    property="og:image"
                    content={`https://devk-portfolio.s3.amazonaws.com/images/home_logo.png`}
                />
                <meta property="og:title" content={siteTitle} key="title"/>
            </Head>
            <div className="font-jakarta-sans">
                { !home && <Nav /> }
                <main>{children}</main>
                { isLoading ? null : <Footer /> }
            </div>
        </div>
    );
}
