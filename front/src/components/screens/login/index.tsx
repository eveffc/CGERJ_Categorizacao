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
          
            <div id='container'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='input'>
                        <input placeholder='E-mail' type='email'  id='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <input placeholder='Senha' type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <button className='actions' type='submit'>Entrar</button> 
                </form>
            </div>
        </>
    );
}
