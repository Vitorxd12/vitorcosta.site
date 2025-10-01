import {useEffect, useState} from "react";
import NavBarBox from "./NavBarBox";


function HandleNavBar() {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setOpen(false); // fecha menu ao voltar para desktop
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!isMobile) {
        return <NavBarBox/>;
    }

    return open ? (
        <div>
            <div id="hamburguer" onClick={() => setOpen(false)}>
                ☰
            </div>
            <NavBarBox mobile={true}/>
        </div>
    ) : (
        <div id="hamburguer" onClick={() => setOpen(true)}>
            ☰
        </div>
    );
}

export default HandleNavBar;