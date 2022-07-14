function movies(arr) {
  let movieList = [];

  arr.forEach((element) => {
    if (element.includes("addMovie ")) {
      let movie = element.split("addMovie ");
      movie.shift();
      movieList.push({ name: movie[0] });
    } else if (element.includes("directedBy")) {
      let [name, director] = element.split(" directedBy ");
      movieList.forEach((movie) => {
        if (movie.name === name) {
          movie.director = director;
        }
      });
    } else if (element.includes("onDate")) {
      let [name, date] = element.split(" onDate ");
      movieList.forEach((movie) => {
        if (movie.name === name) {
          movie.date = date;
        }
      });
    }
  });
  movieList.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
