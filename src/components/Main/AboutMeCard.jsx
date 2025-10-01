import curriculo from "../../assets/Currículo- Vitor Oliveira Costa Dias.pdf";

function renderVetorTexto(arr) {
    return arr.map((item, index) => <div><p key={index}>{item}</p> <br/></div>);
}

function AboutMeCard() {
    const vetorTexto = [
        "Olá! Meu nome é Vitor Costa, sou um entusiasta da tecnologia e estudante de Sistemas de Informação no Instituto Federal de Sergipe. Desde cedo, desenvolvi um grande interesse por programação, automação e inovação tecnológica.",
        "Atualmente, aprimoro minhas habilidades em desenvolvimento de software, sistemas, eletrônica e computação aplicada, sempre buscando aprender e me desafiar com novos projetos. Tenho experiência com Arduino, SAP, desenvolvimento web e pesquisa científica, além de já ter conquistado premiações em feiras de ciência e inovação. " ,
        "Meu objetivo é utilizar a tecnologia para resolver problemas do mundo real e contribuir para projetos que impactem positivamente a sociedade. "
    ];

    return (
        <div id="about-me-card">
            <h1 className="main-title">
                Sobre <span id="accent"><u>Mim</u></span>
            </h1>
            <div id="about-me-text">
                {renderVetorTexto(vetorTexto)}
            </div>
            <a href={curriculo} download>
                <button id="about-me-button">Download Currículo</button>
            </a>
        </div>
    );
}

export default AboutMeCard;
