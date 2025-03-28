function scrollToElement(buttonClicked) {
    let targetElement = document.getElementById(buttonClicked);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else {
        console.log(`Element with id "${buttonClicked}" not found.`);
    }
}
function openSidebar(){
    let cube = document.getElementById("cube-scene");
    let openSidebarButton = document.getElementById("open-sidebar-button");
    let pageTitle = document.getElementById("page-title");
    let gridContainer = document.getElementById("body");
    let sidebar = document.getElementById("sidebar");

    gridContainer.style.gridTemplateAreas = "'side header' 'side content'";
    gridContainer.style.gridTemplateColumns = "300px 1fr";
    sidebar.style.display = "block";
    pageTitle.style.display = "none";
    openSidebarButton.style.display = "none";
    cube.style.display = "none";
}
function closeSidebar() {
    let openSidebarButton = document.getElementById("open-sidebar-button");
    let pageTitle = document.getElementById("page-title");
    let gridContainer = document.getElementById("body");
    let sidebar = document.getElementById("sidebar");

    gridContainer.style.gridTemplateAreas = "'header' 'content'";
    gridContainer.style.gridTemplateColumns = "1fr";
    sidebar.style.display = "none";
    pageTitle.style.display = "block";
    openSidebarButton.style.display = "block";
}

window.addEventListener("resize", function () {
    if (window.innerWidth > 700) {
        // Call openSidebar() for larger screens
        openSidebar();
    } else {
        // Call closeSidebar() for smaller screens
        closeSidebar();
    }
});
window.addEventListener("scroll", function () {
    let sidebarLogo = document.getElementById("sidebar-logo");
    if (window.scrollY > 90) { 
        sidebarLogo.style.opacity = '1';
    } else {
        sidebarLogo.style.opacity = '0'; 
    }
});
alert("Esta pagina está em construção, por favor volte mais tarde.");