import React from 'react';
import Head from 'next/head';
import Header from '../components/Headerpage';
import Form from './InputDate'
import styles from './styles.module.css';


export default function Home() {
    const handleAdd = () =>{

    }

    return (
        <>
            <Head>
                <title>Exame Prático CGE-RJ</title>
            </Head>
            <div className={styles.page}>
                <Header />
                <div className={styles.container}>
                    <h1 className={styles.h1}>Novo cadastro</h1>
                </div>

                <div className={styles.form}>
                    <Form onAdd={handleAdd}/>
                </div>
            </div>
        </>
    );
}
