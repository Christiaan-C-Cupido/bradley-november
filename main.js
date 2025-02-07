document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded!");

    // Smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 50, behavior: 'smooth' });
            }
        });
    });

    // Contact Form Alert
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Message Sent! Thank you for reaching out.");
        this.reset();
    });
});