import Logo from "../components/Shared/Logo";
import HandleNavBar from "../components/Header/HandleNavBar";
import React, {useEffect} from "react";
import CalculadoraMain from "../components/Calculadora/CalculadoraMain";
import './PortifolioApp.css'
import Contact from "../components/Footer/Contact";
import ImagemServidor from '../assets/ServidorApp.jpg'
import DocumentacaoServidor from "../assets/DocumentacaoServidor.pdf"


function Portifolio({pagina}) {
    useEffect(() => {
        document.title = "Vitor Costa | Desenvolvedor";

        const favicon = document.querySelector("link[rel='icon']");
        if (favicon) {
            favicon.href = "/favicon.png";
        }

    }, []);
    if (pagina === 'calculadora') {
        return (
            <div id={'body-portifolio-app'}>
                <header id="header">
                    <Logo/>
                    <HandleNavBar/>
                </header>
                <main id="main-portifolio-app">
                    <div className="box-portifolio-app">
                        <CalculadoraMain/>
                        <div className={'conteudo-portifolio-app'}>
                            <h2>Calculadora cientifica do zero</h2>
                            <p>
                                Como um projeto de Cálculo I, esta calculadora vai além do básico. Seu motor matemático foi construído do zero, onde o seno ganha vida com Séries de Taylor e a raiz quadrada é encontrada pelo engenhoso método de Newton-Raphson. A lógica por trás da interface é igualmente robusta: um pré-processador de texto interpreta a expressão digitada, resolvendo até mesmo multiplicações implícitas, para então entregar ao motor de cálculo. Tudo construído em JavaScript moderno, em uma estrutura modular que separa a matemática da interface, transformando conceitos teóricos em uma ferramenta web interativa e funcional.
                            </p>
                            <a href="https://github.com/Vitorxd12/vitorcosta.site/tree/main/src/components/calculadora" target="_blank" rel="noopener noreferrer" className={'portifolio-button'}>Acesse os arquivos do repositório!</a>
                        </div>
                    </div>
                </main>
                <footer>
                    <Contact/>
                </footer>
            </div>
        )
    } else if (pagina === 'servidor') {
            return (
                <div id={'body-portifolio-app'}>
                    <header id="header">
                        <Logo/>
                        <HandleNavBar/>
                    </header>
                    <main id="main-portifolio-app">

                        <div className="box-portifolio-app">
                            <img src={ImagemServidor} alt={'Servidor'} className={'imagem-portifolio-app'}/>

                            <p className={'conteudo-portifolio-app'}>
                                <h2>Servidor doméstico</h2>
                                <p>
                                    Esta página é o resultado de um projeto de homelab: a criação de um servidor pessoal, seguro e de baixo custo. A aplicação React que você está vendo roda em um contêiner Docker, servido por um Raspberry Pi, e chega até você através de um Cloudflare Tunnel — uma arquitetura que não exige nenhuma porta de rede aberta, garantindo a segurança. A documentação foi feita de forma divertida, como um diario de bordo que detalha os desafios e as soluções, e o resultado foi uma experiencia de muito aprendizado em servidores, React, redes, protocolos, linux e muito mais.
                                </p>
                                <a href={DocumentacaoServidor} download className={'portifolio-button'}>Conheça o diário de bordo!</a>
                            </p>
                        </div>
                    </main>
                    <footer>
                        <Contact/>
                    </footer>
                </div>
            )
    }}


export default Portifolio;