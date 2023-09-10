"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

const {border, bg} = options.colors;

options.makeTest();

console.log(Object.keys(options).length);
console.log(options.name);

delete options.name;

console.log(options);
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
        console.log(`Svoystvo ${i} imeet znachenie ${options[key][i]}`);
        counter++;
        }
    } else {
        console.log(`Svoystvo ${key} imeet znachenie ${options[key]}`);
        counter++;
    }
}
console.log(counter);