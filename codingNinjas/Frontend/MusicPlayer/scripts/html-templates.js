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
                <i class="fab fa-facebook fa-2x share-icon"></i>
                <i class="fab fa-twitter fa-2x share-icon"></i>
                <i class="fab fa-instagram fa-2x share-icon"></i>
            </div>
            <div class="quick-links-container-heading">
                <p>Quick links :</p>
            </div>
            <div class="quick-links-container">
                <ul class="quick-links-list">
                    <span class="quick-link-list-heading">List 1</span>
                    <li class="quick-links-list-item">List Item 1</li>
                    <li class="quick-links-list-item">List Item 2</li>
                    <li class="quick-links-list-item">List Item 3</li>
                </ul>

                <ul class="quick-links-list">
                    <span class="quick-link-list-heading">List 2</span>
                    <li class="quick-links-list-item">List Item 1</li>
                    <li class="quick-links-list-item">List Item 2</li>
                    <li class="quick-links-list-item">List Item 3</li>
                </ul>

                <ul class="quick-links-list">
                    <span class="quick-link-list-heading">List 3</span>
                    <li class="quick-links-list-item">List Item 1</li>
                    <li class="quick-links-list-item">List Item 2</li>
                    <li class="quick-links-list-item">List Item 3</li>
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
            <div class="container-content item-with-bg">
                <div class="favorites-sub-container item-with-bg">
                    <div class="favourite-item-heading">Songs</div>
                    <ul class="favorite-list">
                    ${generatefavoriteSongsList()}
                    </ul>
                </div>

                <div class="favorites-sub-container item-with-bg">
                    <div class="favourite-item-heading">Artists</div>
                    <ul class="favorite-list">
                    ${generatefavoriteArtistsList()}
                    </ul>
                </div>

                <div class="favorites-sub-container item-with-bg">
                    <div class="favourite-item-heading">Genres</div>
                    <ul class="favorite-list">
                        ${generatefavoriteGenresList()}
                    </ul>
                </div>

                <div class="favorites-sub-container item-with-bg">
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
                                                <div class="top-line"><i class="fas fa-ellipsis-h"></i></div>
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
            <div class="container-content item-with-bg">
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
const templateRadioStations = `
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
                            <div class="playlist-item item-with-bg">
                                <div class="left-half">
                                    <div class="text-subtitle">${(index+1).toString().padStart(2, '0')}</div>
                                    <img
                                        class="playlist-imgcontainer"
                                        src=${playlistItem.imgUrl}
                                    />
                                    <div>
                                        <div class="text-title">${playlistItem.songName}</div>
                                        <div class="text-subtitle">
                                            ${playlistItem.artistName}
                                        </div>
                                    </div>
                                </div>
                                <div class="right-half">
                                    <i class="fas fa-ellipsis-h"></i>
                                </div>
                            </div>
                        </li>`;
    });
    return playlistHTML;
}

const templatePlaylistData = `
    ${generatePlaylistList().repeat(10)}
`;