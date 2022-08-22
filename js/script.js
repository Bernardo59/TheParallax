// Variables
let navbar = document.getElementById("navbar");
let navbarMenu = document.getElementById("navbar__menu");
let navbarMobile = document.getElementById("navbar__mobile");
let navbarHamb = document.getElementById("navbar__menu-hamb");
let header = document.querySelector('header');
let section = document.querySelectorAll('section')

// Portfolio
let pfImg = document.getElementsByClassName("portfolio__grid-picture-img");
let pfWindow = document.getElementById("portfolio__grid-extend");
let pfClose = document.getElementById("portfolio__grid-extend-container-a");

// Close portfolio
const closePortfolio = () => {pfWindow.style.display = "none";}

// Style NavBar
const styleNavbarScroll = () => {
    navbarMenu.style.backgroundColor = "#fff";
    navbarMenu.style.boxShadow = "0 2px 5px 0 rgb(0 0 0 / 16%)"
    navbarMenu.style.animation = "navbar 0.5s";
}
const styleNavbarTansparent = () => {
    navbarMenu.style.backgroundColor = "transparent";
    navbarMenu.style.boxShadow = "none"
    navbarMenu.style.animation = "none"
}

// Change style of navbar on scroll
window.onscroll = () => {showNavbarMenu()};
const showNavbarMenu = () => {
    if ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) || navbarMobile.style.display == "flex"){
        styleNavbarScroll();
    } else {
        styleNavbarTansparent();
     }
}

// Show navbar mobile
const showNavbarMobile = () => {
    if (navbarMobile.style.display == "none" || navbarMobile.style.display == "" ) {
        navbarMobile.style.display = "flex";   
        styleNavbarScroll();
    }
    else {
        navbarMobile.style.display = "none";
    }
}

// Hide navbar mobile when user click on page
const hideNavbarMobile = () => { navbarMobile.style.display = "none";}

// Events 
navbarHamb.addEventListener('click', showNavbarMobile);
header.addEventListener('click', hideNavbarMobile);
for (const element of section) {element.addEventListener('click', hideNavbarMobile);}
pfClose.addEventListener('click', closePortfolio);

// Show image on portfolio
for (const elm of pfImg) {
    elm.addEventListener('click', function() {
        if (pfWindow.style.display == 'none' || pfWindow.style.display == '') {
            // get value of img
            let src = elm.currentSrc;
            let alt = elm.alt;
            // show window
            pfWindow.style.display = "block";
            document.getElementById("portfolio__grid-extend-container-img").src = src;
            document.getElementById("portfolio__grid-extend-container-p").innerText = alt;
        }
    });
};

