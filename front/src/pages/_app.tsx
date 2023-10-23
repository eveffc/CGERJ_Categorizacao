import type { AppProps } from 'next/app';
import Head from 'next/head';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>CGE-RJ</title>
            </Head>
            <Router>
                <Component {...pageProps} />
            </Router>
        </>
    );
}
