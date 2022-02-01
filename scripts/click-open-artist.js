/****************************************************************
 * Opens artist page and calls function to populate artist page using artist data.
 * Tries to store artistId clicked in sessionStorage, and then refreshes the page with data of artistId clicked.
 * Data of artist is stored in assets/data/artists-data.js
 * Uses refreshArtistPage() function of html-templates-artistPage.js to repopulate page with data for clicked artistID.
 ****************************************************************/

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
    artistListener.addEventListener('click', setUpForArtistPage);
});
