import React, {useState} from 'react';
import styles from './styles.module.css';


export default function Search({onSearch, onClear}) {
    const [query, setQuery] = useState('');

    const handleClear = () => {
        setQuery('');
        onClear('');
    }
    return (
        <div id="search">
            <div className={styles.searchContainer}>
                <input className={styles.search} placeholder='pesquisar' type='text' id='query'
                value={query} onChange={(e) => setQuery (e.target.value)}>
                </input>
                <button onClick={() => onSearch(query)}>Pesquisar</button>
                <button onClick={handleClear}>Limpar</button>
            </div>
        </div>
    );
}
