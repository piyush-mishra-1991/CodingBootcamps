const setUpForArtistPage = e => {
    var elem = e.target.closest('.opens-artist');
    if (elem) {
        const artistId = elem.dataset.artistId;
        window.sessionStorage.setItem('artistIdClicked', artistId);
        refreshArtistPage();
    }
};

// Default artist:
window.sessionStorage.setItem('artistIdClicked', 1);
document.querySelectorAll('.artist-listener')?.forEach(artistListener => {
    artistListener.addEventListener('click',setUpForArtistPage);
});