document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const prevArrow = document.querySelectorAll('.arrow1');
    const nextArrow = document.querySelectorAll('.arrow2');
    let currentSlide = 0;

    // Function to show the current slide and hide others
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'flex' : 'none';
        });
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners for arrows
    nextArrow.forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            e.stopPropagation();
            nextSlide();
        });
    });

    prevArrow.forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            e.stopPropagation();
            prevSlide();
        });
    });

    // Initialize the first slide as visible
    showSlide(currentSlide);
});
document.addEventListener("DOMContentLoaded", function() {
    const servicePannel = document.querySelectorAll('.services');
    const prevArrow1 = document.querySelectorAll('.arrow1_1');
    const nextArrow2 = document.querySelectorAll('.arrow2_2');
    let currentSlides = 0;

    // Function to show the current slide and hide others
    function showSlides(index) {
        servicePannel.forEach((pannel, i) => {
            pannel.style.display = i === index ? 'block' : 'none';
        });
    }

    // Function to go to the next slide
    function nextSlides() {
        currentSlides = (currentSlides + 1) % servicePannel.length;
        showSlides(currentSlides);
    }

    // Function to go to the previous slide
    function prevSlides() {
        currentSlides = (currentSlides - 1 + servicePannel.length) % servicePannel.length;
        showSlides(currentSlides);
    }

    // Event listeners for arrows
    nextArrow2.forEach(arrows => {
        arrows.addEventListener('click', function(e) {
            e.stopPropagation();
            nextSlides();
        });
    });

    prevArrow1.forEach(arrows => {
        arrows.addEventListener('click', function(e) {
            e.stopPropagation();
            prevSlides();
        });
    });

    // Initialize the first slide as visible
    showSlides(currentSlides);
});
// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// function showSlide(index) {
//     slides.forEach(slide => slide.style.display = 'none');
//     slides[index].style.display = 'flex';
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % totalSlides;
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//     showSlide(currentSlide);
// }

// // Initial setup
// showSlide(currentSlide);

// // Touch event handling for mobile
// let startX;
// slides.forEach(slide => {
//     slide.addEventListener('touchstart', e => {
//         startX = e.touches[0].clientX;
//     });

//     slide.addEventListener('touchmove', e => {
//         const touchX = e.touches[0].clientX;
//         if (startX - touchX > 50) {
//             nextSlide();
//         } else if (startX - touchX < -50) {
//             prevSlide();
//         }
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll('.slide');
//     const arrows = document.querySelectorAll('.arrow1, .arrow2');
//     let currentSlideIndex = 0;

//     // Function to animate slide transitions with a smooth fade and scale effect
//     function animateSlideTransition(nextSlideIndex) {
//         const currentSlide = slides[currentSlideIndex];
//         const nextSlide = slides[nextSlideIndex];

//         // Animate current slide out, excluding the footer
//         gsap.to(currentSlide.querySelectorAll(':scope > *:not(.footer)'), {
//             opacity: 0,
//             scale: 0.9,
//             duration: 0.8,
//             ease: "power2.inOut",
//             onComplete: () => currentSlide.style.display = 'none'
//         });

//         // Animate next slide in, excluding the footer
//         nextSlide.style.display = 'flex';
//         gsap.fromTo(nextSlide.querySelectorAll(':scope > *:not(.footer)'), {
//             opacity: 0,
//             scale: 1.1
//         }, {
//             opacity: 1,
//             scale: 1,
//             duration: 1,
//             ease: "power2.out",
//         });

//         currentSlideIndex = nextSlideIndex;
//     }

//     function nextSlide() {
//         const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
//         animateSlideTransition(nextSlideIndex);
//     }

//     function prevSlide() {
//         const prevSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
//         animateSlideTransition(prevSlideIndex);
//     }

//     arrows.forEach(arrow => {
//         arrow.addEventListener('click', function (e) {
//             e.stopPropagation();
//             if (arrow.classList.contains('arrow1')) {
//                 prevSlide();
//             } else {
//                 nextSlide();
//             }
//         });
//     });

//     // Initialize the first slide as visible with a smooth entrance animation, excluding the footer
//     slides.forEach((slide, i) => {
//         if (i === 0) {
//             gsap.fromTo(slide.querySelectorAll(':scope > *:not(.footer)'), {
//                 opacity: 0,
//                 scale: 1.1
//             }, {
//                 opacity: 1,
//                 scale: 1,
//                 duration: 1.2,
//                 ease: "power2.out",
//             });
//         } else {
//             slide.style.display = 'none';
//         }
//     });
// });





// scrolling footer javascipt //
window.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer');
    const content = footer.innerHTML;
    
    // Wrap content in a container
    footer.innerHTML = `<div class="scroll-content">${content}</div>`;
    
});
window.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('#footer01');
    const content = footer.innerHTML;
    
    // Wrap content in a container
    footer.innerHTML = `<div class="scroll-content">${content}</div>`;
    
});
window.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('#footer03');
    const content = footer.innerHTML;
    
    // Wrap content in a container
    footer.innerHTML = `<div class="scroll-content">${content}</div>`;
    
});


// email button javascript //
document.querySelector('.mail_btn').addEventListener('click', function() {
    const clientEmail = 'vcs@gmail.com'; // Replace with the client's email address
    const subject = encodeURIComponent('Subject of the email'); // Optional: Replace with your desired subject
    const body = encodeURIComponent('Body of the email'); // Optional: Replace with your desired email body content

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${clientEmail}&su=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  });

document.querySelector('.contact_deatils img').addEventListener('click',function(){
    const whatsApp =`https://api.whatsapp.com/send?phone=+918810518347&text=%20Hi%20VCS%20Consulting%20Services%20Team,%20I%20am%20interested%20to%20know%20more%20about%20your%20services.`;
    window.location.href=whatsApp;
});
document.querySelector('.first').addEventListener('click',function(){
    const whatsApp =`https://api.whatsapp.com/send?phone=+918810518347&text=%20Hi%20VCS%20Consulting%20Services%20Team,%20I%20am%20interested%20to%20know%20more%20about%20your%20services.`;
    window.location.href=whatsApp;
});
document.querySelector('#tel').addEventListener('click',function(){
    const whatsApp =`https://api.whatsapp.com/send?phone=+918810518347&text=%20Hi%20VCS%20Consulting%20Services%20Team,%20I%20am%20interested%20to%20know%20more%20about%20your%20services.`;
    window.location.href=whatsApp;
});

  function toggleMenu() {
    const sideBar = document.querySelector('#sidebar');
    sideBar.style.display = "flex";
    
}

  function closeMenu(){
    const closeBtn =document.querySelector('#closebtn');
    const sideBar = document.querySelector('#sidebar');
    sideBar.style.display = "none";
    

  }

// gsap.from(".info h1,.info p,.info button",{
//     y:30,
//     opacity:0,
//     delay:0.2,
//     duration:1.5,
//     // stagger:0.2
    
// });
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.swiping');
    const prevArrow = document.querySelectorAll('.arrow1__1');
    const nextArrow = document.querySelectorAll('.arrow2__2');
    let currentSlide = 0;

    // Function to show the current slide and hide others
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'flex' : 'none';
        });
    }

    // Function to go to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners for arrows
    nextArrow.forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            e.stopPropagation();
            nextSlide();
        });
    });

    prevArrow.forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            e.stopPropagation();
            prevSlide();
        });
    });

    // Initialize the first slide as visible
    showSlide(currentSlide);
});





