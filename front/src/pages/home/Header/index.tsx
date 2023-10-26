import Logo from '../../../public/img/icons/LogoB.png';
import styles from './styles.module.css';

export default function Header (){
    const handleLogout = () => {
        console.log('');
    }
    return(
        <div className={styles.container}>                
            <img src={Logo.src} className={styles.img} alt="GDC"/>
            <div className={styles.space}></div>
            <button className={styles.logoutButton} type='submit' onClick={handleLogout}>Sair</button> {/*implementar o logout*/}
        </div>
    )
}