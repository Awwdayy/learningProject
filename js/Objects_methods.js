"use strict";

const arr = [1, 11 , 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
arr[99] = 0;
console.log(arr.length);
console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} eto vnutri massiva ${arr}`);
});

arr.pop();
arr.push(10);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const str = prompt("", "");
const products = str.split(". ");
str.sort();
console.log(products.join('; '));


