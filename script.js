
// =========================================================
// MOBILE MENU
// =========================================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


// =========================================================
// CLOSE MOBILE MENU AFTER CLICK
// =========================================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


// =========================================================
// ACTIVE NAVBAR LINK
// =========================================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach((item) => {

        item.classList.remove("active");

        if (item.getAttribute("href") === `#${currentSection}`) {

            item.classList.add("active");

        }

    });

});


// =========================================================
// STATS COUNTER
// =========================================================

const statNumbers = document.querySelectorAll(".stat-box strong");

let counterStarted = false;


function startCounters() {

    if (counterStarted) return;

    counterStarted = true;


    statNumbers.forEach((counter) => {

        const originalText = counter.innerText;

        const target = parseInt(originalText);

        const suffix = originalText.replace(/[0-9]/g, "");

        let current = 0;

        const increment = Math.ceil(target / 80);


        const updateCounter = () => {

            current += increment;


            if (current >= target) {

                current = target;

            }


            counter.innerText = current + suffix;


            if (current < target) {

                requestAnimationFrame(updateCounter);

            }

        };


        updateCounter();

    });

}


window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;


    const sectionTop = statsSection.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;


    if (sectionTop < windowHeight - 100) {

        startCounters();

    }

});


// =========================================================
// SCROLL REVEAL ANIMATION
// =========================================================

const revealElements = document.querySelectorAll(
    ".about-image, .about-content, .service-card, .feature, .project-card, .cta-container"
);


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// =========================================================
// NAVBAR BACKGROUND ON SCROLL
// =========================================================

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});


// =========================================================
// BUTTON HOVER EFFECT
// =========================================================

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .nav-button, .cta-button"
);


buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = "0.3s ease";

    });

});


// =========================================================
// CONSOLE MESSAGE
// =========================================================

console.log(
    "Swismax Solution website loaded successfully!"
);

