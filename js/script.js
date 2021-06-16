function offset(el) {
    var rect = el.getBoundingClientRect();
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
window.addEventListener("scroll", function () {
    // Header
    const header = this.document.querySelector(".header");
    if(window.scrollY >= document.documentElement.clientHeight){
        header.classList.add("_fixed-header");
    } else{
        header.classList.remove("_fixed-header");
    }
    // Projects
    let projects__list = document.querySelector(".projects__list");
    let projects__item = document.querySelectorAll(".projects__item");
    if(offset(projects__list).top < window.scrollY + document.documentElement.clientHeight){
        for(let i = 0; i < projects__item.length; i++){
            projects__item[i].classList.add("_projects-animation");
            projects__item[i].style.animationDelay = "0." + i + "s";
        }
    }
    // Catalog
    let catalog__list = document.querySelector(".catalog__list");
    let catalog__item = document.querySelectorAll(".catalog__item");
    if(offset(catalog__list).top < window.scrollY + document.documentElement.clientHeight){
        for(let i = 0; i < catalog__item.length; i++){
            catalog__item[i].classList.add("_catalog-animation");
            catalog__item[i].style.animationDelay = "0." + i + "s";
        }
    }
    // Lease
    let lease__list = document.querySelector(".lease__content");
    let lease__item = document.querySelectorAll(".lease__content>*");
    if(offset(lease__list).top < window.scrollY + document.documentElement.clientHeight){
        let revers__index = lease__item.length - 1;
        for(let i = 0; i < lease__item.length; i++){
            lease__item[i].classList.add("_lease-animation");
            lease__item[i].style.animationDelay = "0." + revers__index + "s";
            revers__index--;
        }
    }
    // News
    let news__list = document.querySelector(".news__list");
    let news__item = document.querySelectorAll(".news__item");
    if(offset(news__list).top < window.scrollY + document.documentElement.clientHeight){
        for(let i = 0; i < news__item.length; i++){
            news__item[i].classList.add("_news-animation");
            news__item[i].style.animationDelay = "0." + i + "s";
        }
    }
});

// Catalog buttons
let robe_button = document.getElementById("robe_button");
let compulite_button = document.getElementById("compulite_button");
robe_button.onclick = function () {
    robe_button.classList.add("catalog__button_active");
    compulite_button.classList.remove("catalog__button_active");
}
compulite_button.onclick = function () {
    compulite_button.classList.add("catalog__button_active");
    robe_button.classList.remove("catalog__button_active");
}

// Open / Close menu
const burger_menu = document.querySelector(".burger__menu");
const header__navigation = document.querySelector(".header__navigation");

burger_menu.addEventListener("click", toggleMenu);
header__navigation.addEventListener("click", toggleMenu);

function toggleMenu() {
    if(document.documentElement.clientWidth <= 768){
        header__navigation.classList.toggle("header__navigation_open");
        document.body.classList.toggle("body-overflow");
    }
}