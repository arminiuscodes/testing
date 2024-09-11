
document.addEventListener("DOMContentLoaded", function () {
    // Check if the screen width is greater than 768px (for tablets and larger screens)
    if (window.innerWidth > 768) {
        gsap.registerPlugin(ScrollTrigger);

        // Navigation Bar Animation - slide down with opacity fade
        gsap.from(".nav_bar", {
            y: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        });

        // Slider Animation - scale up with a slight rotation
        gsap.fromTo(".slide", {
            opacity: 0,
            scale: 0.9,
            rotate: -2
        }, {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.3
        });

        // About Us Section - slide in from the left with a slight rotation
        gsap.fromTo(".aboutus", {
            x: -100,
            opacity: 0,
            rotate: -5
        }, {
            x: 0,
            opacity: 1,
            rotate: 0,
            duration: 1.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".aboutus",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
                once: false
            }
        });

        // Services Section - zoom in each card with a bounce effect
        gsap.fromTo(".services .card1, .services .card2, .services .card3", {
            opacity: 0,
            scale: 0.8
        }, {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "bounce.out",
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".services",
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none none",
                once: true
            }
        });

        // Blog Section - rotate and fade in
        gsap.fromTo(".blog_section", {
            opacity: 0,
            rotate: 10,
            y: 50
        }, {
            opacity: 1,
            rotate: 0,
            y: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
                trigger: ".blog_section",
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none none",
                once: true
            }
        });

        // Feedback Section - staggered slide up with fade
        gsap.fromTo(".feedback_section .cards .cards01, .feedback_section .cards .cards02, .feedback_section .cards .cards03", {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".feedback_section",
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none none",
                once: true
            }
        });

        // Our Team Section - staggered fade in with rotation
        gsap.fromTo(".our_team .minicards .min_card", {
            opacity: 0,
            rotate: 10,
            y: 50
        }, {
            opacity: 1,
            rotate: 0,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".our_team",
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none none",
                once: true
            }
        });

        // Contact Section - slide up with a slight rotation
        gsap.fromTo(".contact", {
            opacity: 0,
            y: 100,
            rotate: 5
        }, {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".contact",
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play none none none",
                once: true
            }
        });
    }
});
