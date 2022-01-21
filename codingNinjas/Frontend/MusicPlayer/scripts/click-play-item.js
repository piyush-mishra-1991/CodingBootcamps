const setUpForPlaylistItem=(e)=>{
    var elem = e.target.closest('.playlist-item');
    if (elem) {
        const audioSrc = elem.dataset.songUrl;
        const imgSrc = elem.querySelector('.left-half .playlist-imgcontainer').src;
        const title = elem.querySelector('.left-half .playbar-title').innerText;
        const subtitle = elem.querySelector(
            '.left-half .playbar-subtitle'
        ).innerText;
        setAndPlay(imgSrc, audioSrc, title, subtitle);
    }
};

document.querySelector('#playlist-songs')?.addEventListener('click', setUpForPlaylistItem);
document.querySelector('#artist-songs-ul')?.addEventListener('click', setUpForPlaylistItem);