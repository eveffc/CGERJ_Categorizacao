import React, {useState} from  'react';
import Head from 'next/head';
import Link from 'next/link';
import AddButtom from '../components/AddButton';
import Header from '../components/Headerpage';
import styles from './styles.module.css';


export default function Home() {

    return (
        <>
            <Head>
                <title>Exame Prático CGE-RJ</title>
            </Head>
            <div className={styles.page}>
                <Header/>
                <button className={styles.logoutButton} type='submit'>Sair</button> 
                <div className={styles.container}>
                    <input className={styles.search} placeholder='pesquisar' type='text'></input>
                    
                    <div className={styles.space}></div> {/*espaço vazio para manter a distâcia entre os itens*/}
                    
                    <div className={styles.buttom}>
                       <Link  href="/form" className={styles.linkButton}>
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
