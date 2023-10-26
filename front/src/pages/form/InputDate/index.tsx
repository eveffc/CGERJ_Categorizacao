import React, {useState} from 'react';
import Link from 'next/link';
import styles from './styles.module.css';


export default function Form({onAdd}) {
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [addItem, setAddItem] = useState('');


    return (
        <div className={styles.form}>
            <input className={styles.input} placeholder='Item'  id='nome' value={nome}
            onChange={(e) => setNome(e.target.value)}></input>

            <input className={styles.select} placeholder='Tipo' id="tipo" name="tipo" value={tipo}
            onChange={(e) => setTipo(e.target.value)}></input>

            <textarea className={styles.textarea} placeholder='Descrição' id='descricao'  value={descricao}
            onChange={(e) => setDescricao(e.target.value)}></textarea>

            <button className={styles.submitButton} type='submit' onClick={() => onAdd(addItem)}>Salvar</button>
            <Link  href="/home" className={styles.linkButton}>
                cancelar
            </Link> 
        </div>
    );
}