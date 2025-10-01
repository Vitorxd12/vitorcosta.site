import React, {useState} from "react";
import styles from './calculadora.module.css';
import {bPress} from "./calculadora.js";

function CalculadoraMain() {
    const [display, setDisplay] = useState("0");

    return (
        <div className={styles.scene}>
            <div className={styles.calculadora}>
                <div className={styles.display}>{display}</div>
                <div className={styles.botoes}>
                    {/* Classes corrigidas aqui */}
                    <div className={`${styles.botao} ${styles.operador}`} onClick={() => bPress('(', setDisplay)}>(</div>
                    <div className={`${styles.botao} ${styles.operador}`} onClick={() => bPress(')', setDisplay)}>)</div>
                    <div className={`${styles.botao} ${styles.operador}`} onClick={() => bPress('-', setDisplay)}>−</div>
                    <div className={`${styles.botao} ${styles.operador}`} onClick={() => bPress('/', setDisplay)}>÷</div>
                    <div className={`${styles.botao} ${styles.operador}`} onClick={() => bPress('*', setDisplay)}>×</div>
                    <div className={`${styles.botao} ${styles.operador}`} onClick={() => bPress('+', setDisplay)}>+</div>

                    <div className={`${styles.botao} ${styles.funcao}`} onClick={() => bPress('**', setDisplay)}>xʸ</div>
                    <div className={`${styles.botao} ${styles.funcao}`} onClick={() => bPress('raiz(', setDisplay)}>√</div>
                    <div className={`${styles.botao} ${styles.numero}`} onClick={() => bPress('7', setDisplay)}>7</div>
                    <div className={`${styles.botao} ${styles.numero}`} onClick={() => bPress('8', setDisplay)}>8</div>
                    <div className={`${styles.botao} ${styles.numero}`} onClick={() => bPress('9', setDisplay)}>9</div>
                    <div className={`${styles.botao} ${styles.funcao}`} onClick={() => bPress('c', setDisplay)}>C</div>

                    <div className={`${styles.botao} ${styles.funcao}`} onClick={() => bPress('log(', setDisplay)}>log</div>
                    <div className={`${styles.botao} ${styles.funcao}`} onClick={() => bPress('cos(', setDisplay)}>cos</div>
                    <div className={`${styles.botao} ${styles.numero}`} onClick={() => bPress('4', setDisplay)}>4</div>
                    <div className={`${styles.botao} ${styles.numero}`} onClick={() => bPress('5', setDisplay)}>5</div>
                    <div className={`${styles.botao} ${styles.numero}`} onClick={() => bPress('6', setDisplay)}>6</div>
                    <div className={`${styles.botao} ${styles.funcao}`} onClick={() => bPress('<', setDisplay)}>←</div>

                    <div className={`${styles.botao} ${styles.funcao}`} onClick={() => bPress('sin(', setDisplay)}>sin</div>
                    <div className={`${styles.botao} ${styles.funcao}`} onClick={() => bPress('tg(', setDisplay)}>tg</div>
                    <div className={`${styles.botao} ${styles.numero}`} onClick={() => bPress('1', setDisplay)}>1</div>
                    <div className={`${styles.botao} ${styles.numero}`} onClick={() => bPress('2', setDisplay)}>2</div>
                    <div className={`${styles.botao} ${styles.numero}`} onClick={() => bPress('3', setDisplay)}>3</div>
                    <div className={`${styles.botao} ${styles.igual}`} onClick={() => bPress('=', setDisplay)}>=</div>

                    <div className={`${styles.botao} ${styles.funcao}`} onClick={() => bPress('Math.PI', setDisplay)}>π</div>
                    <div className={`${styles.botao} ${styles.funcao}`} onClick={() => bPress('Math.E', setDisplay)}>e</div>
                    {/* Classes corrigidas aqui (botao, numero, zero) */}
                    <div className={`${styles.botao} ${styles.numero} ${styles.zero}`} onClick={() => bPress('0', setDisplay)}>0</div>
                    <div className={`${styles.botao} ${styles.numero}`} onClick={() => bPress('.', setDisplay)}>.</div>
                </div>
            </div>
        </div>
    );
}

export default CalculadoraMain;