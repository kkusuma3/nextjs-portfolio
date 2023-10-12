import Layout from "../components/Layout/index";
import HomePage from "../components/Home";
import LoadingPage from "../components/Loading";
import { useState } from "react";

export default function IndexPage() {
    const [ isLoading, setIsLoading ] = useState(true);

    setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    return (
        <>
            <Layout home isLoading={isLoading} pageTitle={isLoading ? "Welcome to dev-k! Loading..." : null}>
                { 
                    isLoading ? <LoadingPage /> : <HomePage />
                }
            </Layout>
        </>
    );
}
