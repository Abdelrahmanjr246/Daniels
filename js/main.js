document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > header.offsetHeight) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled"); 
        }
    });
});

var typed = new Typed('#element', {
    strings: ['Larry Daniels','Designer', 'Developer'],
    typeSpeed: 40,
    loop: true,
});

