
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