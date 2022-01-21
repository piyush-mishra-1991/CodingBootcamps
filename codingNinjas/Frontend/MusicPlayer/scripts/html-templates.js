// HEADER Section:
const templateCodeHeader = `
            <div>
                <div class="logo">Raaga</div>
                <div class="search-bar">
                    <input
                        type="text"
                        size="15"
                        placeholder="Search song, artist etc."
                    />
                    <button><i class="fas fa-search"></i></button>
                </div>
                <nav>
                    <!-- Screen Reader friendly Hamburger menu button for mobile view-->
                    <button
                        class="nav-toggle-mobile"
                        aria-controls="nav-list"
                        aria-expanded="false"
                    >
                        <span class="screen-reader-only">Menu</span>
                    </button>
                    <ul id="nav-list" class="nav-list" data-visibility="false">
                        <li><a class="link" href="">Mode</a></li>
                        <li><a class="link" href="">Favorites</a></li>
                        <li><a class="link" href="">LogIn</a></li>
                    </ul>
                </nav>
            </div>
`;

// FOOTER Section:
const templateCodeFooter = `
            <div class="share-icons-container">
                <p>Share Raaga on:</p>
                <i class="fab fa-facebook fa-2x share-icon hoverable-icon"></i>
                <i class="fab fa-twitter fa-2x share-icon hoverable-icon"></i>
                <i class="fab fa-instagram fa-2x share-icon hoverable-icon"></i>
            </div>
            <div class="quick-links-container-heading">
                <p>Quick links :</p>
            </div>
            <div class="quick-links-container">
                <ul class="quick-links-list">
                    <span class="quick-link-list-heading">List 1</span>
                    <li class="quick-links-list-item hoverable-icon">List Item 1</li>
                    <li class="quick-links-list-item hoverable-icon">List Item 2</li>
                    <li class="quick-links-list-item hoverable-icon">List Item 3</li>
                </ul>

                <ul class="quick-links-list">
                    <span class="quick-link-list-heading">List 2</span>
                    <li class="quick-links-list-item hoverable-icon">List Item 1</li>
                    <li class="quick-links-list-item hoverable-icon">List Item 2</li>
                    <li class="quick-links-list-item hoverable-icon">List Item 3</li>
                </ul>

                <ul class="quick-links-list">
                    <span class="quick-link-list-heading">List 3</span>
                    <li class="quick-links-list-item hoverable-icon">List Item 1</li>
                    <li class="quick-links-list-item hoverable-icon">List Item 2</li>
                    <li class="quick-links-list-item hoverable-icon">List Item 3</li>
                </ul>
            </div>
`;

// FAVORITES Section:
const generatefavoriteSongsList = () => {
    let favoriteSongsListHTML = '';
    sharedData.favoritesData.songs.forEach(favSong => {
        favoriteSongsListHTML +=`<li>
                                    <div class="favorites-item item-with-bg">
                                        <img
                                            class="favorite-item-img"
                                            src=${favSong.imgUrl}
                                        />
                                        <p class="favorite-item-text">${favSong.songName}</p>
                                    </div>
                                </li>`;
    });
    return favoriteSongsListHTML;
};

const generatefavoriteArtistsList = () => {
    let favoriteArtistsListHTML = '';
    sharedData.favoritesData.artists.forEach(favArtist => {
        favoriteArtistsListHTML += `<li>
                                        <div class="favorites-item item-with-bg">
                                            <img
                                                class="favorite-item-img"
                                                src=${favArtist.imgUrl}
                                            />
                                            <p class="favorite-item-text">${favArtist.artistName}</p>
                                        </div>
                                    </li>`;
    });
    return favoriteArtistsListHTML;
};

const generatefavoriteGenresList = () => {
    let favoriteGenresListHTML = '';
    sharedData.favoritesData.genres.forEach(favGenre => {
        favoriteGenresListHTML += `<li>
                                        <div class="favorites-item item-with-bg">
                                            <img
                                                class="favorite-item-img"
                                                src=${favGenre.imgUrl}
                                            />
                                            <p class="favorite-item-text">${favGenre.genreName}</p>
                                        </div>
                                    </li>`;
    });
    return favoriteGenresListHTML;
};

const generatefavoriteRadiosList = () => {
    let favoriteRadiosListHTML = '';
    sharedData.favoritesData.radios.forEach(favRadio => {
        favoriteRadiosListHTML += `<li>
                                        <div class="favorites-item item-with-bg">
                                            <img
                                                class="favorite-item-img"
                                                src=${favRadio.imgUrl}
                                            />
                                            <p class="favorite-item-text">${favRadio.radioName}</p>
                                        </div>
                                    </li>`;
    });
    return favoriteRadiosListHTML;
};

const templateCodeFavorites = `
<div class="container-heading">Favorites</div>
            <div class="container-content">
                <div class="translucent-bg-100 item-with-bg">
                    <div>Songs</div>
                    <ul>
                    ${generatefavoriteSongsList()}
                    </ul>
                </div>

                <div class="translucent-bg-100 item-with-bg">
                    <div class="favourite-item-heading">Artists</div>
                    <ul class="favorite-list">
                    ${generatefavoriteArtistsList()}
                    </ul>
                </div>

                <div class="translucent-bg-100 item-with-bg">
                    <div class="favourite-item-heading">Genres</div>
                    <ul class="favorite-list">
                        ${generatefavoriteGenresList()}
                    </ul>
                </div>

                <div class="translucent-bg-100 item-with-bg">
                    <div class="favourite-item-heading">Radios</div>
                    <ul class="favorite-list">
                        ${generatefavoriteRadiosList()}
                    </ul>
                </div>
            </div>
`;

// LATEST-RELEASES Items:
const generateLatestReleasesList = () => {
    let latestReleasesListHTML = '';
    sharedData.latestReleasesData.forEach(latestRelease => {
        latestReleasesListHTML += ` <li>
                                        <div class="latest-release-item item-with-bg">
                                            <img
                                                class="latest-release-imgcontainer"
                                                src=${latestRelease.imgUrl}
                                            />
                                            <div class="latest-release-textcontainer">
                                                <div class="top-line"><i class="fas fa-ellipsis-h hoverable-icon"></i></div>
                                                <div class="mid-line"><div class="text-title">${latestRelease.songName}</div> <div class="num-text">${latestRelease.length}</div></div>
                                                <div class="bottom-line"><p class="text-subtitle">${latestRelease.releaseDate}</p></div>
                                            </div>
                                        </div>
                                    </li>`;
    });
    return latestReleasesListHTML;
};

const templateCodeLatestRelease = `
            <div class="container-heading">Latest Releases</div>
            <div class="container-content translucent-bg-100  item-with-bg">
                <ul class="list-in-container">
                    ${generateLatestReleasesList()}
                </ul>
            </div>
`;

// POPULAR-ARTISTS Sections:
const generatePopularArtistsList = () => {
    let artistsListHTML = '';
    sharedData.popularArtistsData.forEach(artistData => {
        artistsListHTML += `<li>
                                <div class="popular-artists-item item-with-bg">
                                    <img
                                        class="popular-artist-imgcontainer"
                                        src=${artistData.imgUrl}
                                    />
                                    <div class="text-title">
                                        ${artistData.artistName}
                                    </div>
                                </div>
                            </li>`;
    });
    return artistsListHTML;
};

const templateCodePopularArtists = `
            <div class="container-heading">Popular Artists</div>
            <div class="container-content item-with-bg">
                <ul class="list-in-container">
                    ${generatePopularArtistsList()}
                </ul>
            </div>
`;

// POPULAR GENRES Section:
const generatePopularGenresList = () => {
    let genreListHTML = '';
    sharedData.genresData.forEach(genreData => {
        genreListHTML += `<li>
                                <div class="genre-item item-with-bg">
                                  <img
                                      class="genre-imgcontainer"
                                      src=${genreData.imgUrl}
                                  />
                                  <div class="text-title">
                                      <p>${genreData.genreName}</p>
                                  </div>
                              </div>
                            </li>`;
    });
    return genreListHTML;
};
const templateCodeGenres = `
            <div class="container-heading">Popular Genres</div>
            <div class="container-content item-with-bg">
                <ul class="list-in-container">
                    ${generatePopularGenresList()}
                </ul>
            </div>
`;

// POPULAR-RADIOs Section
const generateRadioList = () => {
    let radioListHTML = "";
    sharedData.radiosData.forEach(radioData => {
        radioListHTML += `  <li>
                                <div class="radio-item item-with-bg">
                                    <img
                                        class="radio-imgcontainer"
                                        src="${radioData.imgUrl}"
                                    />
                                    <div class="text-title">
                                        <p>${radioData.radioName}</p>
                                    </div>
                                </div>
                            </li>`;
    });
    return radioListHTML;
}
const templateCodeRadioStations = `
            <div class="container-heading">Popular Radio Stations</div>
            <div class="container-content item-with-bg">
                <ul class="list-in-container">
                    ${generateRadioList()}
                </ul>
            </div>
`;

// PLAYLIST Section
const generatePlaylistList = () => {
    let playlistHTML = '';
    sharedData.playlistData.forEach( (playlistItem, index) => {
        playlistHTML += `<li class="playlist-li-in-container">
                            <div class="playlist-item item-with-bg" data-song-url=${playlistItem.audioUrl}>
                                <div class="left-half">
                                    <div class="text-subtitle">${(index+1).toString().padStart(2, '0')}</div>
                                    <img
                                        class="playlist-imgcontainer"
                                        src=${playlistItem.imgUrl}
                                    />
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
                <div class="playlist-item item-with-bg">
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
                <div class="playlist-item item-with-bg">
                    <div class="left-half">
                        <div class="text-subtitle">${(index+1).toString().padStart(2, '0')}</div>
                        <img
                            class="playlist-imgcontainer"
                            src=${similarSong.imgUrl}
                        />
                        <div>
                            <div class="text-title">${similarSong.songName}</div>
                            <div class="text-subtitle">
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
                        <div class="playlist-item item-with-bg" data-song-url=${song.audioUrl}>
                            <div class="left-half">
                                <div class="text-subtitle">${(index + 1).toString().padStart(2, '0')}</div>
                                <img
                                    class="playlist-imgcontainer"
                                    src="https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg"
                                />
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

// Carousel Section:
const generateCarouselSection = () =>{
    let carouselHTML = '';
    sharedData.carouselData.forEach(carouselItem => {
        carouselHTML += `
                        <li class="carousel-slide current-slide">
                            <img
                                src=${carouselItem.imgUrl}
                                class="carousel-slide-img"
                            />
                        </li>`;
    });
    return carouselHTML;
}

// Playbar Modal :
const templateCodePlayBarModal = `
            <div id="playbar-loading-container">Loading</div>
            <div id="seek-bar"></div>
            <div id="song-info-img">
                <img
                    src="https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130"
                />
            </div>
            <div id="song-title" class="title-text">Song Name big one</div>
            <div id="song-subtitle" class="subtitle-text">
                Artist Name big one
            </div>
            <div id="progress-text">
                <div id="current-time">00:00</div> &nbsp;|&nbsp;
                <div id="total-time">00:00</div>
            </div>
            <div id="play-controls-section">
                <!-- Play Prev Symbol -->
                <i class="fas fa-backward hoverable-icon"></i>
                <!-- Play Symbol -->
                <i id="btn-play" class="fas fa-play-circle hoverable-icon"></i>
                <audio id="audio-tag" src=""></audio>
                <!-- Pause Symbol -->
                <i id="btn-pause" class="fas fa-pause-circle hoverable-icon"></i>
                <!-- Play Next Symbol -->
                <i class="fas fa-forward hoverable-icon"></i>
                <!-- Stop Symbol -->
                <i id="btn-stop" class="fas fa-stop-circle hoverable-icon"></i>
                <!-- Volume Symbol -->
                <i id="btn-volume" class="fas fa-volume-down hoverable-icon"></i>
                <!-- Volume Mute Symbol -->
                <i id="btn-mute" class="fas fa-volume-mute hoverable-icon"></i>
            </div>`;