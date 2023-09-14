'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Skolko filmov vi posmotreli?', '');

    while ( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) == true || numberOfFilms < 0){
        console.log(typeof(numberOfFilms));
        numberOfFilms = +prompt('Skolko filmov vi posmotreli?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Odin iz prosmotrenih filmov?', ''),
              b = prompt('Na skolko ocenite ego?');
              
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log('Prosmotreno malo filmov');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Standartnij zritelj');
    } else if(personalMovieDB.count >= 30) {
        console.log('Vi kinoman');
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Vash lyubimiy zhanr pod nomerom ${i+1}`);
    }
}

writeYourGenres();