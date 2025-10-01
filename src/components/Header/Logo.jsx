import CubeScene from "../CubeScene";
import { Link } from "react-router-dom";


function Logo() {
    return (
        <Link to={"/"} className="logo" >
            <h1 id="nome">
                <span id="accent">.</span>vitor
            </h1>
            <CubeScene/>
        </Link>
    );
}

export default Logo;