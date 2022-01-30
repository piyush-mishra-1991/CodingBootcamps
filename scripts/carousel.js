// Fetching DOM variables:
const carouselTrack = document.querySelector('.carousel_track');
const carouselSlides = Array.from(carouselTrack.children);
const btnNext = document.querySelector('.carousel_button-next');
const btnPrev = document.querySelector('.carousel_button-prev');

// This is the quantum of distance that every slide will shift, when carousel buttons are pressed.
// GetBoundiingRect also ensures that responsive width is obtained on different screen sizes, and hence
// our shifting of carousel images will be adjusted responsively on basis of current screen size.
const slideLength = carouselSlides[0].getBoundingClientRect().width;

// removing class of 'currentSlide' from all slides except the first:
carouselSlides.forEach(slide => slide.classList.remove('current-slide'));
carouselSlides[0].classList.add('current-slide');

// Setting the horizontal position of each slides initially by laying them out horizontally
// on fixed multiples of slideLength (determined using slideLength * index);
const setSlidePosition = (slide, index) => {
    slide.style.left = slideLength * index + 'px';
};
carouselSlides.forEach(setSlidePosition);

// Utility functions to move slides when clicks on carousel registered:
const moveToSlide = (currentSlide, targetSlide) => {
    carouselTrack.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};
// Updating the visibility of carousel navigation arrows (depending upon whether beginning or end reached).
const updateArrowBtnVisibility = currentSlide => {
    const targetIndex = carouselSlides.findIndex(
        slide => slide === currentSlide
    );

    // If current slide is at end:
    // Else If current slide is at beginning:
    // Else current slide is somewhere between, so both nav-arrow shown
    if (targetIndex == carouselSlides.length - 1)
        btnNext.classList.add('is-hidden');
    else if (targetIndex == 0) 
        btnPrev.classList.add('is-hidden');
    else {
        btnNext.classList.remove('is-hidden');
        btnPrev.classList.remove('is-hidden');
    }
};

// Registering event callbacks to carousel-nav buttons:
btnNext.addEventListener('click', e => {
    const currentSlide = carouselTrack.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(currentSlide, nextSlide);
    updateArrowBtnVisibility(nextSlide);
});
btnPrev.addEventListener('click', e => {
    const currentSlide = carouselTrack.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(currentSlide, prevSlide);
    updateArrowBtnVisibility(prevSlide);
});
