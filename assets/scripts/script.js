// JS NAVBAR

var navbar = document.getElementById('navbar');
var mobileMenu = document.getElementById('mobile-menu');
var navbarHeight = navbar.clientHeight;

const $ = document.querySelector.bind(document);


// Dong/Mo mobile menu
mobileMenu.onclick = function() {
    var isClosed = navbar.clientHeight === navbarHeight;
    if(isClosed) {
        navbar.style.height = 'auto';
    } else {
        navbar.style.height = '0';
    }
}

// TODO SUBNAV
// const btn_sticky = $("btn-sticky");
// btn_sticky.addEventListener("click", () => {
//     $()
// });

// Tu dong dong khi chon menu
var menuItems = document.querySelectorAll('.nav li a[href*="#"]');
for(var i = 0; i< menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
        if(!isParentMenu ) {
            navbar.style.height = '0';
        } else {
            event.preventDefault();
        }
    }
}


// Function change img
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-container");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

setInterval(function() {
    plusSlides(1);
}, 2000);