// Uses HTML templates and data in assets/data/sharedData.js to populate index.html page.

// FAVORITES Section:
const generatefavoriteSongsList = () => {
    
    const ul = document.getElementById('ul-fav-songs');
    ul.innerHTML = '';
    const template = document.getElementById('temp-fav-songs');
    
    sharedData.favoritesData.songs.forEach(favSong => {
        const cloned = template.content.cloneNode(true);
        cloned.querySelector('.playbar-item').dataset.songUrl=favSong.audioUrl;
        cloned.querySelector('.util-img.playbar-img').src = favSong.imgUrl;
        cloned.querySelector('.favorite-item-text.playbar-title').innerHTML = favSong.songName;
        ul.appendChild(cloned);
    });
};
generatefavoriteSongsList();

const generatefavoriteArtistsList = () => {
    const ul = document.getElementById('ul-fav-artists');
    ul.innerHTML = '';
    const template = document.getElementById('temp-fav-artists');

    sharedData.favoritesData.artists.forEach(favArtist => {
        const cloned = template.content.cloneNode(true);
        cloned.querySelector('.favorites-item.item-with-bg.opens-artist').dataset.artistId = favArtist.artistId;
        cloned.querySelector('.util-img').src = favArtist.imgUrl;
        cloned.querySelector('.favorite-item-text').innerHTML = favArtist.artistName;
        ul.appendChild(cloned);
    });
};
generatefavoriteArtistsList();

const generatefavoriteGenresList = () => {
    const ul = document.getElementById('ul-fav-genres');
    ul.innerHTML = '';
    const template = document.getElementById('temp-fav-genres');

    sharedData.favoritesData.genres.forEach(favGenre => {
        const cloned = template.content.cloneNode(true);
        cloned.querySelector('.util-img').src = favGenre.imgUrl;
        cloned.querySelector('.favorite-item-text').innerHTML = favGenre.genreName;
        ul.appendChild(cloned);
    });
};
generatefavoriteGenresList();

const generatefavoriteRadiosList = () => {
    const ul = document.getElementById('ul-fav-radios');
    ul.innerHTML = '';
    const template = document.getElementById('temp-fav-radios');

    sharedData.favoritesData.radios.forEach(favRadio => {
        const cloned = template.content.cloneNode(true);
        cloned.querySelector('.util-img').src = favRadio.imgUrl;
        cloned.querySelector('.favorite-item-text').innerHTML = favRadio.radioName;
        ul.appendChild(cloned);
    });
};
generatefavoriteRadiosList();

// LATEST-RELEASES Items:
const generateLatestReleasesList = () => {
    const ul = document.getElementById('ul-latestReleases');
    ul.innerHTML = '';
    const template = document.getElementById('temp-latestReleases');

    sharedData.latestReleasesData.forEach(latestRelease => {
        const cloned = template.content.cloneNode(true);
        cloned.querySelector('.latest-release-item.playbar-item').dataset.songUrl = latestRelease.audioUrl;
        cloned.querySelector('.util-img').src = latestRelease.imgUrl;
        cloned.querySelector('.num-text').innerHTML = latestRelease.length;
        cloned.querySelector('.playbar-title').innerHTML = latestRelease.songName;
        cloned.querySelector('.playbar-subtitle').innerHTML = latestRelease.releaseDate;

        ul.appendChild(cloned);
    });
};

generateLatestReleasesList();

// POPULAR-ARTISTS Sections:
const generatePopularArtistsList = () => {

    const ul = document.getElementById('ul-artists');
    ul.innerHTML = '';
    const template = document.getElementById('temp-artists');

    sharedData.popularArtistsData.forEach(artistData => {
        const cloned = template.content.cloneNode(true);

        cloned.querySelector('.popular-artists-item.opens-artist').dataset.artistId = artistData.artistId;
        cloned.querySelector('.util-img').src = artistData.imgUrl;
        cloned.querySelector('.text-title').innerHTML = artistData.artistName;

        ul.appendChild(cloned);
    });
};
generatePopularArtistsList();

// POPULAR GENRES Section:
const generatePopularGenresList = () => {

    const ul = document.getElementById('ul-genres');
    ul.innerHTML = '';
    const template = document.getElementById('temp-genres');

    sharedData.genresData.forEach(genreData => {
        const cloned = template.content.cloneNode(true);
        
        cloned.querySelector('.util-img').src = genreData.imgUrl;
        cloned.querySelector('.text-title').innerHTML = genreData.genreName;

        ul.appendChild(cloned);
    });
};

generatePopularGenresList();

// POPULAR-RADIOs Section
const generateRadioList = () => {

    const ul = document.getElementById('ul-radios');
    ul.innerHTML = '';
    const template = document.getElementById('temp-radios');

    sharedData.radiosData.forEach(radioData => {
        const cloned = template.content.cloneNode(true);

        cloned.querySelector('.util-img').src = radioData.imgUrl;
        cloned.querySelector('.text-title').innerHTML = radioData.radioName;

        ul.appendChild(cloned);
    });
}

generateRadioList();

// PLAYLIST Section
const generatePlaylistList = () => {

    const ul = document.getElementById('playlist-songs');
    ul.innerHTML = '';
    const template = document.getElementById('temp-playlist-songs');

    sharedData.playlistData.forEach((playlistItem, index) => {

        const cloned = template.content.cloneNode(true);
        
        cloned.querySelector('.playlist-item.playbar-item').dataset.songUrl = playlistItem.audioUrl;
        cloned.querySelector('.left-half').querySelector('.text-subtitle').innerHTML = (index+1).toString().padStart(2, '0');
        cloned.querySelector('.playbar-img').src = playlistItem.imgUrl;
        cloned.querySelector('.text-title.playbar-title').innerHTML = playlistItem.songName;
        cloned.querySelector('.text-subtitle.playbar-subtitle').innerHTML = playlistItem.artistName;

        ul.appendChild(cloned);
    });
}

generatePlaylistList();

// Carousel Section:
const generateCarouselSection = () =>{

    const ul = document.getElementById('carousel_track');
    ul.innerHTML = '';
    const template = document.getElementById('temp-carousel');

    sharedData.carouselData.forEach(carouselItem => {
        const cloned = template.content.cloneNode(true);
        cloned.querySelector('.carousel-slide-img').src = carouselItem.imgUrl;

        ul.appendChild(cloned);
    });
}

generateCarouselSection();