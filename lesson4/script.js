document.querySelector('#lastmod').textContent = document.lastModified;
document.querySelector('#currentYear').textContent = new Date().getFullYear();

function toggleMenu() {
    document.getElementsByClassName("links")[0].classList.toggle("responsive");
    document.getElementsByClassName("menu")


}

