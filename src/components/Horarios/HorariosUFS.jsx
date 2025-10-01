import React, {useEffect} from 'react';
import styles from './horarios-ufs.module.css';

function HorariosUFS() {
    useEffect(() => {
        document.title = "Horários | UFS | Eng. Materiais";
        const favicon = document.querySelector("link[rel='icon']");
        const href = `/ufs.png`;
        if (favicon) {
            favicon.href = href;
        }
    }, []);
    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Horário de aulas - Srta. Gregorio - Engenheira de materiais</h2>

            {/* ===== Tabela Desktop ===== */}
            <table className={styles.desktopTable}>
                <thead>
                <tr>
                    <th>Horário</th>
                    <th>Segunda</th>
                    <th>Terça</th>
                    <th>Quarta</th>
                    <th>Quinta</th>
                    <th>Sexta</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>07:30 – 09:00</td>
                    <td className={styles.empty}>–</td>
                    <td>
                        <span className={styles.materia}>Fenômenos de Transporte I</span>
                        <span className={styles.codigo}>(EQUI0099)</span>
                    </td>
                    <td className={styles.empty}>–</td>
                    <td>
                        <span className={styles.materia}>Fenômenos de Transporte I</span>
                        <span className={styles.codigo}>(EQUI0099)</span>
                    </td>
                    <td className={styles.empty}>–</td>
                </tr>
                <tr>
                    <td>09:15 – 10:45</td>
                    <td className={styles.empty}>–</td>
                    <td>
                        <span className={styles.materia}>Tópicos Especiais em Engenharia de Materiais</span>
                        <span className={styles.codigo}>(EMAT0264)</span>
                    </td>
                    <td className={styles.empty}>–</td>
                    <td>
                        <span className={styles.materia}>Tópicos Especiais em Engenharia de Materiais</span>
                        <span className={styles.codigo}>(EMAT0264)</span>
                    </td>
                    <td className={styles.empty}>–</td>
                </tr>
                <tr>
                    <td>13:30 – 15:00</td>
                    <td>
                        <span className={styles.materia}>Cinética de Materiais</span>
                        <span className={styles.codigo}>(EMAT0227)</span>
                    </td>
                    <td>
                        <span className={styles.materia}>Gestão da Qualidade</span>
                        <span className={styles.codigo}>(EPROD0072)</span>
                    </td>
                    <td>
                        <span className={styles.materia}>Cinética de Materiais</span>
                        <span className={styles.codigo}>(EMAT0227)</span>
                    </td>
                    <td>
                        <span className={styles.materia}>Gestão da Qualidade</span>
                        <span className={styles.codigo}>(EPROD0072)</span>
                    </td>
                    <td>
                        <span className={styles.materia}>Cinética de Materiais</span>
                        <span className={styles.codigo}>(EMAT0227)</span>
                    </td>
                </tr>
                <tr>
                    <td>15:15 – 16:45</td>
                    <td>
                        <span className={styles.materia}>Corrosão e Degradação</span>
                        <span className={styles.codigo}>(EMAT0247)</span>
                    </td>
                    <td>
                        <span className={styles.materia}>Laboratório de Física 1</span>
                        <span className={styles.codigo}>(FISI0264)</span>
                    </td>
                    <td>
                        <span className={styles.materia}>Corrosão e Degradação</span>
                        <span className={styles.codigo}>(EMAT0247)</span>
                    </td>
                    <td className={styles.empty}>–</td>
                    <td className={styles.empty}>–</td>
                </tr>
                <tr>
                    <td>17:00 – 18:30</td>
                    <td className={styles.empty}>–</td>
                    <td>
                        <span className={styles.materia}>Cálculo Numérico I</span>
                        <span className={styles.codigo}>(MAT0096)</span>
                    </td>
                    <td className={styles.empty}>–</td>
                    <td>
                        <span className={styles.materia}>Cálculo Numérico I</span>
                        <span className={styles.codigo}>(MAT0096)</span>
                    </td>
                    <td className={styles.empty}>–</td>
                </tr>
                </tbody>
            </table>

            {/* ===== Cards Mobile ===== */}
            <div className={styles.mobileCards}>
                {/* Segunda */}
                <div className={styles.dayCard}>
                    <div className={styles.dayHeader}>Segunda-feira</div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>13:30 – 15:00</div>
                        <span className={styles.materia}>Cinética de Materiais</span>
                        <span className={styles.codigo}>(EMAT0227)</span>
                    </div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>15:15 – 16:45</div>
                        <span className={styles.materia}>Corrosão e Degradação</span>
                        <span className={styles.codigo}>(EMAT0247)</span>
                    </div>
                </div>

                {/* Terça */}
                <div className={styles.dayCard}>
                    <div className={styles.dayHeader}>Terça-feira</div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>07:30 – 09:00</div>
                        <span className={styles.materia}>Fenômenos de Transporte I</span>
                        <span className={styles.codigo}>(EQUI0099)</span>
                    </div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>09:15 – 10:45</div>
                        <span className={styles.materia}>Tópicos Especiais em Engenharia de Materiais</span>
                        <span className={styles.codigo}>(EMAT0264)</span>
                    </div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>13:30 – 15:00</div>
                        <span className={styles.materia}>Gestão da Qualidade</span>
                        <span className={styles.codigo}>(EPROD0072)</span>
                    </div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>15:15 – 16:45</div>
                        <span className={styles.materia}>Laboratório de Física 1</span>
                        <span className={styles.codigo}>(FISI0264)</span>
                    </div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>17:00 – 18:30</div>
                        <span className={styles.materia}>Cálculo Numérico I</span>
                        <span className={styles.codigo}>(MAT0096)</span>
                    </div>
                </div>

                {/* Quarta */}
                <div className={styles.dayCard}>
                    <div className={styles.dayHeader}>Quarta-feira</div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>13:30 – 15:00</div>
                        <span className={styles.materia}>Cinética de Materiais</span>
                        <span className={styles.codigo}>(EMAT0227)</span>
                    </div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>15:15 – 16:45</div>
                        <span className={styles.materia}>Corrosão e Degradação</span>
                        <span className={styles.codigo}>(EMAT0247)</span>
                    </div>
                </div>

                {/* Quinta */}
                <div className={styles.dayCard}>
                    <div className={styles.dayHeader}>Quinta-feira</div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>07:30 – 09:00</div>
                        <span className={styles.materia}>Fenômenos de Transporte I</span>
                        <span className={styles.codigo}>(EQUI0099)</span>
                    </div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>09:15 – 10:45</div>
                        <span className={styles.materia}>Tópicos Especiais em Engenharia de Materiais</span>
                        <span className={styles.codigo}>(EMAT0264)</span>
                    </div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>13:30 – 15:00</div>
                        <span className={styles.materia}>Gestão da Qualidade</span>
                        <span className={styles.codigo}>(EPROD0072)</span>
                    </div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>17:00 – 18:30</div>
                        <span className={styles.materia}>Cálculo Numérico I</span>
                        <span className={styles.codigo}>(MAT0096)</span>
                    </div>
                </div>

                {/* Sexta */}
                <div className={styles.dayCard}>
                    <div className={styles.dayHeader}>Sexta-feira</div>
                    <div className={styles.scheduleEntry}>
                        <div className={styles.timeSlot}>13:30 – 15:00</div>
                        <span className={styles.materia}>Cinética de Materiais</span>
                        <span className={styles.codigo}>(EMAT0227)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HorariosUFS;
