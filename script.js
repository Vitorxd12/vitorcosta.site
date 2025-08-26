
function toggleMenu() {
    let menu = document.getElementById("mobile-menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
function scrollToContact() {
    document.getElementById('contact-title').scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
function scrollToAbout() {
    document.getElementById('about-me-card').scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
