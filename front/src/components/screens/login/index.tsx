import React, {useState} from  'react';
import Head from 'next/head';
import styles from './styles';

export default function Login() {

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    };

    return (
        <>
            <Head>
                <title>Exame Prático CGE-RJ</title>
            </Head>
          
            <div style={styles.container}>
                <form style={styles.form} onSubmit={handleSubmit}>
                    <div style={styles.inputForm}>
                        <input style={styles.input} placeholder='E-mail' type='email'  id='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <input style={styles.input} placeholder='Senha' type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div style={styles.actions}>
                        <a href='./home/index' style={styles.submitButton} type='submit'>Entrar</a> 
                        {/* <button style={styles.submitButton} type='submit'>Entrar</button>  */}
                    </div>
                    
                </form>
            </div>
        </>
    );
}
