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
                    <h1 className={styles.h1}>Novo cadastro</h1>
                    <form className={styles.form}>
                        <input className={styles.input} placeholder='Item'  id='item' ></input>
                        <select className={styles.select} id="cargo" name="cargo" value="<?php echo isset($row['cargo'])? $row['cargo'] : ''; ?>" required ></select>
                        <textarea className={styles.textarea} placeholder='Descrição' id='descricao'></textarea>
                        <button className={styles.submitButton} type='submit'>Salvar</button> 
                        <div className={styles.buttom}>
                        <Link  href="/form">
                                cancelar
                        </Link> 
                        </div>
                    </form>
                </div>

                <div className={styles.table}>
              
                </div>
            </div>
        </>
    );
}
