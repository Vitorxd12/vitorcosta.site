import React, {useEffect} from "react";
import MainCard from "../components/Main/MainCard";
import AboutMeCard from "../components/Main/AboutMeCard";
import HandleNavBar from "../components/Header/HandleNavBar";
import Logo from "../components/Header/Logo";
import Contact from "../components/Footer/Contact";



function Index() {
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
            <main>
                <MainCard/>
                <AboutMeCard/>
            </main>
            <footer>
                <Contact/>
            </footer>
        </div>
    );
}

export default Index;