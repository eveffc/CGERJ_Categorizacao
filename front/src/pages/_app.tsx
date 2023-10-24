import type { AppProps } from 'next/app';
import '../components/UI/AddButton/styles.module.css';
import '../components/UI/Headerpage/styles.module.css';
import '../components/screens/home/styles.module.css';
import '../components/screens/login/styles.module.css';
import '../public/img/icons/Add.png';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>CGE-RJ</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}
