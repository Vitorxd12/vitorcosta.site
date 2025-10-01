import Logo from "../components/Header/Logo";
import HandleNavBar from "../components/Header/HandleNavBar";
import React, {useEffect} from "react";
import CalculadoraMain from "../components/calculadora/CalculadoraMain";

function Calculadora() {
    useEffect(() => {
        document.title = "Vitor Costa | Desenvolvedor";

        const favicon = document.querySelector("link[rel='icon']");
        if (favicon) {
            favicon.href = "/favicon.png";
        }

    }, []);
    return (
        <div>

            <header id="header">
                <Logo/>
                <HandleNavBar/>
            </header>
            <CalculadoraMain/>
        </div>
    )
}
export default Calculadora;