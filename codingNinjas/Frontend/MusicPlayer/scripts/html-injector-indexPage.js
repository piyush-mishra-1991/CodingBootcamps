// Uses HTML templates defined in 'html-templates.js' to inject in HTML code of document.
const headerElement = document.getElementsByTagName('header');
headerElement[0].innerHTML += templateCodeHeader;

const footerElement = document.getElementsByTagName('footer');
footerElement[0].innerHTML += templateCodeFooter;

const favoritesElement = document.getElementById('favorites-container');
favoritesElement.innerHTML += templateCodeFavorites;

const latestReleasesElement = document.getElementById('latest-releases-container');
latestReleasesElement.innerHTML += templateCodeLatestRelease;