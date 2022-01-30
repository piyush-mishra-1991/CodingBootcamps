// Uses HTML templates defined in 'html-templates.js' to inject in HTML code of document.
const headerElement = document.getElementsByTagName('header');
if(headerElement) headerElement[0].innerHTML += templateCodeHeader;

const footerElement = document.getElementsByTagName('footer');
if (footerElement) footerElement[0].innerHTML += templateCodeFooter;

const plybarModalElement = document.getElementById('play-modal-container');
if(plybarModalElement) plybarModalElement.innerHTML += templateCodePlayBarModal;

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