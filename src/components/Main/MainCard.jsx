import self from "../../assets/self.png";
import './main.css'

function MainCard(){
    return (
        <div id="main-card">
            <div id="main-title-box">
                <h1 className="main-title">Olá! me chamo <span id="accent"><u>Vitor</u></span>. Sou um estudante de
                    progamação.</h1>
            </div>
            <div id="main-image-box">
                <img id="main-image" src={self} alt="Foto Minha"/>
            </div>
        </div>
    );
}
export default MainCard;