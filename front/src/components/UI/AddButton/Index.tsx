import React from 'react';
import styles from "./styles.module.css";
import Add from "../../../public/img/icons/Add.png";

export default function AddButtom (){
    return(
        <div className={styles.container}>
            <div className={styles.bottom}>
                <div className={styles.add}>
                    <img src={Add.src} className={styles.img} alt="Add" width={20} height={20}/>
                </div>
                <div className={styles.text}>Novo item</div>
                
           </div>
        </div>
    );
}