`use strict`;
console.log(`------------Converting and checking numbers------------`);

console.log(23 === 23.0);

console.log(0.1 + 0.2 === 0.3);

//number conversion

console.log(Number('23'));
console.log(+'23');

//parsing

console.log(Number.parseInt("24.12"));
console.log(Number.parseFloat("24"));

//methods to check if number

console.log(Number.isNaN(+'23x')); // .isNaN
console.log(Number.isFinite(20 / 0)); // .isFinite
console.log(Number.isInteger(21)); // .isInteger