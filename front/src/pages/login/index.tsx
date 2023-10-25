import React, {useState} from  'react';
import Head from 'next/head';
import styles from './styles.module.css';
import Logo from '../../public/img/icons/LogoV.png';

const Login: React.FC = () => {

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    return (
        <>
            
            <Head>
                <title>Exame Prático CGE-RJ</title>
            </Head>

            <div className={styles.container}>
            <img src={Logo.src} className={styles.img} alt="GDC"/>
                <form className={styles.form}>
                    <input className={styles.input} placeholder='E-mail' type='email'  id='email' ></input>
                    <input className={styles.input} placeholder='Senha' type='password' id='password'></input>
                    <button className={styles.submitButton} type='submit'>Entrar</button> 
                </form>
            </div>
        </>
    );
    }
export default Login;