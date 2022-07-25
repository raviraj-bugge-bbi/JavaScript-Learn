'use strict';

console.log("---LECTURE: Looping Arrays, Breaking and Continuing---");

console.log("using array");

let percentages3 = [33,55,14,17];
let percentages2 = [];

for(let i = 0;i < percentages3.length;i++){
   let perc = percentageOfWorld1(percentages3[i]);
   percentages2.push(perc);
}

console.log(percentages2);

console.log("using Manual");

let percentageOfWorld3 = [percentageOfWorld1(percentages3[0]),percentageOfWorld1(percentages3[1]),percentageOfWorld1(percentages3[2]),percentageOfWorld1(percentages3[3])];
console.log(percentageOfWorld3);