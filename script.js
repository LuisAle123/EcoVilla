// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Interactividad 2: Efectos visuales en el DOM (Menú Móvil y Scroll)
    const header = document.querySelector("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(46, 204, 113, 0.2)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    // Interactividad 3: Validación e interacción del formulario
    const contactForm = document.getElementById("form-ecovilla");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            const btn = contactForm.querySelector("button[type='submit']");
            btn.textContent = "Enviando...";
            btn.style.backgroundColor = "#fff";
            btn.style.color = "#000";
            // No prevenimos el default para que Formspree haga su trabajo y redirija.
        });
    }
});