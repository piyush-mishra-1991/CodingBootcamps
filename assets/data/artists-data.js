// Contains data for Artists, their songs, related similar artist and songs.
const artistsJSONdata = [
    {
        artistId: 1,
        name: 'Randee Herrero',
        imgUrl: 'https://images.pexels.com/photos/5650903/pexels-photo-5650903.jpeg?auto=compress&cs=tinysrgb&h=350',
        numFollowers: 456,
        numTracks: 123,
        numAlbums: 321,
        shortDescription: 'British Singer',
        longDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        songs: [
            {
                songName: 'Street Fighter',
                albumName: 'Wolfsburg',
                duration: '04:40',
                imgUrl: 'https://images.pexels.com/photos/5650903/pexels-photo-5650903.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Hero%20Immortal_0.mp3',
            },
            {
                songName: 'Drowning Mona',
                albumName: 'Return',
                duration: '01:30',
                imgUrl: 'https://images.pexels.com/photos/5934347/pexels-photo-5934347.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Winds%20Of%20Stories.ogg',
            },
            {
                songName: 'Superstar',
                albumName: 'Bees',
                duration: '03:47',
                imgUrl: 'https://images.pexels.com/photos/6892900/pexels-photo-6892900.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/battleThemeA.mp3',
            },
            {
                songName: 'Clueless',
                albumName: 'Chocolate Factory',
                duration: '02:13',
                imgUrl: 'https://images.pexels.com/photos/7090876/pexels-photo-7090876.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/song18_0.mp3',
            },
            {
                songName: 'Astronaut Farmer',
                albumName: 'Lady Dragon',
                duration: '03:09',
                imgUrl: 'https://images.pexels.com/photos/4545333/pexels-photo-4545333.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Acci%C3%B3n%20%28Merodeador%20Nocturno%29.ogg',
            },
            {
                songName: 'Dons Plum',
                albumName: 'Dons Plum',
                duration: '02:24',
                imgUrl: 'https://images.pexels.com/photos/3984827/pexels-photo-3984827.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Woodland%20Fantasy_0.mp3',
            },
            {
                songName: 'Five',
                albumName: 'Romancing the Stone',
                duration: '05:01',
                imgUrl: 'https://images.pexels.com/photos/4593050/pexels-photo-4593050.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Rise%20of%20spirit.mp3',
            },
            {
                songName: 'Thieves',
                albumName: 'A Christmas Kiss',
                duration: '02:09',
                imgUrl: 'https://images.pexels.com/photos/4722551/pexels-photo-4722551.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Acci%C3%B3n%20%28Merodeador%20Nocturno%29.ogg',
            },
            {
                songName: 'Raid',
                albumName: 'Fly Away',
                duration: '03:54',
                imgUrl: 'https://images.pexels.com/photos/5767307/pexels-photo-5767307.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/%D0%BC%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F%20%D1%82%D0%B5%D0%BC%D0%B0.mp3',
            },
            {
                songName: 'Jaws',
                albumName: 'Ginger & Rosa',
                duration: '03:37',
                imgUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/menuloopsid.ogg',
            },
            {
                songName: 'Princess',
                albumName: 'Black Moon',
                duration: '02:59',
                imgUrl: 'https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/awake10_megaWall.mp3',
            },
            {
                songName: 'Montana',
                albumName: 'Allegheny Uprising',
                duration: '04:15',
                imgUrl: 'https://images.pexels.com/photos/1916818/pexels-photo-1916818.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/clickclack_0.ogg',
            },
            {
                songName: 'Divorce',
                albumName: 'Thunderbirds',
                duration: '03:56',
                imgUrl: 'https://images.pexels.com/photos/9008837/pexels-photo-9008837.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Next%20to%20You.mp3',
            },
            {
                songName: 'Thieves',
                albumName: 'Colorado Avenue',
                duration: '04:34',
                imgUrl: 'https://images.pexels.com/photos/1460037/pexels-photo-1460037.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Acci%C3%B3n%20%28Merodeador%20Nocturno%29.ogg',
            },
            {
                songName: 'Thieves',
                albumName: 'Romancing the Stone',
                duration: '03:56',
                imgUrl: 'https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/clickclack_0.ogg',
            },
            {
                songName: 'Return',
                albumName: 'Chocolate Factory',
                duration: '02:45',
                imgUrl: 'https://images.pexels.com/photos/1808704/pexels-photo-1808704.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/menuloopsid.ogg',
            },
            {
                songName: 'Raid',
                albumName: 'A Christmas Kiss',
                duration: '04:15',
                imgUrl: 'https://images.pexels.com/photos/325688/pexels-photo-325688.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Uncatchable.mp3',
            },
            {
                songName: 'Superstar',
                albumName: 'A Christmas Kiss',
                duration: '03:43',
                imgUrl: 'https://images.pexels.com/photos/236149/pexels-photo-236149.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/clickclack_0.ogg',
            },
        ],
        similarArtists: [
            {
                name: 'Pamela Baish',
                artistId: 2,
                numFollowers: 678,
                imgUrl: 'https://images.pexels.com/photos/4593050/pexels-photo-4593050.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Lowrance Wong',
                artistId: 2,
                numFollowers: 985,
                imgUrl: 'https://images.pexels.com/photos/4722551/pexels-photo-4722551.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Rutledge Huke',
                artistId: 2,
                numFollowers: 345,
                imgUrl: 'https://images.pexels.com/photos/5767307/pexels-photo-5767307.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Tully Sothern',
                artistId: 2,
                numFollowers: 234,
                imgUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Junette Ingold',
                artistId: 2,
                numFollowers: 23,
                imgUrl: 'https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Adara Madelin',
                artistId: 2,
                numFollowers: 123,
                imgUrl: 'https://images.pexels.com/photos/1916818/pexels-photo-1916818.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Jens Hayle',
                artistId: 2,
                numFollowers: 321,
                imgUrl: 'https://images.pexels.com/photos/9008837/pexels-photo-9008837.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Etan Lepard',
                artistId: 2,
                numFollowers: 23,
                imgUrl: 'https://images.pexels.com/photos/1460037/pexels-photo-1460037.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Rowe Sibly',
                artistId: 2,
                numFollowers: 123,
                imgUrl: 'https://images.pexels.com/photos/1808704/pexels-photo-1808704.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Matty Gumm',
                artistId: 2,
                numFollowers: 765,
                imgUrl: 'https://images.pexels.com/photos/325688/pexels-photo-325688.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
        ],
        similarSongs: [
            {
                songName: 'Bees',
                songAlbum: 'Chocolate Factory',
                imgUrl: 'https://images.pexels.com/photos/5767307/pexels-photo-5767307.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/clickclack_0.ogg',
            },
            {
                songName: 'Thieves',
                songAlbum: 'Astronaut Farmer',
                imgUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/menuloopsid.ogg',
            },
            {
                songName: 'Five',
                songAlbum: 'A Christmas Kiss',
                imgUrl: 'https://images.pexels.com/photos/1916818/pexels-photo-1916818.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Acci%C3%B3n%20%28Merodeador%20Nocturno%29.ogg',
            },
            {
                songName: 'Lancelot',
                songAlbum: 'Ginger & Rosa',
                imgUrl: 'https://images.pexels.com/photos/9008837/pexels-photo-9008837.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/clickclack_0.ogg',
            },
            {
                songName: 'Divorce',
                songAlbum: 'Allegheny Uprising',
                imgUrl: 'https://images.pexels.com/photos/1460037/pexels-photo-1460037.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/menuloopsid.ogg',
            },
            {
                songName: 'Princess',
                songAlbum: 'Turn It Up',
                imgUrl: 'https://images.pexels.com/photos/1808704/pexels-photo-1808704.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Acci%C3%B3n%20%28Merodeador%20Nocturno%29.ogg',
            },
            {
                songName: 'Jaws',
                songAlbum: 'Colorado Avenue',
                imgUrl: 'https://images.pexels.com/photos/325688/pexels-photo-325688.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/clickclack_0.ogg',
            },
            {
                songName: 'Client',
                songAlbum: 'Romancing the Stone',
                imgUrl: 'https://images.pexels.com/photos/236149/pexels-photo-236149.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/menuloopsid.ogg',
            },
            {
                songName: 'Return',
                songAlbum: 'Street Fighter',
                imgUrl: 'https://images.pexels.com/photos/5650903/pexels-photo-5650903.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Acci%C3%B3n%20%28Merodeador%20Nocturno%29.ogg',
            },
            {
                songName: 'Divorce',
                songAlbum: 'Black Moon',
                imgUrl: 'https://images.pexels.com/photos/5934347/pexels-photo-5934347.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/clickclack_0.ogg',
            },
            {
                songName: 'Thunderbirds',
                songAlbum: 'Romancing the Stone',
                imgUrl: 'https://images.pexels.com/photos/6892900/pexels-photo-6892900.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/menuloopsid.ogg',
            },
            {
                songName: 'Bees',
                songAlbum: 'Astronaut Farmer',
                imgUrl: 'https://images.pexels.com/photos/7090876/pexels-photo-7090876.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Acci%C3%B3n%20%28Merodeador%20Nocturno%29.ogg',
            },
        ],
    },

    {
        artistId: 2,
        name: 'Goldi McLauchlin',
        imgUrl: 'https://images.pexels.com/photos/4593050/pexels-photo-4593050.jpeg?auto=compress&cs=tinysrgb&h=350',
        numFollowers: 769,
        numTracks: 34,
        numAlbums: 78,
        shortDescription: 'Swedish Singer',
        longDescription:
            'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! Now fax quiz Jack! my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig,',
        songs: [
            {
                songName: 'Jaws',
                albumName: 'Ginger & Rosa',
                duration: '03:37',
                imgUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/menuloopsid.ogg',
            },
            {
                songName: 'Princess',
                albumName: 'Black Moon',
                duration: '02:59',
                imgUrl: 'https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/awake10_megaWall.mp3',
            },
            {
                songName: 'Montana',
                albumName: 'Allegheny Uprising',
                duration: '04:15',
                imgUrl: 'https://images.pexels.com/photos/1916818/pexels-photo-1916818.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/clickclack_0.ogg',
            },
            {
                songName: 'Five',
                albumName: 'Romancing the Stone',
                duration: '05:01',
                imgUrl: 'https://images.pexels.com/photos/4593050/pexels-photo-4593050.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Rise%20of%20spirit.mp3',
            },
            {
                songName: 'Street Fighter',
                albumName: 'Wolfsburg',
                duration: '04:40',
                imgUrl: 'https://images.pexels.com/photos/5650903/pexels-photo-5650903.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Hero%20Immortal_0.mp3',
            },
            {
                songName: 'Drowning Mona',
                albumName: 'Return',
                duration: '01:30',
                imgUrl: 'https://images.pexels.com/photos/5934347/pexels-photo-5934347.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Winds%20Of%20Stories.ogg',
            },
            {
                songName: 'Superstar',
                albumName: 'Bees',
                duration: '03:47',
                imgUrl: 'https://images.pexels.com/photos/6892900/pexels-photo-6892900.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/battleThemeA.mp3',
            },
            {
                songName: 'Thieves',
                albumName: 'A Christmas Kiss',
                duration: '02:09',
                imgUrl: 'https://images.pexels.com/photos/4722551/pexels-photo-4722551.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Acci%C3%B3n%20%28Merodeador%20Nocturno%29.ogg',
            },
            {
                songName: 'Raid',
                albumName: 'Fly Away',
                duration: '03:54',
                imgUrl: 'https://images.pexels.com/photos/5767307/pexels-photo-5767307.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/%D0%BC%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F%20%D1%82%D0%B5%D0%BC%D0%B0.mp3',
            },
            {
                songName: 'Return',
                albumName: 'Chocolate Factory',
                duration: '02:45',
                imgUrl: 'https://images.pexels.com/photos/1808704/pexels-photo-1808704.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/menuloopsid.ogg',
            },
            {
                songName: 'Raid',
                albumName: 'A Christmas Kiss',
                duration: '04:15',
                imgUrl: 'https://images.pexels.com/photos/325688/pexels-photo-325688.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Uncatchable.mp3',
            },
            {
                songName: 'Clueless',
                albumName: 'Chocolate Factory',
                duration: '02:13',
                imgUrl: 'https://images.pexels.com/photos/7090876/pexels-photo-7090876.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/song18_0.mp3',
            },
            {
                songName: 'Astronaut Farmer',
                albumName: 'Lady Dragon',
                duration: '03:09',
                imgUrl: 'https://images.pexels.com/photos/4545333/pexels-photo-4545333.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Acci%C3%B3n%20%28Merodeador%20Nocturno%29.ogg',
            },
            {
                songName: 'Dons Plum',
                albumName: 'Dons Plum',
                duration: '02:24',
                imgUrl: 'https://images.pexels.com/photos/3984827/pexels-photo-3984827.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Woodland%20Fantasy_0.mp3',
            },
            {
                songName: 'Superstar',
                albumName: 'A Christmas Kiss',
                duration: '03:43',
                imgUrl: 'https://images.pexels.com/photos/236149/pexels-photo-236149.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/clickclack_0.ogg',
            },
            {
                songName: 'Divorce',
                albumName: 'Thunderbirds',
                duration: '03:56',
                imgUrl: 'https://images.pexels.com/photos/9008837/pexels-photo-9008837.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Next%20to%20You.mp3',
            },
            {
                songName: 'Thieves',
                albumName: 'Colorado Avenue',
                duration: '04:34',
                imgUrl: 'https://images.pexels.com/photos/1460037/pexels-photo-1460037.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Acci%C3%B3n%20%28Merodeador%20Nocturno%29.ogg',
            },
            {
                songName: 'Thieves',
                albumName: 'Romancing the Stone',
                duration: '03:56',
                imgUrl: 'https://images.pexels.com/photos/949274/pexels-photo-949274.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/clickclack_0.ogg',
            },
        ],
        similarArtists: [
            {
                name: 'Tully Sothern',
                artistId: 1,
                numFollowers: 234,
                imgUrl: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Junette Ingold',
                artistId: 1,
                numFollowers: 23,
                imgUrl: 'https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Adara Madelin',
                artistId: 1,
                numFollowers: 123,
                imgUrl: 'https://images.pexels.com/photos/1916818/pexels-photo-1916818.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Jens Hayle',
                artistId: 1,
                numFollowers: 321,
                imgUrl: 'https://images.pexels.com/photos/9008837/pexels-photo-9008837.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Etan Lepard',
                artistId: 1,
                numFollowers: 23,
                imgUrl: 'https://images.pexels.com/photos/1460037/pexels-photo-1460037.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Pamela Baish',
                artistId: 1,
                numFollowers: 678,
                imgUrl: 'https://images.pexels.com/photos/4593050/pexels-photo-4593050.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Lowrance Wong',
                artistId: 1,
                numFollowers: 985,
                imgUrl: 'https://images.pexels.com/photos/4722551/pexels-photo-4722551.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: 'Rutledge Huke',
                artistId: 1,
                numFollowers: 345,
                imgUrl: 'https://images.pexels.com/photos/5767307/pexels-photo-5767307.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
        ],
        similarSongs: [
            {
                songName: 'Thunderbirds',
                songAlbum: 'Romancing the Stone',
                imgUrl: 'https://images.pexels.com/photos/6892900/pexels-photo-6892900.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/menuloopsid.ogg',
            },
            {
                songName: 'Bees',
                songAlbum: 'Astronaut Farmer',
                imgUrl: 'https://images.pexels.com/photos/7090876/pexels-photo-7090876.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/Acci%C3%B3n%20%28Merodeador%20Nocturno%29.ogg',
            },
            {
                songName: 'Divorce',
                songAlbum: 'Black Moon',
                imgUrl: 'https://images.pexels.com/photos/5934347/pexels-photo-5934347.jpeg?auto=compress&cs=tinysrgb&h=130',
                audioUrl:
                    'https://opengameart.org/sites/default/files/clickclack_0.ogg',
            },
        ],
    },
];

const getArtistDataByID = (artistId) => {
    const foundIndex = artistsJSONdata.findIndex((artistData) => {
        return artistData.artistId == artistId;
    });
    return artistsJSONdata[foundIndex];
};
