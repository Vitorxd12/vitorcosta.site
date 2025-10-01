import React from "react";
import theme from "../../assets/theme.png"

function HandleTheme() {
    const [dark, setDark] = React.useState(() => {
        const saved = localStorage.getItem("theme");
        return saved ? saved === "dark" : true; // default dark = true
    });

    React.useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("darkmode", dark);
        // opcional: manter uma classe light explicita
        root.classList.toggle("lightmode", !dark);

        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return(
        <div>
            <button className={'navbar-button'} onClick={() => setDark(prev => !prev)}>
                <img id={'theme-icon'} src={theme} alt="Tema"/>
            </button>
        </div>
    )
}
export default HandleTheme;