import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';
import AddButtom from './AddButton';
import Search from './Search';
import styles from "./styles.module.css";
import Table from './Table';
import {getItens} from "../../services/api";


export default function Home() {

    const itemId = ''
    const loadingData =async (query : '') => {
        const response = await getItens(itemId);
    }

    const handleSearch = (query) => {

    }
    const handleClear = (query) =>{

    }
    
    const handleDelete = (table) =>{
        console.log('deletado')

    }

    return (
        <div id="home">
            <Head>
                <title>Exame Prático CGE-RJ</title>
            </Head>

            <div className={styles.page}>
                <Header/>  
                <div className={styles.container}>
                   <Search onSearch={handleSearch} onClear={handleClear}/>
                   
                    <div className={styles.space}></div> {/*espaço vazio para manter a distâcia entre os itens*/}
                    
                    <div className={styles.buttom}>
                        <Link  href="/form" className={styles.linkButton}>
                            <AddButtom/>
                        </Link> 
                    </div>
                    <div className="Table">
                        <Table onDelete={handleDelete}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
