import HandleTheme from "./HandleTheme";
import './header.css'
import {useNavigate} from "react-router-dom";



function NavBarBox({mobile}) {
    const navigate = useNavigate();

    function findItemInIndex(id){
        navigate('/', { state: { scrollToId: id } });
    }

    return (
        <div id={mobile ? "navbar-mobile" : "navbar"}>
            <HandleTheme />
            <a className="navbar-button" href="../../assets/Currículo- Vitor Oliveira Costa Dias.pdf" download>
                Currículo
            </a>
            <button className="navbar-button" onClick={() => findItemInIndex("about-me-card")}>
                Sobre
            </button>
            <button className="navbar-button highlight" onClick={() => findItemInIndex("end")}>
                Contato
            </button>
        </div>
    )
}

export default NavBarBox;