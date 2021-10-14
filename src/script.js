$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        arrows: true,
        autoplay: true,
        slidesToScroll: 2,
        dots: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 720,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });
});

let btnSearch = document.querySelector("div.btn-search");
let btnBurgerMenu = document.querySelector("div.bg-menu");
let btnLogIn = document.querySelector("label.reg-btn");
let btnCloseMenu = document.querySelector("label.close-menu");
let btnCloseSearch = document.querySelector("label.close-search");
let btnCloseLogIn = document.querySelector("label.btn-close");

function showHeaderList(){
    let headerList = document.querySelector("div.header-list");
    let modaleBg = document.querySelector("div.modale-bg");

    modaleBg.style.display = "block";
    modaleBg.style.animation = "showModaleBg .3s 1 linear forwards";

    headerList.style.display = "block";
    headerList.style.animation = "showHeaderList .3s 1 linear forwards";
}

function showHeaderSearch(){
    let headerSearch = document.querySelector("div.header-search");

    headerSearch.style.display = "block";
    headerSearch.style.animation = "showHeaderSearch .3s 1 linear forwards";
}

function closeHeaderList(){
    let headerList = document.querySelector("div.header-list");
    let modaleBg = document.querySelector("div.modale-bg");

    modaleBg.style.animation = "closeModaleBgMove .3s 1 linear forwards";

    headerList.style.animation = "closeHeaderList .3s 1 linear forwards";
}

function closeHeaderSearch(){
    let headerSearch = document.querySelector("div.header-search");

    headerSearch.style.animation = "closeHeaderSearch .3s 1 linear forwards";
}

function LogIn(){
    let loginWindow = document.querySelector("div.login-window");
    let modaleBg = document.querySelector("div.modale-bg");

    modaleBg.style.animation = "showModaleBg .3s 1 linear forwards";

    loginWindow.style.animation = "showLoginWindow .3s 1 linear forwards";
}

function closeLogIn(){
    let loginWindow = document.querySelector("div.login-window");
    let modaleBg = document.querySelector("div.modale-bg");

    modaleBg.style.animation = "closeModaleBgMove .3s 1 linear forwards";

    loginWindow.style.animation = "closeLoginWindow .3s 1 linear forwards";
}

btnBurgerMenu.addEventListener("click", showHeaderList);
btnSearch.addEventListener("click", showHeaderSearch);
btnCloseMenu.addEventListener("click", closeHeaderList);
btnCloseSearch.addEventListener("click", closeHeaderSearch);
btnLogIn.addEventListener("click", LogIn);
btnCloseLogIn.addEventListener("click", closeLogIn);