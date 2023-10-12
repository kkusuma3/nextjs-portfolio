import Link from 'next/link';
import Layout from "../components/Layout/index";

export default function ErrorPage() {
    return (
        <>
            <Layout pageTitle='dev-k.io | 404 Page Not Found'>
                <div className="flex flex-col items-center justify-center h-96 text-blue-sapphire">
                    <h1 className="text-4xl  font-bold">
                        404 Page Not Found!
                    </h1>
                    <h2 className="text-2xl">
                        Are you lost? Please return <Link href="/" className="underline">home</Link>!
                    </h2>
                </div>
            </Layout>
        </>
    );
}
