// RELATED ARTISTS Section:
const generateRelatedArtistsList = artistId => {
    const ul = document.getElementById('related-artists');
    ul.innerHTML = ''; // Resets
    const template = document.getElementById('temp-related-artists');
    const artistData = getArtistDataByID(artistId);

    artistData.similarArtists.forEach((similarArtist, index) => {
        const cloned = template.content.cloneNode(true);
        cloned.querySelector('.playlist-item.opens-artist').dataset.artistId =
            similarArtist.artistId;
        cloned
            .querySelector('.left-half')
            .querySelector('.text-subtitle').innerHTML = (index + 1)
            .toString()
            .padStart(2, '0');
        cloned.querySelector('.playlist-imgcontainer').src =
            similarArtist.imgUrl;
        cloned.querySelector('.text-title').innerHTML = similarArtist.name;
        cloned.querySelector('.num-followers').innerHTML =
            similarArtist.numFollowers;
        ul.appendChild(cloned);
    });
};;

// Related Songs for an artist, Section
const generateRelatedSongsList = (artistId) => {
    const ul = document.getElementById('related-songs');
    ul.innerHTML = ''; // Resets
    const template = document.getElementById('temp-related-songs');
    const artistData = getArtistDataByID(artistId);

    artistData.similarSongs.forEach((similarSong, index) => {
        const cloned = template.content.cloneNode(true);
        cloned.querySelector('.playlist-item.playbar-item').dataset.songUrl = similarSong.audioUrl;
        cloned.querySelector('.left-half').querySelector('.text-subtitle').innerHTML = (index + 1).toString().padStart(2, '0');
        cloned.querySelector('.playlist-imgcontainer').src = similarSong.imgUrl;
        cloned.querySelector('.text-title.playbar-title').innerHTML = similarSong.songName;
        cloned.querySelector('.playbar-subtitle').innerHTML = similarSong.songAlbum;
        ul.appendChild(cloned);
    });
};

// Artist's (own) SONG List Section:
const generateArtistSongsList = (artistId) => {
    const ul = document.getElementById('artist-songs-ul');
    ul.innerHTML = ''; // Resets
    const template = document.getElementById('temp-artist-songs');
    const artistData = getArtistDataByID(artistId);

    artistData.songs.forEach((song, index) => {
        const cloned = template.content.cloneNode(true);
        cloned.querySelector('.playlist-item.playbar-item').dataset.songUrl = song.audioUrl;
        cloned.querySelector('.left-half').querySelector('.text-subtitle').innerHTML = (index + 1).toString().padStart(2, '0');
        cloned.querySelector('.playlist-imgcontainer').src = song.imgUrl;
        cloned.querySelector('.text-title.playbar-title').innerHTML = song.songName;
        cloned.querySelector('.playbar-subtitle').innerHTML = song.albumName;
        ul.appendChild(cloned);
    });
};

// Artist's Cover Section:
const generateArtistCoverSection = (artistId) => {

    const ul = document.getElementById('artist-cover');
    ul.innerHTML = ''; // Resets
    const template = document.getElementById('temp-artist-cover');
    const artistData = getArtistDataByID(artistId);

    const cloned = template.content.cloneNode(true);
    cloned.querySelector('.artist-imgcontainer img').src = artistData.imgUrl;
    cloned.querySelector('.artist-textcontent-container').querySelector('.container-heading').innerHTML = artistData.name;
    cloned.getElementById('num-followers').innerHTML = artistData.numFollowers;
    cloned.getElementById('num-tracks').innerHTML = artistData.numTracks;
    cloned.getElementById('num-albums').innerHTML = artistData.numAlbums;
    cloned.getElementById('long-description').innerHTML = artistData.longDescription;
    cloned.getElementById('short-description').innerHTML = artistData.shortDescription;
    ul.appendChild(cloned);
}

const refreshArtistPage = () => {
    
    const artistId = window.sessionStorage.getItem('artistIdClicked');
    
    generateRelatedArtistsList(artistId);
    generateRelatedSongsList(artistId);
    generateArtistSongsList(artistId);
    generateArtistCoverSection(artistId);
};

refreshArtistPage();