"use strict";

console.log("---LECTURE: Function Declarations vs. Expressions---");
const worldPopulation = 7900;

function percentageOfWorld1(population) {
  let populationPrecentage = (population / 7900) * 100;
  return populationPrecentage;
}

let indiaPopulation = percentageOfWorld1(1441);
console.log(indiaPopulation);

let italyPopulation = percentageOfWorld1(500);
console.log(italyPopulation);

let roamPopulation = percentageOfWorld1(130);
console.log(roamPopulation);

//------------------------------------------------------------------------------

let percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

indiaPopulation = percentageOfWorld2(1441);
console.log(indiaPopulation);

italyPopulation = percentageOfWorld2(500);
console.log(italyPopulation);

roamPopulation = percentageOfWorld2(130);
console.log(roamPopulation);

//-------------------------------------------------------------------------------

const calculator = function numAdd(numOne, numTwo) {
  return numOne + numTwo;
};

let add = calculator(5, 3);
console.log(add);
