import PortifolioCard from "./PortifolioCard";
import Calculadora from "../../assets/Calculadora.png"
import Servidor from "../../assets/Servidor.png"
import './Portifolio.css'
import Info from "../Shared/Info";

function PortifolioCardManager() {
    const cards = [
        {
            link: '/Portifolio/Calculadora',
            titulo: "Calculadora Cientifica",
            desc: "Uma calculadora científica 100% artesanal, que pensa como um pequeno cérebro matemático: ela resolve tudo sozinha, do seno à exponencial, apenas com fórmulas clássicas e algoritmos puros — sem depender de nenhuma biblioteca!",
            imagem: Calculadora
        },
        {
            link: '/Portifolio/Servidor',
            titulo: "Servidor Web Local",
            desc: "Este site opera de forma independente em um computador do tamanho de um catão de crédito —  sem depender de servidores de nuvem tradicionais. Quer entender como essa arquitetura funciona na prática? Explore os bastidores da implantação!",
            imagem: Servidor
        },

    ];
    return (
        <div className="portifolio-box">
            <h3 className="portifolio-title">
                <p>Meus <span id={"accent"}><u>Projetos</u></span>:</p>
                <Info />
            </h3>
            <div className={"lista-cards"}>
                {cards.map((card, i) => (
                    <PortifolioCard key={i} {...card} />
                ))}
            </div>
        </div>
    )
}

export default PortifolioCardManager;