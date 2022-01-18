// Contains data for homepage: Popular Artists, Latest releases, Playlists, Radio Stations, Genres, Favorites, and Carousel data
const sharedData = {
    playlistData: [
        {
            songName: '1 playlist song',
            artistName: 'playlist song',
            length: '06:78',
            releaseDate: 'JUL 5, 2014',
            imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            songName: '2 playlist song',
            artistName: 'playlist song',
            length: '06:42',
            releaseDate: 'JUL 9, 2014',
            imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
    ],
    /*
    favoritesData: [
        {
            songs: [
                {
                    songName: 'Fav Song 1',
                    imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
                },
                {
                    songName: 'Fav Song 2',
                    imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
                },
            ],
        },
        {
            artists: [
                {
                    artistName: 'Fav Artist 1',
                    imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
                },
                {
                    artistName: 'Fav Artist 2',
                    imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
                },
            ],
        },
        {
            genres: [
                {
                    genreName: 'Fav Genre 1',
                    imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
                },
                {
                    genreName: 'Fav Genre 2',
                    imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
                },
            ],
        },
        {
            radios: [
                {
                    radioName: 'Fav Radio 1',
                    imgUrl: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&h=130',
                },
                {
                    radioName: 'Fav Radio 1',
                    imgUrl: 'https://images.pexels.com/photos/4480527/pexels-photo-4480527.jpeg?auto=compress&cs=tinysrgb&h=130',
                },
            ],
        },
    ],
*/
    favoritesData: {
        songs: [
            {
                songName: 'Fav Song 1',
                imgUrl: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                songName: 'Fav Song 2',
                imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
        ],
        artists: [
            {
                artistName: 'Fav Artist 1',
                imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                artistName: 'Fav Artist 2',
                imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
        ],
        genres: [
            {
                genreName: 'Fav Genre 1',
                imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                genreName: 'Fav Genre 2',
                imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
        ],
        radios: [
            {
                radioName: 'Fav Radio 1',
                imgUrl: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                radioName: 'Fav Radio 1',
                imgUrl: 'https://images.pexels.com/photos/4480527/pexels-photo-4480527.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
        ],
    },

    latestReleasesData: [
        {
            songName: '1 playlist song',
            artistName: 'playlist song',
            length: '06:78',
            releaseDate: 'JUL 5, 2014',
            imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            songName: '2 playlist song',
            artistName: 'playlist song',
            length: '01:23',
            releaseDate: 'JUL 5, 2014',
            imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            songName: '3 playlist song',
            artistName: 'playlist song',
            length: '04:34',
            releaseDate: 'JUL 5, 2014',
            imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            songName: '4 playlist song',
            artistName: 'playlist song',
            length: '02:34',
            releaseDate: 'JUL 5, 2014',
            imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
    ],

    popularArtistsData: [
        {
            artistName: 'Artist 1 Name',
            imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            artistName: 'Artist 2 Name',
            imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
    ],
    genresData: [
        {
            genreName: 'Electronic',
            imgUrl: 'https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            genreName: 'Electronic',
            imgUrl: 'https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
    ],

    radiosData: [
        {
            radioName: 'Radio-PM',
            imgUrl: 'https://images.pexels.com/photos/4480527/pexels-photo-4480527.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            radioName: 'Radio-AM',
            imgUrl: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            radioName: 'Radio-City',
            imgUrl: 'https://images.pexels.com/photos/4480527/pexels-photo-4480527.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            radioName: 'Radio-Vibes',
            imgUrl: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            radioName: 'Radio-AM',
            imgUrl: 'https://images.pexels.com/photos/4480527/pexels-photo-4480527.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
    ],

    carouselData: [
        {
            imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
        },
        {
            imgUrl: 'https://images.pexels.com/photos/5650956/pexels-photo-5650956.jpeg?auto=compress&cs=tinysrgb&h=350',
        },
    ],
};
