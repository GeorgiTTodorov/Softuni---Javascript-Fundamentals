function songs(arr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let numOfSongs = arr[0];
  let convertedArr = [];
  let command = arr[arr.length - 1];

  for (let i = 1; i <= numOfSongs; i++) {
    let el = arr[i].split("_");
    let song = new Song(el[0], el[1], el[2]);
    convertedArr.push(song);
  }

  if (command === "all") {
    convertedArr.forEach((i) => console.log(i.name));
  } else {
    let filtered = convertedArr.filter((i) => i.typeList === command);
    filtered.forEach((i) => console.log(i.name));
  }
}

songs([
  4,
  'favourite_DownTown_3:14',
  'listenLater_Andalouse_3:24',
  'favourite_In To The Night_3:58',
  'favourite_Live It Up_3:48',
  'listenLater'
]);
