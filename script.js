// 1. Curseur personnalisé
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

const hoverTargets = document.querySelectorAll(".hover-target");
hoverTargets.forEach((target) => {
    target.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
    });
    target.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });
});

// 2. Animations au scroll (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // On arrête d'observer une fois l'animation déclenchée
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 3. Déclenchement des animations
window.addEventListener("load", () => {
    // Animation initiale de la page Hero
    setTimeout(() => {
        document
            .querySelectorAll(".hero .reveal-item, .hero .fade-in")
            .forEach((el) => {
                el.classList.add("active");
            });
    }, 100);

    // Observer les éléments de la section About pour l'animation au scroll
    document
        .querySelectorAll(".about .reveal-item, .about .fade-in")
        .forEach((el) => {
            observer.observe(el);
        });
});
