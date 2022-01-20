// Contains data for Artists, their songs, related similar artist and songs.
const artistsJSONdata = [
    {
        artistId: 1,
        name: 'Sonu-Nigam',
        imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
        numFollowers: 456,
        numTracks: 123,
        numAlbums: 321,
        shortDescription: 'Indian Singer',
        longDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        songs: [
            {
                songName: 'A Song Name',
                albumName: 'Album Name',
                duration: '04:40',
                imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                songName: 'A 2nd Song Name',
                albumName: 'Album Name',
                duration: '04:40',
                imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                songName: 'A 3rd Song Name',
                albumName: 'Album Name',
                duration: '04:40',
                imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
        ],
        similarArtists: [
            {
                name: 'Artist Name',
                numFollowers: 678,
                imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: '2nd Artist Name',
                numFollowers: 985,
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                name: 'Artist Name',
                numFollowers: 678,
                imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: '2nd Artist Name',
                numFollowers: 985,
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                name: 'Artist Name',
                numFollowers: 678,
                imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: '2nd Artist Name',
                numFollowers: 985,
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                name: 'Artist Name',
                numFollowers: 678,
                imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: '2nd Artist Name',
                numFollowers: 985,
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                name: 'Artist Name',
                numFollowers: 678,
                imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: '2nd Artist Name',
                numFollowers: 985,
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            }
        ],
        similarSongs: [
            {
                songName: 'A Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                songName: 'A 2nd Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                songName: 'A Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                songName: 'A 2nd Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                songName: 'A Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                songName: 'A 2nd Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                songName: 'A Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                songName: 'A 2nd Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                songName: 'A Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                songName: 'A 2nd Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                songName: 'A Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                songName: 'A 2nd Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
        ],
    },

    {
        artistId: 2,
        name: 'Nigam-Sonu',
        imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
        numFollowers: 456,
        numTracks: 123,
        numAlbums: 321,
        shortDescription: 'Indian Singer',
        longDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        songs: [
            {
                songName: 'A Song Name',
                albumName: 'Album Name',
                duration: '04:40',
                imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                songName: 'A 2nd Song Name',
                albumName: 'Album Name',
                duration: '04:40',
                imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                songName: 'A 3rd Song Name',
                albumName: 'Album Name',
                duration: '04:40',
                imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
        ],
        similarArtists: [
            {
                name: 'Artist Name',
                numFollowers: 678,
                imgUrl: 'https://images.pexels.com/photos/5650905/pexels-photo-5650905.jpeg?auto=compress&cs=tinysrgb&h=130',
            },
            {
                name: '2nd Artist Name',
                numFollowers: 985,
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
        ],
        similarSongs: [
            {
                songName: 'A Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
            },
            {
                songName: 'A 2nd Song Name',
                songAlbum: 'Album Name',
                imgUrl: 'https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&h=350',
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
