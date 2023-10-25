import Header from '../components/Headerpage';
import Head from 'next/head';
import Link from 'next/link';
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
                        <input className={styles.input} placeholder='Item'  id='nome' ></input>
                        <select className={styles.select} id="tipo" name="tipo" value="<?php echo isset($row['tipo'])? $row['tipo'] : ''; ?>" required ></select>
                        <textarea className={styles.textarea} placeholder='Descrição' id='descricao'></textarea>
                        
                        <button className={styles.submitButton} type='submit'>Salvar</button>
                        <Link  href="/home" className={styles.linkButton}>
                            cancelar
                        </Link> 
                    </form>
                </div>

                <div className={styles.table}>
              
                </div>
            </div>
        </>
    );
}
