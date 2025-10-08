import React from "react";
import CubeScene from "../Shared/CubeScene";
import SocialMediaBox from "./SocialMediaBox";
import './footer.css';

function Contact() {
    return (
        <div id={"footer"}>
            <h1 id="contact-title">Contato</h1>
            <div id="contact-message">
                <p>Pronto para ajudar em seus projetos.</p>
            </div>
            <div id="contact-text-box">
                <p><u>Vitorxd12.12@gmail.com</u></p>
                <CubeScene cor={1}/>
                <p><u>+55 (79) 99888-6868</u></p>
            </div>
            <SocialMediaBox />
            <div id="end">
                <p>• Vitor Oliveira Costa Dias • </p>
                <p>• 2025 •</p>
            </div>
        </div>
    );
}

export default Contact;
