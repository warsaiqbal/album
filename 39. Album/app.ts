function make_album(artist: string, albumtitle: string, tracks?: number) { 
    let album = {artist, albumtitle}
    if (tracks){
        album['tracks'] = tracks
    } 
    return album
}

console.log(make_album("Taylor Swift", "Reputation"));
console.log(make_album("Ariana Grande", "Sweetener"));
console.log(make_album("Olivia Rodrigo", "Sour"));




