`use strict`;

console.log("---Coding Challenge #1---")
let calcAverage = (a,b,c) => (a+b+c) / 3;

let dolphineAvg = calcAverage(44,23,71);
let koalaAvg = calcAverage(65,54,49);

function checkWinner(avgDolhins, avgKoalas) {
    if(avgDolhins>= avgKoalas * 2) {
        console.log("Team Dolphines win!");
    }
    else{
        console.log("Team Koalas win!")
    }
}

let result = checkWinner(dolphineAvg, koalaAvg);
console.log(result);