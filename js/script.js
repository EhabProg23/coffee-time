let header = document.querySelector(".header .container")
let toogleMenu = document.querySelector(".toogle-menue")


toogleMenu.onclick = () => {
  header.classList.toggle("active")
}

let myLink = document.querySelector(".header .links")
myLink.onclick = () => {
    header.classList.remove("active")
}

let goingToTopBtn = document.querySelector(".going-to-top")
const scrollBtnDisplay = function () {
  window.scrollY > window.innerHeight - 20
    ? goingToTopBtn.classList.add("show")
    : goingToTopBtn.classList.remove("show");
};
window.addEventListener("scroll", scrollBtnDisplay);

