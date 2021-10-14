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
              breakpoint: 721,
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

let btnReg = document.querySelector("button.btn-login");

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

function checkReg(){
    let inputName = document.querySelector("input.input-name");
    let inputPass = document.querySelector("input.input-pass");

    let regexpName = /[A-Z]{1}[a-zA-Z\d\w]{4,}/g;
    let regexpPass = /[a-zA-Z\d\w]{8,}/g;

    if(inputName.value.search(regexpName) > -1 && inputPass.value.search(regexpPass) > -1){
        alert("Welcome to ExtBel!");

        let loginWindow = document.querySelector("div.login-window");
        let modaleBg = document.querySelector("div.modale-bg");
    
        modaleBg.style.animation = "closeModaleBgMove .3s 1 linear forwards";
    
        loginWindow.style.animation = "closeLoginWindow .3s 1 linear forwards";
    }
    else if(inputName.value.search(regexpName) == -1){
        alert("The name must contain:\n- The first capital letter;\n- Length of at least 5 symbols.");
    }
    else if(inputPass.value.search(regexpPass) == -1){
        alert("The password must contain:\n- Letters and numbers;\n- Length of at least 8 symbols.");
    }
}

btnReg.addEventListener("click", checkReg);
btnBurgerMenu.addEventListener("click", showHeaderList);
btnSearch.addEventListener("click", showHeaderSearch);
btnCloseMenu.addEventListener("click", closeHeaderList);
btnCloseSearch.addEventListener("click", closeHeaderSearch);
btnLogIn.addEventListener("click", LogIn);
btnCloseLogIn.addEventListener("click", closeLogIn);