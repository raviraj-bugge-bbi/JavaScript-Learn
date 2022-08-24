`use strict`;

console.log("-------coding challenge 3--------");

const calcAverageHumanAge1 = age => age
    .map(x => x <= 2 ? 2 * x : 16 + x * 4)
    .filter(x => x >= 18)
    .reduce((acc, x, _, arr) => acc + x / arr.length, 0);

const da1 = calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
console.log(da1);
const da2 = calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);
console.log(da2);