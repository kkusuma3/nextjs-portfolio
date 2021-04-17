import Layout from "../components/Layout/index";
import HomePage from "../components/Home";

export default function IndexPage() {
    return (
        <>
            <Layout home>
                <HomePage />
            </Layout>
        </>
    );
}
