import React from 'react';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import styles from '../styles/pages.module.css';

function Objetos({ folclore }) {
    return (
        <div className={styles.home}>
            <Navbar/>

            <h1 className={styles.titulo}> Folclore </h1>

            {folclore.map((folclore) => (
                <div key={folclore.id}>
                    <h2 className={styles.objeto}> {folclore.nome} </h2>
                </div>
            ))}

            <a href='/' className={styles.voltar}> Voltar </a>

            <Footer/>
        </div>
    )
}

export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=folclore');
    const repo = await res.json();
    const folclore = await repo;
    return {
        props: { folclore }
    }
})

export default Objetos;