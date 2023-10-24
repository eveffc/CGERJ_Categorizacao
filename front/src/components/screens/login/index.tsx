import React, {useState} from  'react';
import Head from 'next/head';
import styles from './styles.module.css';


const Login: React.FC = () => {

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    return (
        <>
            
            <Head>
                <title>Exame Prático CGE-RJ</title>
            </Head>
          
            <div >
                <div className={styles.container}>
                    <form className={styles.form} >
                        <div className={styles.inputBar}>
                            <input className={styles.input} placeholder='E-mail' type='email'  id='email' value={email} ></input>
                            <input className={styles.input} placeholder='Senha' type='password' id='password' value={password}></input>
                            <button className={styles.submitButton} type='submit'>Entrar</button> 
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;