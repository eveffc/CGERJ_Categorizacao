import React, {useState} from  'react';

import styles from './styles.module.css';


export default function Table({onDelete}){


    return (
            <div className={styles.table}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <div className={styles.info}>
                            <div>
                                info
                            </div>
                        </div>
                        <button onClick={() => onDelete(null)}>Excluir</button>
                    </li>
                </ul>
            </div>

    );
}
