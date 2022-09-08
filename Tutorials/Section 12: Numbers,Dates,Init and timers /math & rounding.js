`use strict`;
console.log(`------------Math & Rounding------------`);

//math.sqrt
console.log(Math.sqrt(25));

//math.min and math.max
console.log((Math.max(23,56,42,64,245)));
console.log((Math.min(23,56,42,64,245)));

//rounding integers
console.log(Math.trunc(26.265));

console.log(Math.round(26.465)); //rounds it nearest integer

console.log(Math.ceil(23.5)); //rounds it next whole number

console.log(Math.floor(23.5)); // rounds it to current number

//rounding decimals
console.log(25.1); //normal float value
console.log((2.6).toFixed(3)); //

console.log((2.66546).toPrecision(2)); //