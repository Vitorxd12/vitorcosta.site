import React from "react";
import MainCard from "../components/Main/MainCard";
import AboutMeCard from "../components/Main/AboutMeCard";
import HandleNavBar from "../components/Header/HandleNavBar";
import Logo from "../components/Header/Logo";
import Contact from "../components/Footer/Contact";


function Index() {
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