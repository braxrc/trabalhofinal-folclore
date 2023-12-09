import Head from 'next/head';
import styles from '../styles/pages.module.css';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title> trabaio finall</title>
      </Head>

      <Navbar />

      <div className={styles.links}>
        <p className={styles.membros}> Aqui tem alguns membros do folclore: <a href='/objetos' className={styles.objetos}> Membros </a> </p> 
      
        <p className={styles.desc}> Aqui pode ser encontrado descrições mais aprofundadas sobre cada membro do folclore brasileiro: <a href='/descricao ' className={styles.descricao}> Descrição </a> </p>
       
      </div>

      <Footer />
    </div>
  )
}