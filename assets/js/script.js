/* alternar barra de navegação */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
    navElems[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
}


/* voltar ao topo */

const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    window.scrollY >= 100 ? backTopBtn.classList.add("active")
        : backTopBtn.classList.remove("active");
});

/* enviar feedback */

function onSubmit() {
    alert('Feedback enviado com sucesso!')
}
