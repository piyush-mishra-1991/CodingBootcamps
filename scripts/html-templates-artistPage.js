// PLAYLIST Section
const generatePlaylistList = () => {
    let playlistHTML = '';
    sharedData.playlistData.forEach( (playlistItem, index) => {
        playlistHTML += `<li class="playlist-li-in-container">
                            <div class="playlist-item item-with-bg playbar-item" data-song-url=${playlistItem.audioUrl}>
                                <div class="left-half">
                                    <div class="text-subtitle">${(index+1).toString().padStart(2, '0')}</div>
                                    <div class="play-icon-overlay">
                                        <img class="playlist-imgcontainer playbar-img" src=${playlistItem.imgUrl}/>
                                    </div>
                                    <div>
                                        <div class="text-title playbar-title">${playlistItem.songName}</div>
                                        <div class="text-subtitle playbar-subtitle">
                                            ${playlistItem.artistName}
                                        </div>
                                    </div>
                                </div>
                                <div class="right-half">
                                    <i class="fas fa-ellipsis-h hoverable-icon"></i>
                                </div>
                            </div>
                        </li>`;
    });
    return playlistHTML;
}

const templateCodePlaylistData = `
    ${generatePlaylistList()}
`;

// RELATED ARTISTS Section:
const generateRelatedArtistsList = (artistId) => {
    let relatedArtistsHTML = '';
    const artistData = getArtistDataByID(artistId);
    artistData.similarArtists.forEach((similarArtist, index) => {
        relatedArtistsHTML += `
            <li class="playlist-li-in-container">
                <div class="playlist-item item-with-bg opens-artist" data-artist-id=${similarArtist.artistId}>
                    <div class="left-half">
                        <div class="text-subtitle">${(index+1).toString().padStart(2, '0')}</div>
                        <img
                            class="playlist-imgcontainer"
                            src=${similarArtist.imgUrl}
                        />
                        <div>
                            <div class="text-title">${similarArtist.name}</div>
                            <div class="text-subtitle">${similarArtist.numFollowers} followers</div>
                        </div>
                    </div>
                    <div class="right-half">
                        <i class="fas fa-ellipsis-h hoverable-icon"></i>
                    </div>
                </div>
            </li>
        `;
    });
    return relatedArtistsHTML;
};

// Related Songs for an artist, Section
const generateRelatedSongsList = (artistId) => {
    let relatedSongsHTML = '';
    const artistData = getArtistDataByID(artistId);
    artistData.similarSongs.forEach((similarSong, index) => {
        relatedSongsHTML += `
            <li class="playlist-li-in-container">
                <div class="playlist-item item-with-bg playbar-item" data-song-url=${similarSong.audioUrl}>
                    <div class="left-half">
                        <div class="text-subtitle">${(index+1).toString().padStart(2, '0')}</div>
                        <div class="play-icon-overlay">
                            <img
                                class="playlist-imgcontainer playbar-img"
                                src=${similarSong.imgUrl}
                            />
                        </div>
                        <div>
                            <div class="text-title playbar-title">${similarSong.songName}</div>
                            <div class="text-subtitle playbar-subtitle">
                                ${similarSong.songAlbum}
                            </div>
                        </div>
                    </div>
                    <div class="right-half">
                        <i class="fas fa-ellipsis-h hoverable-icon"></i>
                    </div>
                </div>
            </li>
        `;
    });
    return relatedSongsHTML;
};

// Artist's (own) SONG List Section:
const generateArtistSongsList = (artistId) => {
    let artistSongsHTML = '';
    const artistData = getArtistDataByID(artistId);
    artistData.songs.forEach((song, index) => {
        artistSongsHTML += `
                    <li class="playlist-li-in-container">
                        <div class="playlist-item item-with-bg playbar-item" data-song-url=${song.audioUrl}>
                            <div class="left-half">
                                <div class="text-subtitle">${(index + 1).toString().padStart(2, '0')}</div>
                                <div class="play-icon-overlay">
                                    <img
                                        class="playlist-imgcontainer playbar-img"
                                        src="https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg"
                                    />
                                </div>
                                <div>
                                    <div class="text-title playbar-title">${song.songName}</div>
                                    <div class="text-subtitle playbar-subtitle">${song.albumName}</div>
                                </div>
                            </div>
                            <div class="right-half">
                                <i class="fas fa-heart hoverable-icon"></i>
                                <i class="fas fa-ellipsis-h hoverable-icon"></i>
                            </div>
                        </div>
                    </li>
        `;
    });
    return artistSongsHTML;
};

// Artist's Cover Section:
const generateArtistCoverSection = (artistId) => {
    
    const artistData = getArtistDataByID(artistId);
    artistCoverHTML = `
                    <div class="artist-imgcontainer">
                    <img
                        src="${artistData.imgUrl}"
                    />
                    </div>
                    <div class="artist-textcontent-container flex-col">
                        <div>
                            <div class="flex-row">
                                <div>
                                    <div class="container-heading">${artistData.name}</div>
                                    <div class="text-subtitle">${artistData.shortDescription}</div>
                                </div>
                                <div class="text-subtitle">
                                    <strong>${artistData.numFollowers}</strong> Followers
                                </div>
                            </div>
                            <div class="text-subtitle">
                                ${artistData.longDescription}
                            </div>
                        </div>
                        <div>
                            <div class="flex-row buttons">
                                <a href="" class="link">Play All</a>
                                <a href="" class="link">Follow</a>
                            </div>
                            <div class="text-subtitle">
                                <strong>${artistData.numTracks}</strong> Tracks |
                                <strong>${artistData.numAlbums}</strong> Albums
                            </div>
                        </div>
                    </div>
        `;
    return artistCoverHTML;
}