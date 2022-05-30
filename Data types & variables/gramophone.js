function gramophone(bandName, album, song) {

    let durationInSeconds = (album.length * bandName.length) * song.length / 2;

    let rotations = durationInSeconds / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);

}

gramophone('Rammstein', 'Sehnsucht', 'Engel')