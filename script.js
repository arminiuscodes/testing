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



function toggleMenu() {
    const navContent = document.querySelector('.nav_content');
    navContent.classList.toggle('active');
}

