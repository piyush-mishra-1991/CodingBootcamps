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

const radioStationsElement = document.getElementById('radios-container');
if (radioStationsElement) radioStationsElement.innerHTML += templateCodeRadioStations;

const playlistListElement = document.getElementById('playlist-songs');
if (playlistListElement) playlistListElement.innerHTML += templateCodePlaylistData;

const refreshArtistPage =()=>{
    const artistId = window.sessionStorage.getItem('artistIdClicked');
    const relatedArtistsElement = document.getElementById('related-artists');
    if (relatedArtistsElement)
        relatedArtistsElement.innerHTML = generateRelatedArtistsList(artistId);
    const relatedSongsElement = document.getElementById('related-songs');
    
    if (relatedSongsElement)    
        relatedSongsElement.innerHTML = generateRelatedSongsList(artistId);

    const artistSongsElement = document.getElementById('artist-songs-ul');
    
    if (artistSongsElement)
        artistSongsElement.innerHTML = generateArtistSongsList(artistId);

    const artistCoverElement = document.getElementById('artist-cover');
    if (artistCoverElement)
        artistCoverElement.innerHTML = generateArtistCoverSection(artistId);
}

refreshArtistPage();

const carouselElement = document.getElementById('carousel_track');
if (carouselElement) carouselElement.innerHTML += generateCarouselSection();

const plybarModalElement = document.getElementById('play-modal-container');
if(plybarModalElement) plybarModalElement.innerHTML += templateCodePlayBarModal;