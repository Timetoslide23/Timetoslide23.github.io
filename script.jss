document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function() {
        menuIcon.classList.toggle("active");
        menu.classList.toggle("active");
    });
});