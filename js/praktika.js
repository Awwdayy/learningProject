"use strict";

const obj = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        obj.count = prompt("How many movies did you watch?", "");

        while (obj.count == '' || obj.count == null || isNaN(obj.count) || obj.count == undefined) {
        obj.count = prompt("How many movies did you watch?", "");
        }
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++){
            const a = prompt("What was the last movie you watched?", "");
            const b = prompt("How do you rate the last movie?", "");
    
            if (a != null && b != null && a.length != "" && b.length != "" && a.length < 50 && b.length < 50){
                obj.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function(){
        if (obj.count < 10 && obj.count >= 0){
            alert("Просмотрено мало фильмов!");
        } else if (obj.count >= 10 && obj.count <= 30){
            alert("Вы классический зритель!");
        } else if (obj.count > 30){
            alert("Вы киноман!");
        } else {
            alert("Произошла ошибка!");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(obj);
        }
    },
    toggleVisibleDB: function() {
        if(obj.privat) {
            obj.privat = false;
        } else {
            obj.privat = true;
        }
    },
    writeYourGenres: function(){
        for(let i=1; i<4; i++){
            obj.genres[i-1] = prompt("Ваш любимый жанр под номером " +i, "");
            console.log(obj.genres[i-1]);
        }
    }
};

obj.showMyDB(obj.privat);
obj.start();
obj.rememberMyFilms();
obj.detectPersonalLevel();
obj.toggleVisibleDB();
obj.writeYourGenres();
obj.showMyDB(obj.privat);
obj.showMyDB(obj.privat);
obj.toggleVisibleDB();
obj.showMyDB(obj.privat);
obj.toggleVisibleDB();
obj.showMyDB(obj.privat);