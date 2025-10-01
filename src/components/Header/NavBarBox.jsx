import HandleTheme from "./HandleTheme";

function scrollToView(id) {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}

function NavBarBox({mobile}) {
    return (
        <div id={mobile ? "navbar-mobile" : "navbar"}>
            <HandleTheme />
            <a className="navbar-button" href="../../assets/Currículo- Vitor Oliveira Costa Dias.pdf"
               download>Currículo</a>
            <button className="navbar-button" onClick={() => scrollToView("about-me-card")}>Sobre</button>
            <button className="navbar-button highlight" onClick={() => scrollToView("end")}>Contato</button>
        </div>
    )
}

export default NavBarBox;