// Uses HTML templates defined in 'html-templates.js' to inject in HTML code of document.
const headerElement = document.getElementsByTagName('header');
if(headerElement) headerElement[0].innerHTML += templateCodeHeader;

const footerElement = document.getElementsByTagName('footer');
if (footerElement) footerElement[0].innerHTML += templateCodeFooter;


const carouselElement = document.getElementById('carousel_track');
if (carouselElement) carouselElement.innerHTML += generateCarouselSection();

const plybarModalElement = document.getElementById('play-modal-container');
if(plybarModalElement) plybarModalElement.innerHTML += templateCodePlayBarModal;