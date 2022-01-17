const track = document.querySelector('.carousel_track'); // Unordered list of slides which contains images.
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button-next');
const prevButton = document.querySelector('.carousel_button-prev');

const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const updateArrowBtnVisibility = currentSlide => {
    const targetIndex = slides.findIndex(slide => slide === currentSlide);
    if (targetIndex == slides.length - 1) nextButton.classList.add('is-hidden');
    else if (targetIndex == 0) prevButton.classList.add('is-hidden');
    else {
        nextButton.classList.remove('is-hidden');
        prevButton.classList.remove('is-hidden');
    }
};

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
    updateArrowBtnVisibility(nextSlide);
});
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    console.log(prevSlide);
    moveToSlide(track, currentSlide, prevSlide);
    updateArrowBtnVisibility(prevSlide);
});
