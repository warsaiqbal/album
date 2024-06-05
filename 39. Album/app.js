function make_album(artist, albumtitle, tracks) {
    var album = { artist: artist, albumtitle: albumtitle };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album("Taylor swift", "Reputation"));
console.log(make_album("Ariana grande", "Sweetener"));
console.log(make_album("Olivia rodrigo", "Sour"));
