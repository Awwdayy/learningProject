"use strict";

let numberOfFilms = prompt("How many movies did you watch?", "");
while (numberOfFilms == null){
    numberOfFilms = prompt("How many movies did you watch?", "");
    if (numberOfFilms != null){
        while(numberOfFilms.length < 1 || numberOfFilms.length > 50){
            numberOfFilms = prompt("How many movies did you watch?", "");
        }
    }
}

const obj = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (obj.count < 10 && obj.count >= 0){
    alert("Просмотрено мало фильмов!");
} else if (obj.count > 10 && obj.count < 30){
    alert("Вы классический зритель!");
} else if (obj.count > 30){
    alert("Вы киноман!");
} else {
    alert("Произошла ошибка!");
}

for (let i = 0; i < 2; i++){
    let a = prompt("What was the last movie you watched?", "");
    while (a == null){
        a = prompt("What was the last movie you watched?", "");
        if(a != null){
            while(a.length < 1 || a.length > 50){
                a = prompt("What was the last movie you watched?", "");
            }
        }
    }
    let b = prompt("How do you rate the last movie?", "");
    while (b == null){
        b = prompt("How do you rate the last movie?", "");
        if(b != null){
            while((b.length > 50) || (b.length < 1)){
                b = prompt("How do you rate the last movie?", "");
            }
        }
    } 
    obj.movies[a] = b;
}
console.log(obj);