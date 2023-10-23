import React, {useState} from  'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import Head from 'next/head';
import Home from '../home/index';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        if (email && password ) {
            setLoggedIn(true);
          } else {
            alert('Credenciais inválidas. Tente novamente.');
          }
    };

    return (
        <>
            <Head>
                <title>Exame Prático CGE-RJ</title>
            </Head>
          
            <div>
                <input placeholder='E-mail' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                <input placeholder='Senha' type='password' value={password}  onChange={(e) => setPassword(e.target.value)} required></input>
                <button type='button' onClick={handleLogin}>Entrar</button> 

                {loggedIn &&(
                    <Link to="../home/index"></Link>
                )}
            </div>
        </>
    );
}
