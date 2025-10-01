import React, {useEffect} from 'react';
import styles from './horarios-ifs.module.css';

function HorariosIFS() {
    useEffect(() => {
        document.title = "Horários | IFS | Sist. Inf.";
        const favicon = document.querySelector("link[rel='icon']");
        const href = `/ifs.png`;
        if (favicon) {
            favicon.href = href;
        }
    }, []);
    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Grade Horária – BSI</h2>

            <table className={styles.tabela}>
                <thead>
                <tr>
                    <th>Dia da Semana</th>
                    <th>Segunda</th>
                    <th>Terça</th>
                    <th>Quarta</th>
                    <th>Quinta</th>
                    <th>Sexta</th>
                </tr>
                </thead>
                <tbody>
                <tr data-turno="Vespertino">
                    <th>Vespertino</th>
                    <td data-dia="Seg">
                        <div className={styles.materia}>Algoritmos e Estrut. de Dados I</div>
                        <div className={styles.professor}>Prof. Diego Armando de Oliveira Meneses</div>
                        <div className={styles.local}>Lab Inf. 05</div>
                    </td>
                    <td data-dia="Ter">
                        <div className={styles.materia}>Engenharia de Software</div>
                        <div className={styles.professor}>Prof. Flaygner Matos Reboucas</div>
                        <div className={styles.local}>Lab Inf. 03</div>
                    </td>
                    <td data-dia="Qua">
                        <div className={styles.materia}>Algoritmos e Estrut. de Dados I</div>
                        <div className={styles.professor}>Prof. Diego Armando de Oliveira Meneses</div>
                        <div className={styles.local}>Lab Inf. 02</div>
                    </td>
                    <td data-dia="Qui">
                        <div className={styles.materia}>Backend em Python</div>
                    </td>
                    <td data-dia="Sex" className={styles.empty}>–</td>
                </tr>

                <tr data-turno="Noturno">
                    <th>Noturno</th>
                    <td data-dia="Seg">
                        <div className={styles.materia}>Redes de Computadores</div>
                        <div className={styles.professor}>Prof. Gustavo da Silva Quirino</div>
                        <div className={styles.local}>Lab Inf. 05</div>
                    </td>
                    <td data-dia="Ter">
                        <div className={styles.materia}>Sistemas Operacionais</div>
                        <div className={styles.professor}>Prof. Wilhelm de Araujo Rodrigues</div>
                        <div className={styles.local}>Lab Inf. 06</div>
                    </td>
                    <td data-dia="Qua">
                        <div className={styles.materia}>Análise Orientada a Objetos</div>
                        <div className={styles.professor}>Prof. Jean Louis Silva Santos</div>
                        <div className={styles.local}>Lab Inf. 02</div>
                    </td>
                    <td data-dia="Qui">
                        <div className={styles.materia}>Modelagem de Dados</div>
                        <div className={styles.professor}>Prof. Arquimedes Sidney Lima de Medeiros</div>
                        <div className={styles.local}>Lab Inf. 01</div>
                    </td>
                    <td data-dia="Sex" className={styles.empty}>–</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default HorariosIFS;
