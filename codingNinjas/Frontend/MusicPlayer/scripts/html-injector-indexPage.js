// Uses HTML templates defined in 'html-templates.js' to inject in HTML code of document.
const headerElement = document.getElementsByTagName('header');
if(headerElement) headerElement[0].innerHTML += templateCodeHeader;

const footerElement = document.getElementsByTagName('footer');
if (footerElement) footerElement[0].innerHTML += templateCodeFooter;

const favoritesElement = document.getElementById('favorites-container');
if (favoritesElement) favoritesElement.innerHTML += templateCodeFavorites;

const latestReleasesElement = document.getElementById('latest-releases-container');
if (latestReleasesElement)
    latestReleasesElement.innerHTML += templateCodeLatestRelease;

const popularArtistsElement = document.getElementById('artists-container');
if (popularArtistsElement)
    popularArtistsElement.innerHTML += templateCodePopularArtists;

const genresElement = document.getElementById('genres-container');
if (genresElement) genresElement.innerHTML += templateCodeGenres;

const radioStations = document.getElementById('radios-container');
if (radioStations) radioStations.innerHTML += templateRadioStations;

const playlistList = document.getElementById('playlist-songs');
if (playlistList) playlistList.innerHTML += templatePlaylistData;