const menu = document.querySelector(".gn-menu"),
listConteiner = document.querySelector(".gn-list-conteiner"),
line = document.querySelectorAll(".gn-menu-line");

window.onload = function() {
    menu.addEventListener("click", function(){
        line[0].classList.toggle("active");
        line[1].classList.toggle("active");
        listConteiner.classList.toggle("opened");
    })
};