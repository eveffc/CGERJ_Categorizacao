import React, {useState} from  'react';
import Head from 'next/head';
import Link from 'next/link';
import AddButtom from '@/components/UI/AddButton/Index';
import Header from '@/components/UI/Headerpage/index';
import styles from './styles.module.css';


export default function Home() {

    return (
        <>
            <Head>
                <title>Exame Prático CGE-RJ</title>
            </Head>
            <div className={styles.page}>
                <Header />
                <div className={styles.container}>
                    <input className={styles.search} placeholder='pesquisar' type='text'></input>
                    <div className={styles.space}></div>
                    <div className={styles.buttom}>
                       <Link  href="/form">
                            <AddButtom/>
                        </Link> 
                    </div>
                </div>

                <div className={styles.table}>
              
                </div>
            </div>
        </>
    );
}
