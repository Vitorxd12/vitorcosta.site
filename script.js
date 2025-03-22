
function toggleMenu() {
    let menu = document.getElementById("mobile-menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
function scrollToContact(){
    document.getElementById('footercontato').scrollIntoView({
            behavior: "smooth",
            block: "start" 
        });
}
function scrollToAbout(){
    document.getElementById('aboutme').scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
function copyMailToClipboard() {
    const emailText = "Vitorxd12.12@gmail.com"; // E-mail fixo
    navigator.clipboard.writeText(emailText).then(() => {
        alert("E-mail copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar:", err);
    });
}
function copyNumbToClipboard() {
    const emailText = "+55 (79) 99888-6868"; // E-mail fixo
    navigator.clipboard.writeText(numbText).then(() => {
        alert("E-mail copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar:", err);
    });
}