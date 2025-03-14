// script.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Página cargada correctamente.");
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll suave para los links de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Abrir vista ampliada del código QR al hacer clic
    const qrImage = document.querySelector('.qr-code img');
    if (qrImage) {
        qrImage.addEventListener('click', function () {
            window.open(qrImage.src, '_blank');
        });
    }
});


