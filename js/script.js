const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".fade").forEach((element) => {
    observer.observe(element);
});

// Navbar background on scroll

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background = "rgba(0,0,0,0.75)";
    } else {
        nav.style.background = "transparent";
    }

});

// Button animation

const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
});

button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
});