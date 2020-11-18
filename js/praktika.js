const numberOfFilms = prompt("How many moves did you watch?", "");

const obj = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
const lastMovie = prompt("What was the last movie you watched?", "");
      lastMovieRate = prompt("How do you rate the last movie?", "");
      lastMovie1 = prompt("What was the last movie you watched?", "");
      lasMovieRate1 = prompt("How do you rate the last movie?", "");

obj.movies[lastMovie] = lastMovieRate;
obj.movies[lastMovie1] = lasMovieRate1;

console.log(obj.movies);