const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menu = document.querySelector("nav ul");
const menuContainer = document.querySelector(".menu-container")
const navBar = document.querySelector("nav div");
const body = document.querySelector("body");

const handleOpenMenu = () => {
    navBar.style.display = "none";
    body.style.overflowY = "hidden";
    menu.style.left = "0";
    
}

const handleCloseMenu = () => {
    navBar.style.display = "flex";
    body.style.overflowY = "scroll";
    menu.style.left = "100%";
}

openMenu.addEventListener('click', handleOpenMenu);
closeMenu.addEventListener('click', handleCloseMenu);
menu.addEventListener('click', handleCloseMenu);