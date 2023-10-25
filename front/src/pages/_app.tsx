import type { AppProps } from 'next/app';
import './components/AddButton/styles.module.css';
import './components/Headerpage/styles.module.css';
import './home/styles.module.css';
import './login/styles.module.css';
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
