<<<<<<< HEAD
/* =========================
   KMØD APP
========================= */

/* =========================
    AUTH STATE
========================= */
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const nav = document.querySelector("nav ul");

onAuthStateChanged(auth, (user) => {

    if (user) {
        nav.innerHTML += `
            <li><a href="dashboard.html">DASHBOARD</a></li>
        `;
    } else {
        nav.innerHTML += `
            <li><a href="login.html">LOGIN</a></li>
            <li><a href="register.html">REGISTER</a></li>
        `;
    }

});

/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

    });

}

/* =========================
   CURSOR HOVER
========================= */

const hoverTargets = document.querySelectorAll(
    "a, button, .product-grid"
);

hoverTargets.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        if (!cursor) return;

        cursor.style.width = "45px";
        cursor.style.height = "45px";

    });

    item.addEventListener("mouseleave", () => {

        if (!cursor) return;

        cursor.style.width = "20px";
        cursor.style.height = "20px";

    });

});

/* =========================
   SPOTLIGHT EFFECT
========================= */

const spotlight = document.querySelector(".spotlight");

if (spotlight) {

    document.addEventListener("mousemove", (e) => {

        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;

    });

}

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (!nav) return;

    if (window.scrollY > 50) {

        nav.style.background = "rgba(5,5,5,0.8)";
        nav.style.backdropFilter = "blur(20px)";
        nav.style.borderBottom =
        "1px solid rgba(255,255,255,0.08)";

    } else {

        nav.style.background =
        "rgba(0,0,0,0.25)";

        nav.style.borderBottom = "none";

    }

});

/* =========================
   PRODUCT TILT
========================= */

const cards = document.querySelectorAll(".product-grid");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 25;
        const rotateX = -(y - centerY) / 25;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});

/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const input =
        newsletterForm.querySelector("input");

        if (!input.value.trim()) {

            alert("Please enter your email.");
            return;

        }

        alert("Welcome to KMØD.");

        input.value = "";

    });

}

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

/* =========================
   CONSOLE EASTER EGG
========================= */

console.log(`

██╗  ██╗███╗   ███╗ ██████╗ ██████╗
██║ ██╔╝████╗ ████║██╔═══██╗██╔══██╗
█████╔╝ ██╔████╔██║██║   ██║██║  ██║
██╔═██╗ ██║╚██╔╝██║██║   ██║██║  ██║
██║  ██╗██║ ╚═╝ ██║╚██████╔╝██████╔╝
╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═════╝

ENTER THE MODE

=======
/* =========================
   KMØD APP
========================= */

/* =========================
    AUTH STATE
========================= */
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const nav = document.querySelector("nav ul");

onAuthStateChanged(auth, (user) => {

    if (user) {
        nav.innerHTML += `
            <li><a href="dashboard.html">DASHBOARD</a></li>
        `;
    } else {
        nav.innerHTML += `
            <li><a href="login.html">LOGIN</a></li>
            <li><a href="register.html">REGISTER</a></li>
        `;
    }

});

/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

    });

}

/* =========================
   CURSOR HOVER
========================= */

const hoverTargets = document.querySelectorAll(
    "a, button, .product-grid"
);

hoverTargets.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        if (!cursor) return;

        cursor.style.width = "45px";
        cursor.style.height = "45px";

    });

    item.addEventListener("mouseleave", () => {

        if (!cursor) return;

        cursor.style.width = "20px";
        cursor.style.height = "20px";

    });

});

/* =========================
   SPOTLIGHT EFFECT
========================= */

const spotlight = document.querySelector(".spotlight");

if (spotlight) {

    document.addEventListener("mousemove", (e) => {

        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;

    });

}

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (!nav) return;

    if (window.scrollY > 50) {

        nav.style.background = "rgba(5,5,5,0.8)";
        nav.style.backdropFilter = "blur(20px)";
        nav.style.borderBottom =
        "1px solid rgba(255,255,255,0.08)";

    } else {

        nav.style.background =
        "rgba(0,0,0,0.25)";

        nav.style.borderBottom = "none";

    }

});

/* =========================
   PRODUCT TILT
========================= */

const cards = document.querySelectorAll(".product-grid");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 25;
        const rotateX = -(y - centerY) / 25;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});

/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const input =
        newsletterForm.querySelector("input");

        if (!input.value.trim()) {

            alert("Please enter your email.");
            return;

        }

        alert("Welcome to KMØD.");

        input.value = "";

    });

}

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

/* =========================
   CONSOLE EASTER EGG
========================= */

console.log(`

██╗  ██╗███╗   ███╗ ██████╗ ██████╗
██║ ██╔╝████╗ ████║██╔═══██╗██╔══██╗
█████╔╝ ██╔████╔██║██║   ██║██║  ██║
██╔═██╗ ██║╚██╔╝██║██║   ██║██║  ██║
██║  ██╗██║ ╚═╝ ██║╚██████╔╝██████╔╝
╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═════╝

ENTER THE MODE

>>>>>>> f1ffff6 (update)
`);