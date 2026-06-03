<<<<<<< HEAD
// =========================
// GSAP SETUP
// =========================

gsap.registerPlugin(ScrollTrigger);

// =========================
// NAVBAR INTRO
// =========================

gsap.from("nav", {

    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"

});

// =========================
// HERO INTRO
// =========================

gsap.from(".hero-small", {

    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out"

});

gsap.from(".hero-description", {

    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power4.out"

});

gsap.from(".hero-buttons", {

    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "power4.out"

});

// =========================
// HERO TEXT REVEAL
// =========================

gsap.from(".hero h1 span", {

    y: 120,
    opacity: 0,

    stagger: 0.15,

    duration: 1.3,

    ease: "power4.out"

});

// =========================
// PRODUCT CARDS
// =========================

gsap.utils.toArray(".product-grid").forEach((card) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        y: 120,
        opacity: 0,
        scale: 0.95,

        duration: 1.4,

        ease: "power4.out"

    });

});

// =========================
// SECTION HEADERS
// =========================

gsap.utils.toArray(".section-header").forEach((section) => {

    gsap.from(section, {

        scrollTrigger: {
            trigger: section,
            start: "top 80%"
        },

        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"

    });

});

// =========================
// PHILOSOPHY
// =========================

gsap.from(".philosophy p", {

    scrollTrigger: {
        trigger: ".philosophy",
        start: "top 75%"
    },

    y: 80,
    opacity: 0,

    duration: 1.2,

    ease: "power4.out"

});

// =========================
// FILM SECTION
// =========================

gsap.from(".film-content", {

    scrollTrigger: {
        trigger: ".brand-film",
        start: "top 75%"
    },

    scale: 0.9,
    opacity: 0,

    duration: 1.4,

    ease: "power4.out"

});

// =========================
// COMMUNITY CARDS
// =========================

gsap.from(".community-card", {

    scrollTrigger: {
        trigger: ".community-grid",
        start: "top 80%"
    },

    y: 100,
    opacity: 0,

    stagger: 0.15,

    duration: 1.2,

    ease: "power4.out"

});

// =========================
// NEWSLETTER
// =========================

gsap.from(".newsletter form", {

    scrollTrigger: {
        trigger: ".newsletter",
        start: "top 75%"
    },

    y: 80,
    opacity: 0,

    duration: 1.2,

    ease: "power4.out"

});

// =========================
// PREMIUM TEXT REVEAL
// =========================

gsap.utils.toArray(
".section-header h2 span, .philosophy h2 span, .film-content h2 span, .community h2 span, .newsletter h2 span"
).forEach((line) => {

    gsap.from(line, {

        scrollTrigger: {
            trigger: line,
            start: "top 90%"
        },

        y: 120,
        opacity: 0,

        duration: 1.2,

        ease: "power4.out"

    });

});

// =========================
// HERO VIDEO PARALLAX
// =========================

const heroVideo = document.querySelector(".hero-video");

if(heroVideo){

    window.addEventListener("scroll", () => {

        const scrollY = window.scrollY;

        heroVideo.style.transform =
        `scale(1.08) translateY(${scrollY * 0.12}px)`;

    });

}

// =========================
// FADE IN SECTIONS
// =========================

gsap.utils.toArray("section").forEach((section) => {

    gsap.from(section, {

        scrollTrigger: {
            trigger: section,
            start: "top 90%"
        },

        opacity: 0,

        duration: 1,

        ease: "power2.out"

    });

=======
// =========================
// GSAP SETUP
// =========================

gsap.registerPlugin(ScrollTrigger);

// =========================
// NAVBAR INTRO
// =========================

gsap.from("nav", {

    y: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"

});

// =========================
// HERO INTRO
// =========================

gsap.from(".hero-small", {

    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out"

});

gsap.from(".hero-description", {

    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power4.out"

});

gsap.from(".hero-buttons", {

    y: 60,
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "power4.out"

});

// =========================
// HERO TEXT REVEAL
// =========================

gsap.from(".hero h1 span", {

    y: 120,
    opacity: 0,

    stagger: 0.15,

    duration: 1.3,

    ease: "power4.out"

});

// =========================
// PRODUCT CARDS
// =========================

gsap.utils.toArray(".product-grid").forEach((card) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        y: 120,
        opacity: 0,
        scale: 0.95,

        duration: 1.4,

        ease: "power4.out"

    });

});

// =========================
// SECTION HEADERS
// =========================

gsap.utils.toArray(".section-header").forEach((section) => {

    gsap.from(section, {

        scrollTrigger: {
            trigger: section,
            start: "top 80%"
        },

        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"

    });

});

// =========================
// PHILOSOPHY
// =========================

gsap.from(".philosophy p", {

    scrollTrigger: {
        trigger: ".philosophy",
        start: "top 75%"
    },

    y: 80,
    opacity: 0,

    duration: 1.2,

    ease: "power4.out"

});

// =========================
// FILM SECTION
// =========================

gsap.from(".film-content", {

    scrollTrigger: {
        trigger: ".brand-film",
        start: "top 75%"
    },

    scale: 0.9,
    opacity: 0,

    duration: 1.4,

    ease: "power4.out"

});

// =========================
// COMMUNITY CARDS
// =========================

gsap.from(".community-card", {

    scrollTrigger: {
        trigger: ".community-grid",
        start: "top 80%"
    },

    y: 100,
    opacity: 0,

    stagger: 0.15,

    duration: 1.2,

    ease: "power4.out"

});

// =========================
// NEWSLETTER
// =========================

gsap.from(".newsletter form", {

    scrollTrigger: {
        trigger: ".newsletter",
        start: "top 75%"
    },

    y: 80,
    opacity: 0,

    duration: 1.2,

    ease: "power4.out"

});

// =========================
// PREMIUM TEXT REVEAL
// =========================

gsap.utils.toArray(
".section-header h2 span, .philosophy h2 span, .film-content h2 span, .community h2 span, .newsletter h2 span"
).forEach((line) => {

    gsap.from(line, {

        scrollTrigger: {
            trigger: line,
            start: "top 90%"
        },

        y: 120,
        opacity: 0,

        duration: 1.2,

        ease: "power4.out"

    });

});

// =========================
// HERO VIDEO PARALLAX
// =========================

const heroVideo = document.querySelector(".hero-video");

if(heroVideo){

    window.addEventListener("scroll", () => {

        const scrollY = window.scrollY;

        heroVideo.style.transform =
        `scale(1.08) translateY(${scrollY * 0.12}px)`;

    });

}

// =========================
// FADE IN SECTIONS
// =========================

gsap.utils.toArray("section").forEach((section) => {

    gsap.from(section, {

        scrollTrigger: {
            trigger: section,
            start: "top 90%"
        },

        opacity: 0,

        duration: 1,

        ease: "power2.out"

    });

>>>>>>> f1ffff6 (update)
});