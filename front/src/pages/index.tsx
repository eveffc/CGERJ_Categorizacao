import Head from 'next/head';
import Login from './login/index';

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
