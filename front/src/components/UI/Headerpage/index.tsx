import React from 'react';
import styles from './styles.module.css';
import Logo from '../../../public/img/icons/LogoB.png'

export default function Header (){
    return(
        <div className={styles.container}>                
            <img src={Logo.src} className={styles.img} alt="GDC"/>
            {/*Logout*/}
            <div className={styles.leave}>
                <div className={styles.leave}/>
            </div>
        </div>
    )
}