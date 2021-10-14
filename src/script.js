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
    let modaleWindow = document.querySelector("div.login-window");

    modaleWindow.style.display = "none";

    modaleBg.style.display = "block";
    modaleBg.style.opacity = "1";
    modaleBg.style.zIndex = "50";

    headerList.style.display = "block";
    headerList.style.left = "0px";
}

function showHeaderSearch(){
    let headerSearch = document.querySelector("div.header-search");

    headerSearch.style.display = "block";
    headerSearch.style.left = "0%";
}

function closeHeaderList(){
    let headerList = document.querySelector("div.header-list");
    let modaleBg = document.querySelector("div.modale-bg");

    modaleBg.style.opacity = "0";
    headerList.style.left = "-590px";
    
    modaleBg.style.zIndex = "-1";
    modaleBg.style.display = "none";
    headerList.style.display = "none";
}

function closeHeaderSearch(){
    let headerSearch = document.querySelector("div.header-search");

    headerSearch.style.left = "-100%";
    headerSearch.style.display = "none";
}

function LogIn(){
        let loginWindow = document.querySelector("div.login-window");
        let modaleBg = document.querySelector("div.modale-bg");
    
        modaleBg.style.display = "block";
        modaleBg.style.opacity = "1";
        modaleBg.style.zIndex = "50";
    
        loginWindow.style.display = "block";
}

function closeLogIn(){
    let loginWindow = document.querySelector("div.login-window");
    let modaleBg = document.querySelector("div.modale-bg");

    modaleBg.style.opacity = "0";
    modaleBg.style.zIndex = "-1";
    modaleBg.style.display = "none";

    loginWindow.style.display = "none";
}

btnBurgerMenu.addEventListener("click", showHeaderList);
btnSearch.addEventListener("click", showHeaderSearch);
btnCloseMenu.addEventListener("click", closeHeaderList);
btnCloseSearch.addEventListener("click", closeHeaderSearch);
btnLogIn.addEventListener("click", LogIn);
btnCloseLogIn.addEventListener("click", closeLogIn);