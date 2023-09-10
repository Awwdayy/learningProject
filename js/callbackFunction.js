"use strict";



function done(){
    console.log("Я прошел этот урок!");
}

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', done);