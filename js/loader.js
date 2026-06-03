<<<<<<< HEAD
/* =========================
   KMØD LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    gsap.timeline()

    .to(".loader-logo", {

        y: -40,
        opacity: 0,

        duration: 0.8,

        ease: "power4.out"

    })

    .to(".loader p", {

        y: 30,
        opacity: 0,

        duration: 0.8,

        ease: "power4.out"

    }, "-=0.6")

    .to(loader, {

        opacity: 0,

        duration: 1,

        ease: "power4.out",

        onComplete: () => {

            loader.style.display = "none";

        }

    });

=======
/* =========================
   KMØD LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    gsap.timeline()

    .to(".loader-logo", {

        y: -40,
        opacity: 0,

        duration: 0.8,

        ease: "power4.out"

    })

    .to(".loader p", {

        y: 30,
        opacity: 0,

        duration: 0.8,

        ease: "power4.out"

    }, "-=0.6")

    .to(loader, {

        opacity: 0,

        duration: 1,

        ease: "power4.out",

        onComplete: () => {

            loader.style.display = "none";

        }

    });

>>>>>>> f1ffff6 (update)
});