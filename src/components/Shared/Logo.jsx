import CubeScene from "./CubeScene";
import './logo.css'
import { Link } from "react-router-dom";


function Logo() {
    return (
        <Link to={"/"} className="logo" >
            <p id="nome">
                <b>
                <span id="accent">.</span>Vitor
                </b>
            </p>
            <CubeScene/>
        </Link>
    );
}

export default Logo;