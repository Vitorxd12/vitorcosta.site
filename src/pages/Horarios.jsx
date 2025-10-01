import HorariosIFS from "../components/Horarios/HoráriosIFS";
import HorariosUFS from "../components/Horarios/HorariosUFS";
import {useEffect} from "react";


function Horarios({local}){
    if(local === "ifs"){
        return <HorariosIFS />;
    } else if(local === "ufs"){
        return <HorariosUFS />
    }
}
export default Horarios;