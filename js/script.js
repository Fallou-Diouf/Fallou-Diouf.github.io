const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const cvButton = document.getElementById("cv-button");
const cvModal = document.getElementById("cv-modal");
const cvClose = document.getElementById("cv-close");

cvButton.addEventListener("click", () => {
    cvModal.classList.add("active");
});

cvClose.addEventListener("click", () => {
    cvModal.classList.remove("active");
});

cvModal.addEventListener("click", (event) => {
    if (event.target === cvModal) {
        cvModal.classList.remove("active");
    }
});