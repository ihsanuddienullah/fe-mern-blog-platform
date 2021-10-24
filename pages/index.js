import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
    return (
        <Layout>
            <h1>Next JS Started</h1>
            <Link href="/signup">Signup</Link>
        </Layout>
    );
};

export default Index;
