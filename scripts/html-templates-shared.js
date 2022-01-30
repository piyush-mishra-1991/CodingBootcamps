
// Uses HTML templates defined above to inject in HTML code of document.

// HEADER Section:
const templateCodeHeader = `
            <div>
                <div class="logo"><a href="index.html">Raaga</a></div>
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
const headerElement = document.getElementsByTagName('header');
if (headerElement) headerElement[0].innerHTML += templateCodeHeader;

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
const footerElement = document.getElementsByTagName('footer');
if (footerElement) footerElement[0].innerHTML += templateCodeFooter;

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

const plybarModalElement = document.getElementById('play-modal-container');
if(plybarModalElement) plybarModalElement.innerHTML += templateCodePlayBarModal;