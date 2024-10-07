let slideIndex = 0;

const slides = document.querySelectorAll('.slide');

function showSlides() {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    });

    slides[slideIndex].classList.add("active"); // Show the current slide
}

function changeSlide(n) {
    slideIndex += n; // Change slide index

    // Loop back to the beginning or end
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    showSlides(); // Update the visible slide
}