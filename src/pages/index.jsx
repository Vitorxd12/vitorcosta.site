import React, {useEffect} from "react";
import MainCard from "../components/Main/MainCard";
import AboutMeCard from "../components/Main/AboutMeCard";
import HandleNavBar from "../components/Header/HandleNavBar";
import Logo from "../components/Shared/Logo";
import Contact from "../components/Footer/Contact";
import PortifolioCardManager from "../components/Portifolio/PortifolioCardManager";
import {useLocation} from "react-router-dom";

function scrollToView(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior: 'smooth'});
}


function Index() {
    const location = useLocation();

    useEffect(() => {
        document.title = "Vitor Costa | Desenvolvedor";

        const favicon = document.querySelector("link[rel='icon']");
        if (favicon) {
            favicon.href = "/favicon.png";
        }

        if (location.state?.scrollToId) {
            scrollToView(location.state.scrollToId);
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
                <PortifolioCardManager/>
            </main>
            <footer>
                <Contact/>
            </footer>
        </div>
    );
}

export default Index;