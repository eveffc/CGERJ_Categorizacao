import Head from 'next/head';
// import Login from '../components/screens/login/index'
import Login from '../components/screens/home/index'
export default function Home() {
    return (
        <>
            <Head>
                <title>Exame Prático CGE-RJ</title>
            </Head>
            <Login/>
        </>
    );
}
