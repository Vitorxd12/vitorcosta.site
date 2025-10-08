# Portfólio Profissional - vitorcosta.site

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)](https://www.cloudflare.com/)
[![Site Status](https://img.shields.io/badge/Status-Online-brightgreen?style=for-the-badge)](https://vitorcosta.site)

## Resumo do Projeto

Este repositório contém o código-fonte do meu site portfólio [vitorcosta.site](https://vitorcosta.site). O projeto se trata implementação de uma aplicação front-end moderna, servida por uma infraestrutura de auto-hospedagem segura e eficiente.

O principal objetivo é apresentar competências técnicas em desenvolvimento front-end, práticas de DevOps e administração de sistemas Linux em um ambiente de produção, além de auxiliar no meu apredizado destas tecnologias.

## Componentes Principais

### 1. Infraestrutura de Servidor (Homelab)
A aplicação é servida a partir de uma infraestrutura local configurada para alta disponibilidade e segurança.

- **Hardware:** Raspberry Pi.
- **Containerização:** A aplicação React é encapsulada em um contêiner **Docker** para garantir a portabilidade e consistência do ambiente.
- **Rede e Segurança:** O acesso externo é gerenciado através do **Cloudflare Tunnel**, que provê uma conexão segura sem a necessidade de expor portas de rede públicas, mitigando ataques comuns.
- **Documentação:** A documentação técnica detalhando a arquitetura e o processo de configuração está disponível para consulta.

> **[Acessar Documentação da Infraestrutura](https://vitorcosta.site/portifolio/servidor)**

### 2. Calculadora Científica
Componente integrado ao portfólio que demonstra a implementação de algoritmos matemáticos complexos.

- **Implementação:** O motor matemático foi desenvolvido sem o uso de bibliotecas de cálculo externas.
- **Algoritmos:** Funções trigonométricas são computadas via **Séries de Taylor**, e o cálculo de raízes quadradas utiliza o **método de Newton-Raphson**.
- **Analisador de Expressão (Parser):** Inclui um analisador sintático para pré-processar e resolver expressões matemáticas, incluindo operações implícitas.

> **[Acessar página da Calculadora](https://vitorcosta.site/portifolio/calculadora)**

## Stack Tecnológica

- **Front-end:** React, JavaScript (ES6+), CSS
- **Infraestrutura e DevOps:** Docker, Cloudflare (Tunnel, DNS, Redirect Rules), Linux (Raspberry Pi OS)
- **Ferramentas de Desenvolvimento:** Git, GitHub, npm

## Execução Local

Para executar o projeto em um ambiente de desenvolvimento local, siga os passos abaixo.

1.  Clone o repositório:
    ```sh
    git clone [https://github.com/Vitorxd12/vitorcosta.site.git](https://github.com/Vitorxd12/vitorcosta.site.git)
    ```
2.  Navegue até o diretório e instale as dependências:
    ```sh
    cd vitorcosta.site
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```sh
    npm start
    ```

## Roadmap de Desenvolvimento

Os planos futuros para este projeto incluem:
- **Expansão do Servidor:** Adição de novos serviços e aplicações back-end à infraestrutura existente.
- **Desenvolvimento de Novos Módulos:** Inclusão de novos projetos no portfólio.

## Contato

[GitHub](https://github.com/Vitorxd12) | [LinkedIn](https://www.linkedin.com/in/vitor-oliveira-costa-dias-30523a2b0//)

---
*Mantenedor: Vitor Oliveira Costa Dias.*