document.addEventListener("DOMContentLoaded", () => {
    /* ==========================================================================
       1. NAVIGATION MOBILE
       ========================================================================== */
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        // Toggle du menu burger
        menuToggle.addEventListener("click", () => {
            const isActive = navLinks.classList.toggle("active");
            
            // Mise à jour de l'icône et de l'accessibilité
            menuToggle.textContent = isActive ? "✕" : "☰";
            menuToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
        });

        // Fermeture automatique du menu au clic sur un lien
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    /* ==========================================================================
       2. MODALE SÉLECTION DU CV
       ========================================================================== */
    const cvButton = document.getElementById("cv-button");
    const cvModal = document.getElementById("cv-modal");
    const cvClose = document.getElementById("cv-close");

    if (cvButton && cvModal && cvClose) {
        // Ouvrir la modale
        cvButton.addEventListener("click", () => {
            cvModal.classList.add("active");
            document.body.style.overflow = "hidden"; // Empêche le défilement en arrière-plan
        });

        // Fonction pour fermer la modale
        const closeModal = () => {
            cvModal.classList.remove("active");
            document.body.style.overflow = "auto"; // Réactive le défilement
        };

        // Fermer au clic sur le bouton de fermeture
        cvClose.addEventListener("click", closeModal);

        // Fermer au clic à l'extérieur du contenu de la modale
        cvModal.addEventListener("click", (event) => {
            if (event.target === cvModal) {
                closeModal();
            }
        });

        // Fermer avec la touche Échap (Escape)
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && cvModal.classList.contains("active")) {
                closeModal();
            }
        });
    }

    /* ==========================================================================
        3. SCROLL REVEAL (INTERSECTION OBSERVER)
        ========================================================================== */
        const revealElements = document.querySelectorAll(
            ".project-card, .skill-card, .education-item, .internship-content"
        );

        if ("IntersectionObserver" in window) {
            const revealObserver = new IntersectionObserver(
                (entries, observer) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("revealed");
                            // Désobserve l'élément une fois affiché pour économiser la mémoire
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    root: null, // Fenêtre d'affichage (viewport)
                    threshold: 0.15, // L'élément s'anime dès que 15% est visible
                    rootMargin: "0px 0px -50px 0px" // Déclenche l'animation légèrement avant le bas de l'écran
                }
            );

            revealElements.forEach((el) => {
                el.classList.add("reveal-on-scroll");
                revealObserver.observe(el);
            });
        } else {
            // Fallback pour les navigateurs très anciens
            revealElements.forEach((el) => el.classList.add("revealed"));
        }
});

