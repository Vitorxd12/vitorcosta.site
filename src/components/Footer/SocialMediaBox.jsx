import insta from "../../assets/instagram.png";
import github from "../../assets/github.png";
import whatsapp from "../../assets/whatsapp.png";
import React from "react";

function SocialMediaBox() {
    return(
        <div id="social-midia-box">
            <a href="https://www.instagram.com/vitorxd12_" target="_blank" rel="noopener noreferrer">
                <img className="midialogo" src={insta} alt="Instagram"/>
            </a>
            <a href="https://github.com/Vitorxd12" target="_blank" rel="noopener noreferrer">
                <img className="midialogo" src={github} alt="Github"/>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5579998886868&text&type=phone_number&app_absent=0"
               target="_blank" rel="noopener noreferrer">
                <img className="midialogo" src={whatsapp} alt="Whatsapp"/>
            </a>
        </div>
    )
}
export default SocialMediaBox;