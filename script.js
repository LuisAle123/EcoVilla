document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Efectos visuales del Header ---
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(46, 204, 113, 0.2)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    // --- 2. Validación del Formulario ---
    const contactForm = document.getElementById("form-ecovilla");
    if (contactForm) {
        contactForm.addEventListener("submit", () => {
            const btn = contactForm.querySelector("button[type='submit']");
            btn.textContent = "Enviando...";
            btn.style.backgroundColor = "#fff";
            btn.style.color = "#000";
        });
    }

    // --- 3. Modo Claro / Oscuro ---
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.documentElement; // Usamos la etiqueta <html> para el tema

    // Revisar si ya hay una preferencia guardada
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
        body.setAttribute("data-theme", "light");
        if(themeToggle) themeToggle.textContent = "🌙";
    } else {
        if(themeToggle) themeToggle.textContent = "☀️";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            if (body.hasAttribute("data-theme")) {
                body.removeAttribute("data-theme");
                themeToggle.textContent = "☀️";
                localStorage.setItem("theme", "dark");
            } else {
                body.setAttribute("data-theme", "light");
                themeToggle.textContent = "🌙";
                localStorage.setItem("theme", "light");
            }
        });
    }

    // --- 4. Sistema de Sonidos ---
    // Instanciar los audios (Asegúrate de tener estos archivos en tu carpeta)
    const hoverSound = new Audio('hover.mp3');
    const clickSound = new Audio('click.mp3');

    // Bajar un poco el volumen para que no sea molesto
    hoverSound.volume = 0.2; 
    clickSound.volume = 0.4;

    // Seleccionar todos los elementos interactivos
    const interactables = document.querySelectorAll('a, button, .btn');

    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0; // Reiniciar el audio si se pasa rápido
            hoverSound.play().catch(() => {}); // El catch evita errores si el navegador bloquea el autoplay
        });

        el.addEventListener('click', () => {
            clickSound.play().catch(() => {});
        });
    });
});
