import React, {useState} from  'react';
import Head from 'next/head';
import styles from './styles.module.css';
import Logo from '../../public/img/icons/LogoV.png';

const  Login = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const handleLogin = () => {
            console.log('login');
        }

    return (
        <>
            
            <Head>
                <title>Exame Prático CGE-RJ</title>
            </Head>

            <div className={styles.container}>
            <img src={Logo.src} className={styles.img} alt="GDC"/>
                <form className={styles.form}>
                    <input className={styles.input} placeholder='E-mail' name="email" type='email'  id='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input className={styles.input} placeholder='Senha' name="password" type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                    <button className={styles.submitButton} type='submit'  onClick={handleLogin}>Entrar</button> 
                </form>
            </div>
        </>
    );
}
export default Login;