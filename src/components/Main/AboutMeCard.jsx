import curriculo from "../../assets/Currículo- Vitor Oliveira Costa Dias.pdf";

function renderVetorTexto(arr) {
    return arr.map((item, index) => <div><p key={index}>{item}</p> <br/></div>);
}

function AboutMeCard() {
    const vetorTexto = [
        "Olá! Meu nome é Vitor Oliveira Costa Dias, sou um entusiasta da tecnologia e estudante de Bacharelado em Sistemas de Informação no Instituto Federal de Sergipe. Desde cedo, desenvolvi um grande interesse por programação, automação e inovação tecnológica.",
        "Atualmente, aprimoro minhas habilidades em desenvolvimento de software com tecnologias como Java/Spring, Python/Django, React, redes de computadores e em eletrônica com Arduino e Raspberry Pi. Minha experiência profissional me proporcionou conhecimentos práticos em infraestrutura de TI, como administração de redes e uso de sistemas como o SAP.",
        "Meu objetivo é atuar na área de desenvolvimento de software e infraestrutura de TI, aplicando meus conhecimentos para resolver problemas do mundo real e contribuir para projetos que impactem positivamente a sociedade."
    ];
    return (
        <div id="about-me-card">
            <h2 className="sub-title">
                Sobre <span id="accent"><u>Mim</u></span>:
            </h2>
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
