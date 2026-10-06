document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // Course button
    const courseButton = document.querySelector(".course-btn");

    if (courseButton) {
        courseButton.addEventListener("click", () => {
            window.location.href = "login.html";
        });
    }


    // Add small animation when scrolling
    const animatedElements = document.querySelectorAll(
        ".feature-card, .course-card, .hero-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
