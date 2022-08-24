`use strict`;

console.log("------For Each--------");

const transaction = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log("--------using for of---------");

for (const iterator of transaction) {
    if(iterator > 0){
        console.log(`you have deposited ${iterator}`);
    }
    else{
        console.log(`you have withdraw ${Math.abs(iterator)}`);
    }
}

console.log("--------using for each---------");

transaction.forEach(function(iterator,index,array) {
    if(iterator > 0){
        console.log(`${index + 1} you have deposited ${iterator}, ${array}`);
    }
    else{
        console.log(`${index + 1} you have withdraw ${Math.abs(iterator)}, ${array}`);
    }
});

// foreach is a higher order function which has call back function with
// argument(iterator, index, whole array) in the sequence

//-------------foreach on and sets----------------------
const map = new Map([
    ['key1','val1'],
    ['key2','val2'],
    ['key3','val3']
]);

map.forEach(function(val,key,map){
    console.log(`${key} : ${val}, ${map}`);
});

//---------------foreach on sets---------------------------------

const set = new Set(['a','d','b','c','d','b','e']);

set.forEach(function(val,key,set) {
    console.log(`${key} : ${val}, ${set}`);
});