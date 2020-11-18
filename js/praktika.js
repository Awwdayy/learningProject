"use strict";

let numberOfFilms; 
// start(); 

const obj = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilms = +prompt("How many movies did you watch?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies did you watch?", "");
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt("What was the last movie you watched?", "");
        const b = prompt("How do you rate the last movie?", "");

        if (a != null && b != null && a.length != "" && b.length != "" && a.length < 50 && b.length < 50){
            obj.movies[a] = b;
        } else {
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel(){
    if (obj.count < 10 && obj.count >= 0){
        alert("Просмотрено мало фильмов!");
    } else if (obj.count >= 10 && obj.count <= 30){
        alert("Вы классический зритель!");
    } else if (obj.count > 30){
        alert("Вы киноман!");
    } else {
        alert("Произошла ошибка!");
    }
}
detectPersonalLevel();

function showMyDB(){
    if (obj.privat == false) {
        console.log(obj);
    }
}
showMyDB();

function writeYourGenres(){
    for(let i=1; i<4; i++){
        obj.genres[i-1] = prompt("Ваш любимый жанр под номером " +i, "");
    }
}
writeYourGenres();
