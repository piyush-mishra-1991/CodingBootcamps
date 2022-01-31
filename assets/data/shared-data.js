// Contains data for homepage: Popular Artists, Latest releases, Playlists, Radio Stations, Genres, Favorites, and Carousel data
const sharedData = {
    playlistData: [
        {
            songName: 'Street Fighter',
            artistName: 'Birch Mylchreest',
            length: '04:50',
            releaseDate: 'JUL 5, 2014',
            imgUrl: 'https://images.pexels.com/photos/6270136/pexels-photo-6270136.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/Acci%C3%B3n%20%28Merodeador%20Nocturno%29.ogg',
        },
        {
            songName: 'Wolfsburg',
            artistName: 'Randee Herrero',
            length: '06:42',
            releaseDate: 'MAR 9, 2014',
            imgUrl: 'https://images.pexels.com/photos/5650903/pexels-photo-5650903.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/menuloopsid.ogg',
        },
        {
            songName: 'Return',
            artistName: 'Randolf Kingscote',
            length: '05:54',
            releaseDate: 'APR 13, 2017',
            imgUrl: 'https://images.pexels.com/photos/5934347/pexels-photo-5934347.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/clickclack_0.ogg',
        },
        {
            songName: 'Drowning Mona',
            artistName: 'Florie Stoffler',
            length: '06:58',
            releaseDate: 'DEC 8, 2011',
            imgUrl: 'https://images.pexels.com/photos/6892900/pexels-photo-6892900.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/Hero%20Immortal_0.mp3',
        },
        {
            songName: 'Clueless',
            artistName: 'Sigismundo Ship',
            length: '01:08',
            releaseDate: 'NOV 3, 1987',
            imgUrl: 'https://images.pexels.com/photos/7090876/pexels-photo-7090876.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/Winds%20Of%20Stories.ogg',
        },
        {
            songName: 'Chocolate Factory',
            artistName: 'Damara Addekin',
            length: '06:78',
            releaseDate: 'JAN 5, 2002',
            imgUrl: 'https://images.pexels.com/photos/4545333/pexels-photo-4545333.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/battleThemeA.mp3',
        },
        {
            songName: 'Superstar',
            artistName: 'Tedd MacAllester',
            length: '07:46',
            releaseDate: 'OCT 5, 2007',
            imgUrl: 'https://images.pexels.com/photos/3984827/pexels-photo-3984827.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/song18_0.mp3',
        },
        {
            songName: 'Astronaut Farmer',
            artistName: 'Vida Chandler',
            length: '06:42',
            releaseDate: 'SEPT 9, 2018',
            imgUrl: 'https://images.pexels.com/photos/4593050/pexels-photo-4593050.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/Woodland%20Fantasy_0.mp3',
        },
        {
            songName: 'Bees',
            artistName: 'Jerrold Brewis',
            length: '02:49',
            releaseDate: 'JUN 5, 2008',
            imgUrl: 'https://images.pexels.com/photos/4722551/pexels-photo-4722551.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/Rise%20of%20spirit.mp3',
        },
        {
            songName: 'Lady Dragon',
            artistName: 'Chanda Danton',
            length: '01:15',
            releaseDate: 'JUL 5, 2014',
            imgUrl: 'https://images.pexels.com/photos/5767307/pexels-photo-5767307.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/%D0%BC%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F%20%D1%82%D0%B5%D0%BC%D0%B0.mp3',
        },
        {
            songName: 'Dons Plum',
            artistName: 'Goldi McLauchlin',
            length: '06:42',
            releaseDate: 'JUL 9, 2014',
            imgUrl: 'https://images.pexels.com/photos/534283/pexels-photo-534283.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/awake10_megaWall.mp3',
        },
        {
            songName: 'The Cobbler',
            artistName: 'Pamela Baish',
            length: '06:13',
            releaseDate: 'AUG 5, 2007',
            imgUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/bleeding_out2_2.ogg',
        },
        {
            songName: 'Five',
            artistName: 'Lowrance Wong',
            length: '01:12',
            releaseDate: 'AUG 5, 2017',
            imgUrl: 'https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/Next%20to%20You.mp3',
        },
        {
            songName: 'Client',
            artistName: 'Rutledge Huke',
            length: '04:56',
            releaseDate: 'JUL 9, 2014',
            imgUrl: 'https://images.pexels.com/photos/1916818/pexels-photo-1916818.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/Uncatchable.mp3',
        },
        {
            songName: 'Romancing the Stone',
            artistName: 'Tully Sothern',
            length: '04:16',
            releaseDate: 'SEPT 5, 2014',
            imgUrl: 'https://images.pexels.com/photos/9008837/pexels-photo-9008837.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/clickclack_0.ogg',
        },
    ],
    favoritesData: {
        songs: [
            {
                songName: 'A Christmas Kiss',
                imgUrl: 'https://images.pexels.com/photos/1460037/pexels-photo-1460037.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Hero%20Immortal_0.mp3',
            },
            {
                songName: 'Colorado Avenue',
                imgUrl: 'https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/song18_0.mp3',
            },
            {
                songName: 'Thieves',
                imgUrl: 'https://images.pexels.com/photos/1808704/pexels-photo-1808704.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/battleThemeA.mp3',
            },
            {
                songName: 'Raid',
                imgUrl: 'https://images.pexels.com/photos/325688/pexels-photo-325688.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Woodland%20Fantasy_0.mp3',
            },
            {
                songName: 'Fly Away',
                imgUrl: 'https://images.pexels.com/photos/236149/pexels-photo-236149.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Rise%20of%20spirit.mp3',
            },
            {
                songName: 'Lancelot',
                imgUrl: 'https://images.pexels.com/photos/6270136/pexels-photo-6270136.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/%D0%BC%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F%20%D1%82%D0%B5%D0%BC%D0%B0.mp3',
            },
            {
                songName: 'Jaws',
                imgUrl: 'https://images.pexels.com/photos/5934347/pexels-photo-5934347.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/awake10_megaWall.mp3',
            },
            {
                songName: 'Ginger & Rosa',
                imgUrl: 'https://images.pexels.com/photos/6892900/pexels-photo-6892900.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/bleeding_out2_2.ogg',
            },
        ],
        artists: [
            {
                artistName: 'Gilberta Goulbourne',
                imgUrl: 'https://images.pexels.com/photos/7090876/pexels-photo-7090876.jpeg?auto=compress&cs=tinysrgb&h=130',
                artistId: 1,
            },
            {
                artistName: 'Junette Ingold',
                imgUrl: 'https://images.pexels.com/photos/4545333/pexels-photo-4545333.jpeg?auto=compress&cs=tinysrgb&h=130',
                artistId: 2,
            },
            {
                artistName: 'Adara Madelin',
                imgUrl: 'https://images.pexels.com/photos/3984827/pexels-photo-3984827.jpeg?auto=compress&cs=tinysrgb&h=130',
                artistId: 1,
            },
            {
                artistName: 'Alleyn Legendre',
                imgUrl: 'https://images.pexels.com/photos/4593050/pexels-photo-4593050.jpeg?auto=compress&cs=tinysrgb&h=130',
                artistId: 2,
            },
            {
                artistName: 'Hermione Jacquemy',
                imgUrl: 'https://images.pexels.com/photos/4722551/pexels-photo-4722551.jpeg?auto=compress&cs=tinysrgb&h=130',
                artistId: 1,
            },
            {
                artistName: 'Durant Sirkett',
                imgUrl: 'https://images.pexels.com/photos/5767307/pexels-photo-5767307.jpeg?auto=compress&cs=tinysrgb&h=130',
                artistId: 2,
            },
            {
                artistName: 'Concordia Desesquelle',
                imgUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&h=130',
                artistId: 1,
            },
            {
                artistName: 'Jens Hayle',
                imgUrl: 'https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&h=130',
                artistId: 2,
            },
        ],
        genres: [
            {
                genreName: 'Country',
                imgUrl: 'https://images.pexels.com/photos/34071/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                genreName: 'Jazz',
                imgUrl: 'https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                genreName: 'Electronic',
                imgUrl: 'https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                genreName: 'Hip-Hop',
                imgUrl: 'https://images.pexels.com/photos/7957213/pexels-photo-7957213.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                genreName: 'Electronic',
                imgUrl: 'https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                genreName: 'Blues',
                imgUrl: 'https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                genreName: 'Classical',
                imgUrl: 'https://images.pexels.com/photos/165973/pexels-photo-165973.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                genreName: 'Electronic',
                imgUrl: 'https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&h=130',
            }
        ],
        radios: [
            {
                radioName: 'Radio-PM',
                imgUrl: 'https://images.pexels.com/photos/4480517/pexels-photo-4480517.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                radioName: 'Radio-One',
                imgUrl: 'https://images.pexels.com/photos/4480537/pexels-photo-4480537.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                radioName: 'Radio-City',
                imgUrl: 'https://images.pexels.com/photos/4480521/pexels-photo-4480521.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                radioName: 'Radio-Vibes',
                imgUrl: 'https://images.pexels.com/photos/4245009/pexels-photo-4245009.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                radioName: 'News',
                imgUrl: 'https://images.pexels.com/photos/8677007/pexels-photo-8677007.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                radioName: 'Mirchi',
                imgUrl: 'https://images.pexels.com/photos/157557/pexels-photo-157557.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                radioName: 'Tadka',
                imgUrl: 'https://images.pexels.com/photos/1539/vintage-technology-music-old.jpg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                radioName: 'Free-Radio',
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
    },

    latestReleasesData: [
        {
            songName: 'Ginger & Rosa',
            artistName: 'Morly Peevor',
            length: '06:78',
            releaseDate: 'FEB 5, 2005',
            imgUrl: 'https://images.pexels.com/photos/9853880/pexels-photo-9853880.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/Next%20to%20You.mp3',
        },
        {
            songName: 'Black Moon',
            artistName: 'Barri Kleinstub',
            length: '01:23',
            releaseDate: 'JAN 18, 2017',
            imgUrl: 'https://images.pexels.com/photos/3819706/pexels-photo-3819706.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/Uncatchable.mp3',
        },
        {
            songName: 'Turn It Up',
            artistName: 'King Steele',
            length: '04:34',
            releaseDate: 'JUN 28, 2018',
            imgUrl: 'https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/Hero%20Immortal_0.mp3',
        },
        {
            songName: 'Princess',
            artistName: 'Bernadine Wolfer',
            length: '02:34',
            releaseDate: 'SEP 26, 1998',
            imgUrl: 'https://images.pexels.com/photos/10963990/pexels-photo-10963990.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/Winds%20Of%20Stories.ogg',
        },
        {
            songName: 'Allegheny Uprising',
            artistName: 'Etan Lepard',
            length: '06:78',
            releaseDate: 'AUG 11, 2012',
            imgUrl: 'https://images.pexels.com/photos/10013107/pexels-photo-10013107.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/battleThemeA.mp3',
        },
        {
            songName: 'Montana',
            artistName: 'Cayla Colleran',
            length: '01:23',
            releaseDate: 'NOV 8, 2017',
            imgUrl: 'https://images.pexels.com/photos/6532666/pexels-photo-6532666.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/Acci%C3%B3n%20%28Merodeador%20Nocturno%29.ogg',
        },
        {
            songName: 'Divorce',
            artistName: 'Jaimie Corkel',
            length: '04:34',
            releaseDate: 'NOV 9, 2019',
            imgUrl: 'https://images.pexels.com/photos/1759350/pexels-photo-1759350.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/song18_0.mp3',
        },
        {
            songName: 'Thunderbirds',
            artistName: 'Ashley Ransome',
            length: '02:34',
            releaseDate: 'DEC 15, 2017',
            imgUrl: 'https://images.pexels.com/photos/6532508/pexels-photo-6532508.jpeg?auto=compress&cs=tinysrgb&h=130',
            audioUrl:
                'https://opengameart.org/sites/default/files/Woodland%20Fantasy_0.mp3',
        },
    ],

    popularArtistsData: [
        {
            artistName: 'Berkie Bedson',
            imgUrl: 'https://images.pexels.com/photos/5543287/pexels-photo-5543287.jpeg?auto=compress&cs=tinysrgb&h=130',
            artistId: 1,
        },
        {
            artistName: 'Alberik McIsaac',
            imgUrl: 'https://images.pexels.com/photos/6533544/pexels-photo-6533544.jpeg?auto=compress&cs=tinysrgb&h=130',
            artistId: 2,
        },
        {
            artistName: 'Stanfield Mayoral',
            imgUrl: 'https://images.pexels.com/photos/6270136/pexels-photo-6270136.jpeg?auto=compress&cs=tinysrgb&h=130',
            artistId: 1,
        },
        {
            artistName: 'Alessandro Scading',
            imgUrl: 'https://images.pexels.com/photos/5650903/pexels-photo-5650903.jpeg?auto=compress&cs=tinysrgb&h=130',
            artistId: 2,
        },
        {
            artistName: 'Shela Harrop',
            imgUrl: 'https://images.pexels.com/photos/5934347/pexels-photo-5934347.jpeg?auto=compress&cs=tinysrgb&h=130',
            artistId: 1,
        },
        {
            artistName: 'Lianne Quarrell',
            imgUrl: 'https://images.pexels.com/photos/6892900/pexels-photo-6892900.jpeg?auto=compress&cs=tinysrgb&h=130',
            artistId: 2,
        },
        {
            artistName: 'Saraann Creasey',
            imgUrl: 'https://images.pexels.com/photos/7090876/pexels-photo-7090876.jpeg?auto=compress&cs=tinysrgb&h=130',
            artistId: 1,
        },
        {
            artistName: 'Olivero Gildersleaves',
            imgUrl: 'https://images.pexels.com/photos/4545333/pexels-photo-4545333.jpeg?auto=compress&cs=tinysrgb&h=130',
            artistId: 2,
        },
    ],
    genresData: [
        {
            genreName: 'Country',
            imgUrl: 'https://images.pexels.com/photos/34071/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            genreName: 'Jazz',
            imgUrl: 'https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            genreName: 'Electronic',
            imgUrl: 'https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            genreName: 'Hip-Hop',
            imgUrl: 'https://images.pexels.com/photos/7957213/pexels-photo-7957213.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            genreName: 'Electronic',
            imgUrl: 'https://images.pexels.com/photos/1540319/pexels-photo-1540319.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            genreName: 'Blues',
            imgUrl: 'https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            genreName: 'Classical',
            imgUrl: 'https://images.pexels.com/photos/165973/pexels-photo-165973.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            genreName: 'Electronic',
            imgUrl: 'https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
    ],

    radiosData: [
        {
            radioName: 'Radio-PM',
            imgUrl: 'https://images.pexels.com/photos/4480517/pexels-photo-4480517.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            radioName: 'Radio-One',
            imgUrl: 'https://images.pexels.com/photos/4480537/pexels-photo-4480537.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            radioName: 'Radio-City',
            imgUrl: 'https://images.pexels.com/photos/4480521/pexels-photo-4480521.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            radioName: 'Radio-Vibes',
            imgUrl: 'https://images.pexels.com/photos/4245009/pexels-photo-4245009.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            radioName: 'News',
            imgUrl: 'https://images.pexels.com/photos/8677007/pexels-photo-8677007.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            radioName: 'Mirchi',
            imgUrl: 'https://images.pexels.com/photos/157557/pexels-photo-157557.jpeg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            radioName: 'Tadka',
            imgUrl: 'https://images.pexels.com/photos/1539/vintage-technology-music-old.jpg?auto=compress&cs=tinysrgb&h=130',
        },
        {
            radioName: 'Free-Radio',
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
            imgUrl: 'https://images.pexels.com/photos/5650956/pexels-photo-5650956.jpeg?auto=compress&cs=tinysrgb&h=350',
        },
        {
            imgUrl: 'https://images.pexels.com/photos/3776557/pexels-photo-3776557.jpeg?auto=compress&cs=tinysrgb&h=350',
        },
        {
            imgUrl: 'https://images.pexels.com/photos/3771823/pexels-photo-3771823.jpeg?auto=compress&cs=tinysrgb&h=350',
        },
        {
            imgUrl: 'https://images.pexels.com/photos/3831187/pexels-photo-3831187.jpeg?auto=compress&cs=tinysrgb&h=350',
        },
        {
            imgUrl: 'https://images.pexels.com/photos/3388899/pexels-photo-3388899.jpeg?auto=compress&cs=tinysrgb&h=350',
        },
        {
            imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
        },
    ],
};
