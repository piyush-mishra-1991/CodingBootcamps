// HEADER CODE:
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

// FOOTER CODE:
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

// Favorites Section Code
const templateCodeFavorites = `
<div class="container-heading">Favorites</div>
            <div class="container-content item-with-bg">
                <div class="favorites-sub-container item-with-bg">
                    <div class="favourite-item-heading">Songs</div>
                    <ul class="favorite-list">
                        <li>
                            <div class="favorites-item item-with-bg">
                                <img
                                    class="favorite-item-img"
                                    src="https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?cs=srgb&dl=pexels-juan-pablo-serrano-arenas-1246437.jpg&fm=jpg"
                                />
                                <p class="favorite-item-text">Song Name</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="favorites-sub-container item-with-bg">
                    <div class="favourite-item-heading">Artists</div>
                    <ul class="favorite-list">
                        <li>
                            <div class="favorites-item item-with-bg">
                                <img
                                    class="favorite-item-img"
                                    src="https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?cs=srgb&dl=pexels-juan-pablo-serrano-arenas-1246437.jpg&fm=jpg"
                                />
                                <p class="favorite-item-text">Artist Name</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="favorites-sub-container item-with-bg">
                    <div class="favourite-item-heading">Genres</div>
                    <ul class="favorite-list">
                        <li>
                            <div class="favorites-item item-with-bg">
                                <img
                                    class="favorite-item-img"
                                    src="https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?cs=srgb&dl=pexels-juan-pablo-serrano-arenas-1246437.jpg&fm=jpg"
                                />
                                <p class="favorite-item-text">Genre Name</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="favorites-sub-container item-with-bg">
                    <div class="favourite-item-heading">Radios</div>
                    <ul class="favorite-list">
                        <li>
                            <div class="favorites-item item-with-bg">
                                <img
                                    class="favorite-item-img"
                                    src="https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?cs=srgb&dl=pexels-juan-pablo-serrano-arenas-1246437.jpg&fm=jpg"
                                />
                                <p class="favorite-item-text">Radio Name</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
`;

const templateCodeLatestRelease = `
            <div class="container-heading">Latest Releases</div>
            <div class="container-content item-with-bg">
                <ul class="list-in-container">
                    <li>
                        <div class="latest-release-item item-with-bg">
                            <img
                                class="latest-release-imgcontainer"
                                src="https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg"
                            />
                            <div class="latest-release-textcontainer">
                                <div class="top-line"><i class="fas fa-ellipsis-h"></i></div>
                                <div class="mid-line"><div class="text-title">Song Name</div> <div class="num-text">04:57</div></div>
                                <div class="bottom-line"><p class="text-subtitle">JUL 5, 2014</p></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="latest-release-item item-with-bg">
                            <img
                                class="latest-release-imgcontainer"
                                src="https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg"
                            />
                            <div class="latest-release-textcontainer">
                                <div class="top-line"><i class="fas fa-ellipsis-h"></i></div>
                                <div class="mid-line"><div class="text-title">Song Name</div> <div class="num-text">04:57</div></div>
                                <div class="bottom-line"><p class="text-subtitle">JUL 5, 2014</p></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="latest-release-item item-with-bg">
                            <img
                                class="latest-release-imgcontainer"
                                src="https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg"
                            />
                            <div class="latest-release-textcontainer">
                                <div class="top-line"><i class="fas fa-ellipsis-h"></i></div>
                                <div class="mid-line"><div class="text-title">Song Name</div> <div class="num-text">04:57</div></div>
                                <div class="bottom-line"><p class="text-subtitle">JUL 5, 2014</p></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="latest-release-item item-with-bg">
                            <img
                                class="latest-release-imgcontainer"
                                src="https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg"
                            />
                            <div class="latest-release-textcontainer">
                                <div class="top-line"><i class="fas fa-ellipsis-h"></i></div>
                                <div class="mid-line"><div class="text-title">Song Name</div> <div class="num-text">04:57</div></div>
                                <div class="bottom-line"><p class="text-subtitle">JUL 5, 2014</p></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="latest-release-item item-with-bg">
                            <img
                                class="latest-release-imgcontainer"
                                src="https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg"
                            />
                            <div class="latest-release-textcontainer">
                                <div class="top-line"><i class="fas fa-ellipsis-h"></i></div>
                                <div class="mid-line"><div class="text-title">Song Name</div> <div class="num-text">04:57</div></div>
                                <div class="bottom-line"><p class="text-subtitle">JUL 5, 2014</p></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="latest-release-item item-with-bg">
                            <img
                                class="latest-release-imgcontainer"
                                src="https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg"
                            />
                            <div class="latest-release-textcontainer">
                                <div class="top-line"><i class="fas fa-ellipsis-h"></i></div>
                                <div class="mid-line"><div class="text-title">Song Name</div> <div class="num-text">04:57</div></div>
                                <div class="bottom-line"><p class="text-subtitle">JUL 5, 2014</p></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
`;

const templateCodePopularArtists = 
`
            <div class="container-heading">Popular Artists</div>
            <div class="container-content item-with-bg">
                <ul class="list-in-container">
                    <li>
                        <div class="popular-artists-item item-with-bg">
                            <img
                                class="popular-artist-imgcontainer"
                                src="https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg"
                            />
                            <div class="text-title">
                                Artist Name
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="popular-artists-item item-with-bg">
                            <img
                                class="popular-artist-imgcontainer"
                                src="https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg"
                            />
                            <div class="text-title">
                                Artist Name
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="popular-artists-item item-with-bg">
                            <img
                                class="popular-artist-imgcontainer"
                                src="https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg"
                            />
                            <div class="text-title">
                                Artist Name
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="popular-artists-item item-with-bg">
                            <img
                                class="popular-artist-imgcontainer"
                                src="https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg"
                            />
                            <div class="text-title">
                                Artist Name
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="popular-artists-item item-with-bg">
                            <img
                                class="popular-artist-imgcontainer"
                                src="https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg"
                            />
                            <div class="text-title">
                                Artist Name
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="popular-artists-item item-with-bg">
                            <img
                                class="popular-artist-imgcontainer"
                                src="https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg"
                            />
                            <div class="text-title">
                                Artist Name
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
`;

const templateCodeGenres = `
            <div class="container-heading">Popular Genres</div>
            <div class="container-content item-with-bg">
                <ul class="list-in-container">
                    <li>
                        <div class="genre-item item-with-bg">
                            <img
                                class="genre-imgcontainer"
                                src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg"
                            />
                            <div class="text-title">
                                <p>Electronic</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="genre-item item-with-bg">
                            <img
                                class="genre-imgcontainer"
                                src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg"
                            />
                            <div class="text-title">
                                <p>Electronic</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="genre-item item-with-bg">
                            <img
                                class="genre-imgcontainer"
                                src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg"
                            />
                            <div class="text-title">
                                <p>Electronic</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="genre-item item-with-bg">
                            <img
                                class="genre-imgcontainer"
                                src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg"
                            />
                            <div class="text-title">
                                <p>Electronic</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="genre-item item-with-bg">
                            <img
                                class="genre-imgcontainer"
                                src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg"
                            />
                            <div class="text-title">
                                <p>Electronic</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="genre-item item-with-bg">
                            <img
                                class="genre-imgcontainer"
                                src="https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg"
                            />
                            <div class="text-title">
                                <p>Electronic</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
`;