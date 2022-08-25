`use strict`;

console.log("-------Coding Challenge 2--------");

//
for ([index, element] of game.scored.entries()) {
    console.log(`Goal ${index + 1} : ${element}`);
}

//
let avg = 0;
let odds = Object.values(game.odds);
for (const x of odds) {
    avg += x;
    avg /= odds.length;
}
console.log(avg);

//
// Odd of victory Bayern Munich: 1.33 
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

for (const x of odds) {

}